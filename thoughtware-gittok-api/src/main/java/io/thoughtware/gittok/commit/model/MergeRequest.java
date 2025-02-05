package io.thoughtware.gittok.commit.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.thoughtware.gittok.repository.model.Repository;
import io.thoughtware.postin.annotation.ApiModel;
import io.thoughtware.postin.annotation.ApiProperty;
import io.thoughtware.toolkit.beans.annotation.Mapper;
import io.thoughtware.toolkit.beans.annotation.Mapping;
import io.thoughtware.toolkit.beans.annotation.Mappings;
import io.thoughtware.toolkit.join.annotation.Join;
import io.thoughtware.toolkit.join.annotation.JoinQuery;
import io.thoughtware.user.user.model.User;

import java.sql.Timestamp;

@ApiModel
@Join
@Mapper
public class MergeRequest {

    @ApiProperty(name="id",desc="合并请求id")
    private String id;

    @ApiProperty(name="title",desc="合并请求标题")
    private String title;

    @ApiProperty(name="repository",desc="仓库")
    @Mappings({
            @Mapping(source = "repository.rpyId",target = "rpyId")
    })
    @JoinQuery(key = "rpyId")
    private Repository repository;

    @ApiProperty(name="mergeOrigin",desc="合并源")
    private String mergeOrigin;

    @ApiProperty(name="mergeTarget",desc="目标源")
    private String mergeTarget;

    @ApiProperty(name="mergeState",desc="合并状态 1.已开启、2.已合并、3.已关闭 ")
    private Integer mergeState=1;

    @ApiProperty(name="isClash",desc="是否有冲突 1、没有 2、有 ")
    private Integer isClash;


    @ApiProperty(name="value",desc="内容")
    private String value;

    @ApiProperty(name="createUser",desc="用户")
    @Mappings({
            @Mapping(source = "user.id",target = "createUser")
    })
    @JoinQuery(key = "id")
    private User user;

    @ApiProperty(name="createTime",desc="创建时间")
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "GMT+8")
    private java.sql.Timestamp createTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Repository getRepository() {
        return repository;
    }

    public void setRepository(Repository repository) {
        this.repository = repository;
    }

    public String getMergeOrigin() {
        return mergeOrigin;
    }

    public void setMergeOrigin(String mergeOrigin) {
        this.mergeOrigin = mergeOrigin;
    }

    public String getMergeTarget() {
        return mergeTarget;
    }

    public void setMergeTarget(String mergeTarget) {
        this.mergeTarget = mergeTarget;
    }

    public Integer getMergeState() {
        return mergeState;
    }

    public void setMergeState(Integer mergeState) {
        this.mergeState = mergeState;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }

    public Integer getIsClash() {
        return isClash;
    }

    public void setIsClash(Integer isClash) {
        this.isClash = isClash;
    }
}
