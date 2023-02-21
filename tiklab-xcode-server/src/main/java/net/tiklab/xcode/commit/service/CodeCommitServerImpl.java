package net.tiklab.xcode.commit.service;

import net.tiklab.core.exception.ApplicationException;
import net.tiklab.xcode.code.model.Code;
import net.tiklab.xcode.code.service.CodeServer;
import net.tiklab.xcode.commit.model.*;
import net.tiklab.xcode.file.model.CodeFileMessage;
import net.tiklab.xcode.git.GitBranchUntil;
import net.tiklab.xcode.git.GitCommitUntil;
import net.tiklab.xcode.until.CodeFileUntil;
import net.tiklab.xcode.until.CodeFinal;
import net.tiklab.xcode.until.CodeUntil;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.attributes.Attribute;
import org.eclipse.jgit.diff.DiffEntry;
import org.eclipse.jgit.diff.DiffFormatter;
import org.eclipse.jgit.lib.FileMode;
import org.eclipse.jgit.lib.ObjectId;
import org.eclipse.jgit.lib.Repository;
import org.eclipse.jgit.revwalk.RevCommit;
import org.eclipse.jgit.revwalk.RevWalk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.*;

@Service
public class CodeCommitServerImpl implements CodeCommitServer {

    @Autowired
    private CodeServer codeServer;

    /**
     * 获取分支提交记录
     * @param commit 信息
     * @return 提交记录
     */
    @Override
    public List<CommitMessage> findBranchCommit(Commit commit) {
        String codeId = commit.getCodeId();


        Code code = codeServer.findOneCode(codeId);
        String repositoryAddress = CodeUntil.findRepositoryAddress(code, CodeFinal.TRUE);
        List<CommitMessage> branchCommit;
        try {
            Git git = Git.open(new File(repositoryAddress));
            Repository repository = git.getRepository();
            branchCommit = GitCommitUntil.findBranchCommit(repository,commit);
            git.close();
        } catch (IOException e) {
            throw new ApplicationException("提交记录获取失败："+e);
        }
        if (branchCommit.isEmpty()){
           return Collections.emptyList();
        }
        return commitSort(branchCommit, new ArrayList<>());
    }

    /**
     * 获取最近一次的提交记录
     * @param commit 仓库id
     * @return 提交记录
     */
    @Override
    public CommitMessage findLatelyBranchCommit(Commit commit) {
        List<CommitMessage> branchCommit = findBranchCommit(commit);
        if (branchCommit.isEmpty()){
            return null;
        }
        return branchCommit.get(0).getCommitMessageList().get(0);
    }

    /**
     * 获取提交的文件信息
     * @param commit commitId
     * @return 文件列表
     */
    @Override
    public FileDiffEntry findCommitDiffFileList(Commit commit) {

        Code code = codeServer.findOneCode(commit.getCodeId());
        String repositoryAddress = CodeUntil.findRepositoryAddress(code, CodeFinal.TRUE);
        try {
            Git git = Git.open(new File(repositoryAddress));
            Repository repository = git.getRepository();

            RevWalk walk = new RevWalk(repository);
            ObjectId objectId = GitBranchUntil.findBarthCommitId(repository,
                    commit.getBranch(), commit.isFindCommitId());;
            RevCommit revCommit =  walk.parseCommit(objectId);

            //获取旧树
            RevCommit oldRevCommit = GitCommitUntil.findPrevHash(revCommit, repository);

            FileDiffEntry changedList = GitCommitUntil.findFileChangedList(repository, revCommit,
                    oldRevCommit);
            List<CommitFileDiffList> diffList = changedList.getDiffList();
            int allAddLine = 0;
            int allDeleteLine = 0;
            for (CommitFileDiffList list : diffList) {
                int addLine = list.getAddLine();
                int deleteLine = list.getDeleteLine();
                allAddLine = allAddLine + addLine;
                allDeleteLine = allDeleteLine + deleteLine;
            }
            changedList.setDeleteLine(allDeleteLine);
            changedList.setAddLine(allAddLine);
            return changedList;
        } catch (IOException e) {
            throw new ApplicationException(e);
        }
    }

    /**
     * 提交文件模糊查询
     * @param commit 查询信息
     * @return 查询结果
     */
    @Override
    public FileDiffEntry findLikeCommitDiffFileList(Commit commit) {
        Code code = codeServer.findOneCode(commit.getCodeId());
        String repositoryAddress = CodeUntil.findRepositoryAddress(code, CodeFinal.TRUE);
        try {
            Git git = Git.open(new File(repositoryAddress));
            Repository repository = git.getRepository();

            RevWalk walk = new RevWalk(repository);
            ObjectId objectId = GitBranchUntil.findBarthCommitId(repository,
                    commit.getBranch(), commit.isFindCommitId());;
            RevCommit revCommit =  walk.parseCommit(objectId);

            //获取旧树
            RevCommit oldRevCommit = GitCommitUntil.findPrevHash(revCommit, repository);

            FileDiffEntry changedList = GitCommitUntil.findFileChangedList(repository, revCommit,
                    oldRevCommit);
            List<CommitFileDiffList> diffList = changedList.getDiffList();
            List<CommitFileDiffList> lists = new ArrayList<>();
            String likePath = commit.getLikePath();
            for (CommitFileDiffList list : diffList) {
                String newFilePath = list.getNewFilePath();
                String oldFilePath = list.getOldFilePath();
                if (!newFilePath.contains(likePath) && !oldFilePath.contains(likePath)){
                    continue;
                }
                lists.add(list);
            }
            changedList.setDiffList(lists);

            return changedList;
        } catch (IOException e) {
            throw new ApplicationException(e);
        }
    }

    /**
     * 获取提交的具体文件的改变内容
     * @param commit commitId
     * @return 文件列表
     */
    @Override
    public List<CommitFileDiff> findCommitFileDiff(Commit commit) {
        Code code = codeServer.findOneCode(commit.getCodeId());
        String repositoryAddress = CodeUntil.findRepositoryAddress(code, CodeFinal.TRUE);
        try {
            Git git = Git.open(new File(repositoryAddress));
            Repository repository = git.getRepository();

            RevWalk walk = new RevWalk(repository);
            ObjectId objectId = GitBranchUntil.findBarthCommitId(repository,
                    commit.getBranch(), commit.isFindCommitId());;
            RevCommit revCommit =  walk.parseCommit(objectId);

            //获取旧树
            RevCommit oldRevCommit = GitCommitUntil.findPrevHash(revCommit, repository);

            List<CommitFileDiff> fileChanged = GitCommitUntil.findFileChanged(repository,
                    revCommit, oldRevCommit, commit.getFilePath());
            git.close();
            return fileChanged;
        } catch (IOException e) {
            throw new ApplicationException(e);
        }
    }

    /**
     * 读取指定提交下的指定文件的指定行数
     * @param commit 提交信息
     * @return 文件内容
     */
    @Override
    public List<CommitFileDiff> findCommitLineFile(CommitFile commit){
        Code code = codeServer.findOneCode(commit.getCodeId());
        String repositoryAddress = CodeUntil.findRepositoryAddress(code, CodeFinal.TRUE);
        try {
            Git git = Git.open(new File(repositoryAddress));
            Repository repository = git.getRepository();

            CodeFileMessage fileMessage = CodeFileUntil.readBranchFile(repository,
                    commit.getCommitId(), commit.getPath(), true);
            String message = fileMessage.getFileMessage();
            String[] split = message.split("\n");

            List<CommitFileDiff> list = new ArrayList<>();
            String direction = commit.getDirection();
            int count = commit.getCount();
            int newStn = commit.getNewStn();
            int oldStn = commit.getOldStn();

            //向上获取
            int i = 0;
            int length = 0;
            if (direction.equals(CodeFinal.FILE_UP)){
                int number = newStn - count;
                length = newStn;
                if (number >= 0){
                    i = number;
                }
                if (count == -1){
                    i = 0;
                }
            }
            //向下获取
            if (direction.equals(CodeFinal.FILE_DOWN)){
                int number = newStn + count - split.length;
                i = newStn;
                if (number >= 0 || count == -1){
                    length = split.length;
                }else {
                    length = newStn + count;
                }
            }

            for (int i1 = i; i1 < length-1; i1++) {
                CommitFileDiff fileDiff = new CommitFileDiff();
                fileDiff.setText(split[i1]);
                fileDiff.setLeft(i1 + (newStn-oldStn));
                fileDiff.setRight(i1+1);
                fileDiff.setType(CodeFinal.DIFF_TYPE_TEXT);
                list.add(fileDiff);
            }
            git.close();
            return list;
        } catch (IOException e) {
            throw new ApplicationException(e);
        }
    }

    /**
     * 提交记录根据日期排序（按天）
     * @param branchCommit 提交记录
     * @param list 每天的提交记录
     * @return 提交记录
     */
    private List<CommitMessage> commitSort(List<CommitMessage> branchCommit, List<CommitMessage> list){
        List<CommitMessage> removeList = new ArrayList<>();
        CommitMessage commitMessage = new CommitMessage();
        Date date = branchCommit.get(0).getDateTime();
        String time= CodeUntil.date(2, date);
        commitMessage.setCommitTime(time);
        for (CommitMessage message : branchCommit) {
            Date dateTime = message.getDateTime();
            if (!time.equals(CodeUntil.date(2, dateTime))) {
                continue;
            }
            removeList.add(message);
        }
        commitMessage.setCommitMessageList(removeList);
        list.add(commitMessage);
        branchCommit.removeAll(removeList);
        if (branchCommit.size() != 0){
            commitSort(branchCommit,list);
        }
        return list;
    }





}









































