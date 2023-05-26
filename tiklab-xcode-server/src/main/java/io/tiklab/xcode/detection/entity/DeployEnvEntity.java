package io.tiklab.xcode.detection.entity;

import io.tiklab.dal.jpa.annotation.*;

import java.sql.Timestamp;

@Entity
@Table(name="rpy_deploy_env")
public class DeployEnvEntity {


    @Id
    @GeneratorValue(length=12)
    @Column(name = "id")
    private String id;

    @Column(name = "env_type" ,notNull = true)
    private String envType;

    @Column(name = "env_name",notNull = true)
    private String envName;

    @Column(name = "env_address",notNull = true)
    private String envAddress;

    @Column(name = "create_time")
    private Timestamp createTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEnvType() {
        return envType;
    }

    public void setEnvType(String envType) {
        this.envType = envType;
    }

    public String getEnvName() {
        return envName;
    }

    public void setEnvName(String envName) {
        this.envName = envName;
    }

    public String getEnvAddress() {
        return envAddress;
    }

    public void setEnvAddress(String envAddress) {
        this.envAddress = envAddress;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }
}




















































