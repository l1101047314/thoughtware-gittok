package io.thoughtware.gittok.tag.model;

import io.thoughtware.toolkit.beans.annotation.Mapper;
import io.thoughtware.toolkit.join.annotation.Join;
import io.thoughtware.postin.annotation.ApiModel;
import io.thoughtware.postin.annotation.ApiProperty;

@ApiModel
@Join
@Mapper
public class Tag {


    @ApiProperty(name="rpyId",desc="仓库id")
    private String rpyId;

    @ApiProperty(name="branch",desc="分支")
    private String branch;

    @ApiProperty(name="commitId",desc="提交的id")
    private String commitId;

    @ApiProperty(name="commitDesc",desc="提交的描述")
    private String commitDesc;

    @ApiProperty(name="tagName",desc="标签名字")
    private String tagName;


    @ApiProperty(name="desc",desc="描述")
    private String desc;

    @ApiProperty(name="timeDiffer",desc="时间差")
    private String timeDiffer;


    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getCommitId() {
        return commitId;
    }

    public void setCommitId(String commitId) {
        this.commitId = commitId;
    }

    public String getRpyId() {
        return rpyId;
    }

    public void setRpyId(String rpyId) {
        this.rpyId = rpyId;
    }

    public String getTimeDiffer() {
        return timeDiffer;
    }

    public void setTimeDiffer(String timeDiffer) {
        this.timeDiffer = timeDiffer;
    }

    public String getCommitDesc() {
        return commitDesc;
    }

    public void setCommitDesc(String commitDesc) {
        this.commitDesc = commitDesc;
    }

}
