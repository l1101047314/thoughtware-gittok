package io.tiklab.xcode.repository.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.tiklab.beans.annotation.Mapper;
import io.tiklab.beans.annotation.Mapping;
import io.tiklab.beans.annotation.Mappings;
import io.tiklab.core.BaseModel;
import io.tiklab.join.annotation.Join;
import io.tiklab.join.annotation.JoinQuery;
import io.tiklab.postin.annotation.ApiModel;
import io.tiklab.postin.annotation.ApiProperty;

import java.sql.Timestamp;

@ApiModel
@Join
@Mapper
public class RecordOpen  extends BaseModel {

    @ApiProperty(name="id",desc="id")
    private String id;


    @ApiProperty(name="repository",desc="仓库")
    @Mappings({
            @Mapping(source = "repository.rpyId",target = "repositoryId")
    })
    @JoinQuery(key = "rpyId")
    private Repository repository;

    @ApiProperty(name="userId",desc="用户id")
    private String userId;

    @ApiProperty(name="newOpenTime",desc="最新打开的时间")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Timestamp newOpenTime;

    @ApiProperty(name="createTime",desc="创建时间")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Timestamp createTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Repository getRepository() {
        return repository;
    }

    public void setRepository(Repository repository) {
        this.repository = repository;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Timestamp getNewOpenTime() {
        return newOpenTime;
    }

    public void setNewOpenTime(Timestamp newOpenTime) {
        this.newOpenTime = newOpenTime;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }
}







































