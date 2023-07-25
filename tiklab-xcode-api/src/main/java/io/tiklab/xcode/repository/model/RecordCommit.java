package io.tiklab.xcode.repository.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.tiklab.beans.annotation.Mapper;
import io.tiklab.beans.annotation.Mapping;
import io.tiklab.beans.annotation.Mappings;
import io.tiklab.join.annotation.Join;
import io.tiklab.join.annotation.JoinQuery;
import io.tiklab.postin.annotation.ApiModel;
import io.tiklab.postin.annotation.ApiProperty;

import java.sql.Timestamp;

@ApiModel
@Join
@Mapper
public class RecordCommit {

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

    @ApiProperty(name="commitTime",desc="提交信息")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Timestamp commitTime;


    /*----------其他字段--------*/
    @ApiProperty(name="commitTimeBad",desc="提交信息到现在差")
    private String commitTimeBad;

    @ApiProperty(name="groupName",desc="组名")
    private String groupName;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Timestamp getCommitTime() {
        return commitTime;
    }

    public void setCommitTime(Timestamp commitTime) {
        this.commitTime = commitTime;
    }

    public String getCommitTimeBad() {
        return commitTimeBad;
    }

    public void setCommitTimeBad(String commitTimeBad) {
        this.commitTimeBad = commitTimeBad;
    }

    public Repository getRepository() {
        return repository;
    }

    public void setRepository(Repository repository) {
        this.repository = repository;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
}







































