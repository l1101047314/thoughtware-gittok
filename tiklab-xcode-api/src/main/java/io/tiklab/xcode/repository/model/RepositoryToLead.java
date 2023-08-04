package io.tiklab.xcode.repository.model;

import io.tiklab.postin.annotation.ApiModel;
import io.tiklab.postin.annotation.ApiProperty;

@ApiModel
public class RepositoryToLead {

    @ApiProperty(name="repositoryName",desc="仓库名字")
    private String repositoryName;

    @ApiProperty(name="groupName",desc="仓库组名字")
    private String groupName;

    @ApiProperty(name="rule",desc="权限")
    private String rule;

    @ApiProperty(name="repositoryUrl",desc="仓库路径")
    private String repositoryUrl;

    @ApiProperty(name="httpRepositoryUrl",desc="远程仓库地址clone地址")
    private String httpRepositoryUrl;

    @ApiProperty(name="userId",desc="执行导入人")
    private String userId;

    @ApiProperty(name="thirdRepositoryId",desc="第三方仓库的id")
    private String thirdRepositoryId;

    @ApiProperty(name="importAuthId",desc="importAuthId")
    private String importAuthId;

    public String getRepositoryName() {
        return repositoryName;
    }

    public void setRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getRule() {
        return rule;
    }

    public void setRule(String rule) {
        this.rule = rule;
    }

    public String getRepositoryUrl() {
        return repositoryUrl;
    }

    public void setRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getHttpRepositoryUrl() {
        return httpRepositoryUrl;
    }

    public void setHttpRepositoryUrl(String httpRepositoryUrl) {
        this.httpRepositoryUrl = httpRepositoryUrl;
    }

    public String getThirdRepositoryId() {
        return thirdRepositoryId;
    }

    public void setThirdRepositoryId(String thirdRepositoryId) {
        this.thirdRepositoryId = thirdRepositoryId;
    }

    public String getImportAuthId() {
        return importAuthId;
    }

    public void setImportAuthId(String importAuthId) {
        this.importAuthId = importAuthId;
    }
}
