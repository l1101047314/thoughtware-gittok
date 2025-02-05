package io.thoughtware.gittok.common.git;

import io.thoughtware.gittok.commit.model.*;
import io.thoughtware.gittok.common.RepositoryFinal;
import io.thoughtware.gittok.common.RepositoryUtil;
import io.thoughtware.core.exception.ApplicationException;
import org.apache.commons.lang.StringUtils;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.diff.DiffEntry;
import org.eclipse.jgit.diff.DiffFormatter;
import org.eclipse.jgit.diff.RawTextComparator;
import org.eclipse.jgit.lib.*;
import org.eclipse.jgit.revwalk.RevCommit;
import org.eclipse.jgit.revwalk.RevTree;
import org.eclipse.jgit.revwalk.RevWalk;
import org.eclipse.jgit.treewalk.AbstractTreeIterator;
import org.eclipse.jgit.treewalk.CanonicalTreeParser;
import org.eclipse.jgit.treewalk.TreeWalk;
import org.eclipse.jgit.treewalk.filter.PathFilter;
import org.eclipse.jgit.util.io.DisabledOutputStream;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * jgit获取仓库提交信息
 */
public class GitCommitUntil {


    /**
     * 获取分支的提交记录
     * @param repository 仓库
     * @param commit 提交信息
     * @return 提交记录
     * @throws IOException 仓库不存在
     * @throws ApplicationException 分支不存在
     */
    public static List<CommitMessage> findBranchCommit(Repository repository , Commit commit)
            throws IOException , ApplicationException {
        String branch = commit.getBranch();
        boolean isCommitId = commit.isFindCommitId();

        ObjectId objectId;

        if (!isCommitId){
            //分支为空设置为默认
            if (branch == null) {
                branch = repository.getBranch();
            }
            //分支是否存在
            Ref head = repository.findRef(branch);
            if (head == null) {
                return Collections.emptyList();
            }
            objectId = head.getObjectId();
        }else {
            objectId = ObjectId.fromString(branch);
        }
        RevWalk revWalk = new RevWalk(repository);
        revWalk.markStart(revWalk.parseCommit(objectId));

        int i = 0;
        String number = commit.getNumber();
        List<CommitMessage> list = new ArrayList<>();
        for (RevCommit revCommit : revWalk) {

            if (StringUtils.isEmpty(commit.getCommitInfo())&&number != null && i < 50){
                i++;
                continue;
            }
            //默认50条，大于50条释放资源
            if (StringUtils.isEmpty(commit.getCommitInfo())&&number == null && i >= 50){
                revCommit.disposeBody();
                revWalk.close();
                list.sort(Comparator.comparing(CommitMessage::getDateTime).reversed());
                return list;
            }

         /*   TreeWalk treeWalk = new TreeWalk(repository);
            treeWalk.reset(revCommit.getTree());*/


            CommitMessage commitMessage;
            //根据提交用户查询
            if (StringUtils.isNotEmpty(commit.getCommitUser())){
                if (revCommit.getAuthorIdent().getName().equals(commit.getCommitUser())){
                    commitMessage = getCommitMessage(revCommit);
                    list.add(commitMessage);
                }
                continue;
            }

            //根据输入提交信息查询
            if (StringUtils.isNotEmpty(commit.getCommitInfo())){
                boolean contains = revCommit.getShortMessage().contains(commit.getCommitInfo());
                if (contains){
                    commitMessage = getCommitMessage(revCommit);
                    list.add(commitMessage);
                }
                continue;
            }

            commitMessage = getCommitMessage(revCommit);
            list.add(commitMessage);

            //treeWalk.close();
            revCommit.disposeBody();
            i++;
        }
        revWalk.close();

        list.sort(Comparator.comparing(CommitMessage::getDateTime).reversed());
        return list;
    }



    /**
     * 获取两个不同分支的差异提交
     * @param git 仓库
     * @param commit 提交信息
     * @return 提交记录
     * @throws IOException 仓库不存在
     * @throws ApplicationException 分支不存在
     */
    public static List<CommitMessage> findDiffBranchCommit(Git git , Commit commit) throws IOException {
        List<CommitMessage> diffList = new ArrayList<>();

        //目标分支
        List<RevCommit> targetList = new ArrayList<>();
        RevWalk targetRevWalk = new RevWalk(git.getRepository());
        ObjectId targetObjectId = git.getRepository().resolve(commit.getTargetBranch());
        targetRevWalk.markStart(targetRevWalk.parseCommit(targetObjectId));
        for (RevCommit revCommit:targetRevWalk){
            targetList.add(revCommit);
        }

        //源分支
        RevWalk originRevWalk = new RevWalk(git.getRepository());
        ObjectId originObjectId = git.getRepository().resolve(commit.getBranch());
        originRevWalk.markStart(originRevWalk.parseCommit(originObjectId));

        for (RevCommit revCommit:originRevWalk){
            String commitId = revCommit.getId().getName();
            List<RevCommit> collect = targetList.stream().filter(a -> a.getId().getName().equals(commitId)).collect(Collectors.toList());
            if (collect.isEmpty()){
                CommitMessage commitMessage = getCommitMessage(revCommit);
                diffList.add(commitMessage);
            }
        }

        return diffList;
    }

    /**
     * 获取两个不同分支的差异的文件
     * @param git 仓库
     * @param commit 提交信息
     * @return 提交记录
     * @throws IOException 仓库不存在
     * @throws ApplicationException 分支不存在
     */
   public static FileDiffEntry findDiffBranchFile(Git git , Commit commit) throws IOException {

       FileDiffEntry fileDiffEntry = new FileDiffEntry();
       List<CommitFileDiffList> list = new ArrayList<>();

       Repository repository = git.getRepository();
       RevWalk revWalk = new RevWalk(git.getRepository());

       //目标分支
        ObjectId targetObjectId= git.getRepository().resolve(commit.getTargetBranch());
        RevCommit targetCommit = revWalk.parseCommit(targetObjectId);

        //源分支
        ObjectId originObjectId = git.getRepository().resolve(commit.getBranch());
        RevCommit originCommit = revWalk.parseCommit(originObjectId);

        DiffFormatter diffFormatter = new DiffFormatter(System.out);
        diffFormatter.setRepository(git.getRepository());
        List<DiffEntry> diffEntries = diffFormatter.scan(targetCommit.getTree(), originCommit.getTree());

        int allAddLine=0;     //总的增加行数
        int allDeleteLine=0;  //总的减少行数

        // 遍历差异项，处理每个不同的提交
        for (DiffEntry diffEntry : diffEntries) {
            CommitFileDiffList commitFileDiffList = new CommitFileDiffList();
            String name = diffEntry.getChangeType().name();
            String oldPath = diffEntry.getOldPath();
            String newPath = diffEntry.getNewPath();
            FileMode oldMode = diffEntry.getOldMode();
            FileMode newMode = diffEntry.getNewMode();

            commitFileDiffList.setType(name);
            commitFileDiffList.setOldFilePath(oldPath);
            commitFileDiffList.setOldFileType(oldMode.toString());
            commitFileDiffList.setNewFilePath(newPath);
            commitFileDiffList.setNewFileType(newMode.toString());

            String path ;
            //通过文件的后缀获取类型 java、js...
            if (!newPath.equals(RepositoryFinal.FILE_PATH_NULL)){
                path = newPath;
                commitFileDiffList.setFileType(StringUtils.substringAfterLast(newPath,"/"));
            }else {
                path = oldPath;
                commitFileDiffList.setFileType(StringUtils.substringAfterLast(oldPath,"/"));
            }

            //获取文件差异详情
            int deleteLine=0;
            int addLine=0;
            String[] diffLines = findFileChangedList(repository,originCommit, targetCommit, path);
            for (String line : diffLines) {
                if (line.startsWith("+++") || line.startsWith("---")){
                    continue;
                }
                if (line.startsWith("-")  ){
                    deleteLine+=1;
                }
                if (line.startsWith("+")  ){
                    addLine+=1;
                }
            }
            commitFileDiffList.setAddLine(addLine);
            commitFileDiffList.setDeleteLine(deleteLine);

            //获取总的变动行数
            allAddLine+=addLine;
            allDeleteLine+=deleteLine;

            list.add(commitFileDiffList);
        }

       fileDiffEntry.setAddLine(allAddLine);
       fileDiffEntry.setDeleteLine(allDeleteLine);
       fileDiffEntry.setDiffList(list);

       return fileDiffEntry;
    }


    /**
     * 获取两个不同分支的差异的文件的详情
     * @param git 仓库
     * @param commit 提交信息
     * @return 提交记录
     * @throws IOException 仓库不存在
     * @throws ApplicationException 分支不存在
     */
    public static List<CommitFileDiff>  findDiffBranchFileDetails(Git git , Commit commit) throws IOException{

        Repository repository = git.getRepository();
        RevWalk revWalk = new RevWalk(git.getRepository());

        //目标分支
        ObjectId targetObjectId= git.getRepository().resolve(commit.getTargetBranch());
        RevCommit targetCommit = revWalk.parseCommit(targetObjectId);

        //源分支
        ObjectId originObjectId = git.getRepository().resolve(commit.getBranch());
        RevCommit originCommit = revWalk.parseCommit(originObjectId);

        //旧树对象
        CanonicalTreeParser oldTreeIter = new CanonicalTreeParser();
        oldTreeIter.reset(repository.newObjectReader(), targetCommit.getTree());

        //新树对象
        CanonicalTreeParser newTreeIter = new CanonicalTreeParser();
        newTreeIter.reset(repository.newObjectReader(), originCommit.getTree());

        return getFileDetailsDiff(repository,oldTreeIter,newTreeIter,commit.getFilePath());
    }



    /**
     * 获取分支的提交记录
     * @param repository 仓库
     * @param branch 分支
     * @param findCommitState 是否是查询提交文件详情的状态 true、false
     * @return 提交记录
     * @throws IOException 仓库不存在
     * @throws ApplicationException 分支不存在
     */
    public static CommitMessage findOneBranchCommit(Repository repository, String branch,boolean findCommitState)
            throws IOException , ApplicationException {

        ObjectId objectId;
        if (findCommitState){
             objectId = ObjectId.fromString(branch);
        }else {
            objectId=  repository.findRef(branch).getObjectId();
        }


        RevWalk revWalk = new RevWalk(repository);
        revWalk.markStart(revWalk.parseCommit(objectId));

        for (RevCommit revCommit : revWalk) {

            TreeWalk treeWalk = new TreeWalk(repository);
            treeWalk.reset(revCommit.getTree());

            CommitMessage commitMessage = getCommitMessage(revCommit);

            treeWalk.close();
            revCommit.disposeBody();
            revWalk.close();
            return commitMessage;
        }
        return null;
    }

    /**
     * 对比两棵树的提交
     * @param repo 仓库信息
     * @param newCommit 新树
     * @param oldCommit 旧树
     * @param findState 查询状态  all：查询所有
     * @return 文件对比信息
     * @throws IOException 扫描失败
     */
    public static FileDiffEntry findFileChangedListX(Repository repo, RevCommit newCommit, RevCommit oldCommit,String findState)
            throws IOException {
        FileDiffEntry fileDiffEntry = new FileDiffEntry();

        // 获取父提交ID
        RevCommit[] parents = newCommit.getParents();
        List<String> parentCommitIds = new ArrayList<>();
        for (RevCommit parent : parents) {
            parentCommitIds.add(parent.getId().getName());
            System.out.println("Parent Commit ID: " + parent.getId());
        }

        fileDiffEntry.setParentCommitIds(parentCommitIds);
        // 获取文件的详细差异
        ObjectReader reader = repo.newObjectReader();
        CanonicalTreeParser oldTreeIter = null;
        if (oldCommit != null){
            oldTreeIter = new CanonicalTreeParser();
            oldTreeIter.reset(reader, oldCommit.getTree());
        }

        CanonicalTreeParser newTreeIter = new CanonicalTreeParser();
        newTreeIter.reset(reader, newCommit.getTree());

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        DiffFormatter diffFormatter = new DiffFormatter(out);
        diffFormatter.setRepository(repo);
        diffFormatter.setDiffComparator(RawTextComparator.DEFAULT);
        diffFormatter.setDetectRenames(true);
        List<DiffEntry> diffEntries;
        if (oldTreeIter != null){
            diffEntries = diffFormatter.scan(oldTreeIter, newTreeIter);
        }else {
            diffEntries =  diffFormatter.scan(oldCommit, newCommit);
        }


        List<CommitFileDiffList> list = new ArrayList<>();
        int a = 0;
        for (DiffEntry diffEntry : diffEntries) {
            //查询状态为查询所有 就直接处理50条以后的参数
           /* if (findState != null && a <40){
                a++;
                continue;
            }
            //第一次查询只查询前五条
            if (findState == null && a >=40){
                break;
            }*/
            CommitFileDiffList commitFileDiffList = new CommitFileDiffList();
            String name = diffEntry.getChangeType().name();
            String oldPath = diffEntry.getOldPath();
            String newPath = diffEntry.getNewPath();
            FileMode oldMode = diffEntry.getOldMode();
            FileMode newMode = diffEntry.getNewMode();
            commitFileDiffList.setType(name);
            commitFileDiffList.setOldFilePath(oldPath);
            commitFileDiffList.setOldFileType(oldMode.toString());
            commitFileDiffList.setNewFilePath(newPath);
            commitFileDiffList.setNewFileType(newMode.toString());
            int addLine = 0;
            int deleteLine = 0;
            int i;
            String path ;
            if (!newPath.equals(RepositoryFinal.FILE_PATH_NULL)){
                path = newPath;
                i = newPath.lastIndexOf(".");
                commitFileDiffList.setFileType(newPath.substring(i+1));
            }else {
                path = oldPath;
                i = oldPath.lastIndexOf(".");
                commitFileDiffList.setFileType(oldPath.substring(i+1));
            }

            String[]  diffLines = findFileChangedList(repo,newCommit,oldCommit,path);
            for (String line : diffLines) {
                if (line.startsWith("+++") || line.startsWith("---")){
                    continue;
                }
                if (line.startsWith("-")  ){
                    deleteLine++;
                }
                if (line.startsWith("+")  ){
                    addLine++;
                }
            }
            commitFileDiffList.setAddLine(addLine);
            commitFileDiffList.setDeleteLine(deleteLine);
            list.add(commitFileDiffList);

            a++;
        }
        fileDiffEntry.setDiffList(list);

        CommitMessage branchCommit = GitCommitUntil.findOneBranchCommit(repo, newCommit.getId().getName(),true);

        if (branchCommit != null){
            fileDiffEntry.setCommitMessage(branchCommit.getCommitMessage());
            fileDiffEntry.setCommitTime(branchCommit.getCommitTime());
            fileDiffEntry.setCommitUser(branchCommit.getCommitUser());
        }
        return fileDiffEntry;
    }

    /**
     * 对比两棵树中具体文件的提交
     * @param repo 仓库信息
     * @param newCommit 新树
     * @param oldCommit 旧树
     * @param filePath  文件地址
     * @return 文件对比信息
     * @throws IOException 扫描失败
     */
    public static  String[] findFileChangedList(Repository repo, RevCommit newCommit, RevCommit oldCommit, String filePath)
            throws IOException {

        // 获取文件的详细差异
        ObjectReader reader = repo.newObjectReader();
        CanonicalTreeParser oldTreeIter = null;
        if (oldCommit != null){
            oldTreeIter = new CanonicalTreeParser();
            oldTreeIter.reset(reader, oldCommit.getTree());
        }

        CanonicalTreeParser newTreeIter = new CanonicalTreeParser();
        newTreeIter.reset(reader, newCommit.getTree());

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        DiffFormatter diffFormatter = new DiffFormatter(out);
        diffFormatter.setRepository(repo);
        diffFormatter.setDiffComparator(RawTextComparator.DEFAULT);
        diffFormatter.setDetectRenames(true);
        //过滤指定文件
        PathFilter pathFilter = PathFilter.create(filePath);
        diffFormatter.setPathFilter(pathFilter);
        List<DiffEntry> diffs;
        if (oldTreeIter != null){
            diffs =  diffFormatter.scan(oldTreeIter, newTreeIter);
        }else {
            diffs =  diffFormatter.scan(oldCommit, newCommit);
        }
        String[] diffLines = new String[0];
        for (DiffEntry diff : diffs) {
            diffFormatter.format(diff);
            String diffText = out.toString();
             diffLines = diffText.split("\n");
        }

        return diffLines;
    }



    /**
     *  查询具体文件两次提交的差异
     * @param repository 仓库信息
     * @param commitId 当前的commitId
     * @param originCommitId 源commitId
     * @param filePath  文件地址
     * @return 文件对比信息
     */
    public static List<CommitFileDiff> findDiffCommitFileDetails(Repository repository,String commitId,
                                                                 String originCommitId,String filePath) throws IOException {

        //获取可遍历的仓库对象
        RevWalk walk = new RevWalk(repository);

        RevCommit revCommit =  walk.parseCommit(ObjectId.fromString(commitId));
        RevCommit targetRevCommit =  walk.parseCommit(ObjectId.fromString(originCommitId));

        //旧树对象
        CanonicalTreeParser oldTreeIter = new CanonicalTreeParser();
        oldTreeIter.reset(repository.newObjectReader(), targetRevCommit.getTree());

        //新树对象
        CanonicalTreeParser newTreeIter = new CanonicalTreeParser();
        newTreeIter.reset(repository.newObjectReader(), revCommit.getTree());

       return getFileDetailsDiff(repository,oldTreeIter,newTreeIter,filePath);

       /* //创建两次提交的差异对象
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        DiffFormatter diffFormatter = new DiffFormatter(out);
        diffFormatter.setRepository(repository);
        diffFormatter.setDiffComparator(RawTextComparator.DEFAULT);
        diffFormatter.setDetectRenames(true);

        //过滤其他文件只匹配filePath文件
        PathFilter pathFilter = PathFilter.create(filePath);
        diffFormatter.setPathFilter(pathFilter);

        List<DiffEntry> diffs =  diffFormatter.scan(oldTreeIter, newTreeIter);


        List<CommitFileDiff> list = new ArrayList<>();
        int left = 0;int right = 0;int number = 0;
        int oldStart = 0;int oldLines = 0;int newStart = 0;int newLines = 0;

        for (DiffEntry diff : diffs) {
            diffFormatter.format(diff);
            String diffText = out.toString();
            String[] diffLines = diffText.split("\n");
            for (int i = 3; i < diffLines.length; i++) {
                String line = diffLines[i];

                if (line.startsWith("+++") || line.startsWith("---")){
                    continue;
                }
                CommitFileDiff fileDiff = new CommitFileDiff();
                if (line.startsWith("@@") && line.endsWith("@@")){
                    Pattern pattern = Pattern.compile(RepositoryFinal.DIFF_REGEX);
                    Matcher matcher = pattern.matcher(line);
                    //解析文件变更信息
                    if (matcher.matches()){
                        oldStart = Integer.parseInt(matcher.group(1));
                        oldLines = matcher.group(2) != null ? Integer.parseInt(matcher.group(2)) : 0;
                        newStart = Integer.parseInt(matcher.group(3));
                        newLines = matcher.group(4) != null ? Integer.parseInt(matcher.group(4)) : 0;
                    }
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE);
                    left = 0;right = 0;number = 0;
                    fileDiff.setText(line);
                }
                //文件行号
                fileDiff.setRight(newStart + number + right);
                fileDiff.setLeft(oldStart + number + left);

                //文件添加内容
                boolean addWith = line.startsWith(RepositoryFinal.DIFF_TYPE_ADD);
                if (addWith){
                    right++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_ADD);
                    fileDiff.setText(line.substring(1));
                }
                //文件删除内容
                boolean deleteWith = line.startsWith(RepositoryFinal.DIFF_TYPE_DELETE);
                if (deleteWith){
                    left++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_DELETE);
                    fileDiff.setText(line.substring(1));
                }
                //未改变内容
                boolean b = !line.startsWith("@@") || !line.endsWith("@@");
                if(b && !addWith && !deleteWith ) {
                    number++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_TEXT);
                    fileDiff.setText(line);
                }
                fileDiff.setIndex(i-4);
                list.add(fileDiff);
            }
        }
        return list;*/
    }

    /**
     * 获取上一次提交信息
     * @param commit 提交信息
     * @param repo 仓库
     * @return 上一次提交
     * @throws IOException 仓库不存在
     */
    public static RevCommit findPrevHash(RevCommit commit, Repository repo)
            throws  IOException {
        RevWalk walk = new RevWalk(repo);
        walk.markStart(commit);
        int count = 0;
        for (RevCommit rev : walk) {
            if (count == 1) {
                return rev;
            }
            count++;
        }
        walk.dispose();
        return null;
    }

    /**
     * 获取单个文件的提交历史
     * @param git git实例
     * @param file 文件名称
     * @return 提交历史
     * @throws GitAPIException 信息获取失败
     */
    public static List<Map<String,String>> gitFileCommitLog(Git git,String commitId,String file)
            throws GitAPIException, IOException {
        List<Map<String,String>> list = new ArrayList<>();

        ObjectId objectId = ObjectId.fromString(commitId);


        RevCommit revCommits = git.getRepository().parseCommit(objectId);

        Iterable<RevCommit> log = git.log()
                .add(revCommits)
                .addPath(file)
                .call();
        for (RevCommit revCommit : log) {
            Map<String,String> map = new HashMap<>();
            Date date = revCommit.getAuthorIdent().getWhen();
            String message = revCommit.getShortMessage();

            map.put("message",message);//转换时间
            map.put("time", RepositoryUtil.time(date,"commit")+"前");
            map.put("date", String.valueOf(date.getTime()));
            list.add(map);
        }
        return list;
    }

    /**
     * 获取CommitMessage对象
     * @param revCommit revCommit
     */
    public static CommitMessage getCommitMessage(RevCommit revCommit ){
        Date date = revCommit.getAuthorIdent().getWhen();//时间
        String name = revCommit.getAuthorIdent().getName();//提交人


        CommitMessage commitMessage = new CommitMessage();
        commitMessage.setCommitId(revCommit.getId().getName());//commitId
        commitMessage.setCommitMessage(revCommit.getShortMessage());//提交信息
        commitMessage.setCommitUser(name);
        commitMessage.setDateTime(date);
        commitMessage.setCommitTime(RepositoryUtil.time(date,"commit")+"前");//转换时间

        return commitMessage;
    }


    /**
     * 获取文件详情的不同
     * @param repository repository
     */
    public static  List<CommitFileDiff> getFileDetailsDiff(Repository repository,CanonicalTreeParser oldTreeIter,
                                          CanonicalTreeParser newTreeIter,String filePath) throws IOException {
//创建两次提交的差异对象
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        DiffFormatter diffFormatter = new DiffFormatter(out);
        diffFormatter.setRepository(repository);
        diffFormatter.setDiffComparator(RawTextComparator.DEFAULT);
        diffFormatter.setDetectRenames(true);

        //过滤其他文件只匹配filePath文件
        PathFilter pathFilter = PathFilter.create(filePath);
        diffFormatter.setPathFilter(pathFilter);

        List<DiffEntry> diffs =  diffFormatter.scan(oldTreeIter, newTreeIter);


        List<CommitFileDiff> list = new ArrayList<>();
        int left = 0;int right = 0;int number = 0;
        int oldStart = 0;int oldLines = 0;int newStart = 0;int newLines = 0;

        for (DiffEntry diff : diffs) {
            diffFormatter.format(diff);
            String diffText = out.toString();
            String[] diffLines = diffText.split("\n");
            for (int i = 3; i < diffLines.length; i++) {
                String line = diffLines[i];

                if (line.startsWith("+++") || line.startsWith("---")){
                    continue;
                }
                CommitFileDiff fileDiff = new CommitFileDiff();
                if (line.startsWith("@@") && line.endsWith("@@")){
                    Pattern pattern = Pattern.compile(RepositoryFinal.DIFF_REGEX);
                    Matcher matcher = pattern.matcher(line);
                    //解析文件变更信息
                    if (matcher.matches()){
                        oldStart = Integer.parseInt(matcher.group(1));
                        oldLines = matcher.group(2) != null ? Integer.parseInt(matcher.group(2)) : 0;
                        newStart = Integer.parseInt(matcher.group(3));
                        newLines = matcher.group(4) != null ? Integer.parseInt(matcher.group(4)) : 0;
                    }
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE);
                    left = 0;right = 0;number = 0;
                    fileDiff.setText(line);
                }
                //文件行号
                fileDiff.setRight(newStart + number + right);
                fileDiff.setLeft(oldStart + number + left);

                //文件添加内容
                boolean addWith = line.startsWith(RepositoryFinal.DIFF_TYPE_ADD);
                if (addWith){
                    right++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_ADD);
                    fileDiff.setText(line.substring(1));
                }
                //文件删除内容
                boolean deleteWith = line.startsWith(RepositoryFinal.DIFF_TYPE_DELETE);
                if (deleteWith){
                    left++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_DELETE);
                    fileDiff.setText(line.substring(1));
                }
                //未改变内容
                boolean b = !line.startsWith("@@") || !line.endsWith("@@");
                if(b && !addWith && !deleteWith ) {
                    number++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_TEXT);
                    fileDiff.setText(line);
                }
                fileDiff.setIndex(i-4);
                list.add(fileDiff);
            }
        }
        return list;
    }


    /**
     * 对比两棵树中具体文件的提交
     * @param repo 仓库信息
     * @param newCommit 新树
     * @param oldCommit 旧树
     * @param filePath  文件地址
     * @return 文件对比信息
     * @throws IOException 扫描失败
     */
    public static List<CommitFileDiff> findFileChanged(Repository repo, RevCommit newCommit, RevCommit oldCommit, String filePath)
            throws IOException {

        // 获取文件的详细差异
        ObjectReader reader = repo.newObjectReader();
        CanonicalTreeParser oldTreeIter = null;
        if (oldCommit != null){
            oldTreeIter = new CanonicalTreeParser();
            oldTreeIter.reset(reader, oldCommit.getTree());
        }

        CanonicalTreeParser newTreeIter = new CanonicalTreeParser();
        newTreeIter.reset(reader, newCommit.getTree());

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        DiffFormatter diffFormatter = new DiffFormatter(out);
        diffFormatter.setRepository(repo);
        diffFormatter.setDiffComparator(RawTextComparator.DEFAULT);
        diffFormatter.setDetectRenames(true);
        //过滤指定文件
        PathFilter pathFilter = PathFilter.create(filePath);
        diffFormatter.setPathFilter(pathFilter);
        List<DiffEntry> diffs;
        if (oldTreeIter != null){
            diffs =  diffFormatter.scan(oldTreeIter, newTreeIter);
        }else {
            diffs =  diffFormatter.scan(oldCommit, newCommit);
        }

        List<CommitFileDiff> list = new ArrayList<>();

        int left = 0;int right = 0;int number = 0;
        int oldStart = 0;int oldLines = 0;int newStart = 0;int newLines = 0;

        for (DiffEntry diff : diffs) {
            diffFormatter.format(diff);
            String diffText = out.toString();
            int length = diffText.length();
            // if (filePath.endsWith(".js") && length > 20000){
            //     CommitFileDiff fileDiff = new CommitFileDiff();
            //     fileDiff.setRight(1);
            //     fileDiff.setLeft(1);
            //     fileDiff.setType(RepositoryFinal.DIFF_TYPE_BIG);
            //     list.add(fileDiff);
            //     return list;
            // }
            String[] diffLines = diffText.split("\n");
            for (int i = 3; i < diffLines.length; i++) {
                String line = diffLines[i];

                if (line.startsWith("+++") || line.startsWith("---")){
                    continue;
                }
                CommitFileDiff fileDiff = new CommitFileDiff();
                if (line.startsWith("@@") && line.endsWith("@@")){
                    Pattern pattern = Pattern.compile(RepositoryFinal.DIFF_REGEX);
                    Matcher matcher = pattern.matcher(line);
                    //解析文件变更信息
                    if (matcher.matches()){
                        oldStart = Integer.parseInt(matcher.group(1));
                        oldLines = matcher.group(2) != null ? Integer.parseInt(matcher.group(2)) : 0;
                        newStart = Integer.parseInt(matcher.group(3));
                        newLines = matcher.group(4) != null ? Integer.parseInt(matcher.group(4)) : 0;
                    }
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE);
                    left = 0;right = 0;number = 0;
                    fileDiff.setText(line);
                }
                //文件行号
                fileDiff.setRight(newStart + number + right);
                fileDiff.setLeft(oldStart + number + left);

                //文件添加内容
                boolean addWith = line.startsWith(RepositoryFinal.DIFF_TYPE_ADD);
                if (addWith){
                    right++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_ADD);
                    fileDiff.setText(line.substring(1));
                }
                //文件删除内容
                boolean deleteWith = line.startsWith(RepositoryFinal.DIFF_TYPE_DELETE);
                if (deleteWith){
                    left++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_DELETE);
                    fileDiff.setText(line.substring(1));
                }
                //未改变内容
                boolean b = !line.startsWith("@@") || !line.endsWith("@@");
                if(b && !addWith && !deleteWith ) {
                    number++;
                    fileDiff.setType(RepositoryFinal.DIFF_TYPE_TEXT);
                    fileDiff.setText(line);
                }

                fileDiff.setIndex(i-4);
                list.add(fileDiff);
            }
        }

        return list;
    }



}










































