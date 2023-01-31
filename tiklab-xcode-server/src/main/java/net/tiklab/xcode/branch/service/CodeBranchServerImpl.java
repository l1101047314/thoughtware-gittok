package net.tiklab.xcode.branch.service;

import net.tiklab.core.exception.ApplicationException;
import net.tiklab.xcode.branch.model.BranchMessage;
import net.tiklab.xcode.branch.model.CodeBranch;
import net.tiklab.xcode.code.model.Code;
import net.tiklab.xcode.code.service.CodeServer;
import net.tiklab.xcode.git.GitBranchUntil;
import net.tiklab.xcode.git.GitUntil;
import net.tiklab.xcode.until.CodeUntil;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class CodeBranchServerImpl implements CodeBranchServer {


    @Autowired
    CodeServer codeServer;


    /**
     * 查询所有分支
     * @param codeId 仓库id
     * @return 分支信息列表
     */
    @Override
    public List<CodeBranch> findAllBranch(String codeId) {
        Code code = codeServer.findOneCode(codeId);
        String address = code.getAddress();
        String s = CodeUntil.findRepositoryAddress(address,code.getCodeGroup());
        List<CodeBranch> codeBranches;
        try {
            codeBranches = GitBranchUntil.repositoryBranch(s + ".git");
        } catch (IOException e) {
            throw new ApplicationException("分支信息获取失败："+e);
        }

        return codeBranches;
    }

    /**
     * 创建分支
     * @param branchMessage 分支信息
     */
    @Override
    public void createBranch(BranchMessage branchMessage) {
        String codeId = branchMessage.getCodeId();
        Code code = codeServer.findOneCode(codeId);
        String repositoryAddress = CodeUntil.findRepositoryAddress(code.getAddress(), code.getCodeGroup());
        try {
            GitBranchUntil.createRepositoryBranch(repositoryAddress + ".git", branchMessage.getBranchName(), branchMessage.getPoint());
        } catch (IOException | GitAPIException e) {
            throw new ApplicationException("分支创建失败"+e);
        }
    }

    /**
     * 删除分支
     * @param branchMessage 分支信息
     */
    @Override
    public void deleteBranch(BranchMessage branchMessage){
        String codeId = branchMessage.getCodeId();
        Code code = codeServer.findOneCode(codeId);
        String repositoryAddress = CodeUntil.findRepositoryAddress(code.getAddress(), code.getCodeGroup());
        try {
            GitBranchUntil.deleteRepositoryBranch(repositoryAddress + ".git", branchMessage.getBranchName());
        } catch (IOException | GitAPIException e) {
            throw new ApplicationException("分支删除失败"+e);
        }

    }



}







































