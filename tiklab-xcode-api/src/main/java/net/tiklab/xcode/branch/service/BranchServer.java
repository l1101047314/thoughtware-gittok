package net.tiklab.xcode.branch.service;

import net.tiklab.join.annotation.JoinProvider;
import net.tiklab.xcode.branch.model.BranchMessage;
import net.tiklab.xcode.branch.model.Branch;

import java.util.List;

@JoinProvider(model = Branch.class)
public interface BranchServer {



    /**
     * 查询所有分支
     * @param rpyId 仓库id
     * @return 分支信息列表
     */
    List<Branch> findAllBranch(String rpyId);

    /**
     * 创建分支
     * @param branchMessage 分支信息
     */
    void createBranch(BranchMessage branchMessage);

    /**
     * 删除分支
     * @param branchMessage 分支信息
     */
    void deleteBranch(BranchMessage branchMessage);





}
