package io.tiklab.xcode.setting.model;

import io.tiklab.postin.annotation.ApiModel;
import io.tiklab.postin.annotation.ApiProperty;

@ApiModel
public class Backups {

    @ApiProperty(name="backupsAddress",desc="备份地址")
    private String backupsAddress;

    @ApiProperty(name="taskState",desc="定时任务状态")
    private String taskState;

    @ApiProperty(name="newBackupsTime",desc="最近备份时间")
    private String newBackupsTime;

    public String getBackupsAddress() {
        return backupsAddress;
    }

    public void setBackupsAddress(String backupsAddress) {
        this.backupsAddress = backupsAddress;
    }

    public String getTaskState() {
        return taskState;
    }

    public void setTaskState(String taskState) {
        this.taskState = taskState;
    }

    public String getNewBackupsTime() {
        return newBackupsTime;
    }

    public void setNewBackupsTime(String newBackupsTime) {
        this.newBackupsTime = newBackupsTime;
    }
}
