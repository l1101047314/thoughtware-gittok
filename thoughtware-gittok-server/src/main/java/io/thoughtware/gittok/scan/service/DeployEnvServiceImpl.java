package io.thoughtware.gittok.scan.service;

import io.thoughtware.gittok.scan.dao.DeployEnvDao;
import io.thoughtware.gittok.scan.entity.DeployEnvEntity;
import io.thoughtware.gittok.scan.model.DeployEnv;
import io.thoughtware.gittok.scan.model.DeployEnvQuery;
import io.thoughtware.toolkit.beans.BeanMapper;
import io.thoughtware.core.page.Pagination;
import io.thoughtware.core.page.PaginationBuilder;
import io.thoughtware.dal.jpa.criterial.condition.DeleteCondition;
import io.thoughtware.dal.jpa.criterial.conditionbuilder.DeleteBuilders;
import io.thoughtware.toolkit.join.JoinTemplate;
import io.thoughtware.rpc.annotation.Exporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.List;

/**
* DeployEnvServiceImpl-部署环境的记录接口实现
*/
@Service
@Exporter
public class DeployEnvServiceImpl implements DeployEnvService {

    @Autowired
    DeployEnvDao deployEnvDao;


    @Autowired
    JoinTemplate joinTemplate;


    @Override
    public String createDeployEnv(@NotNull @Valid DeployEnv deployEnv) {

        DeployEnvEntity deployEnvEntity = BeanMapper.map(deployEnv, DeployEnvEntity.class);
        deployEnvEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
        String deployEnvId= deployEnvDao.createDeployEnv(deployEnvEntity);

        return deployEnvId;
    }

    @Override
    public void updateDeployEnv(@NotNull @Valid DeployEnv deployEnv) {
        DeployEnvEntity deployEnvEntity = BeanMapper.map(deployEnv, DeployEnvEntity.class);

        deployEnvDao.updateDeployEnv(deployEnvEntity);
    }

    @Override
    public void deleteDeployEnv(@NotNull String id) {
        deployEnvDao.deleteDeployEnv(id);
    }

    @Override
    public void deleteDeployEnvByRecord(String repositoryId) {
        DeleteCondition deleteCondition = DeleteBuilders.createDelete(DeployEnvEntity.class)
                .eq("repositoryId", repositoryId)
                .get();
        deployEnvDao.deleteDeployEnv(deleteCondition);
    }

    @Override
    public DeployEnv findOne(String id) {
        DeployEnvEntity deployEnvEntity = deployEnvDao.findDeployEnv(id);

        DeployEnv deployEnv = BeanMapper.map(deployEnvEntity, DeployEnv.class);
        return deployEnv;
    }

    @Override
    public List<DeployEnv> findList(List<String> idList) {
        List<DeployEnvEntity> deployEnvEntityList =  deployEnvDao.findDeployEnvList(idList);

        List<DeployEnv> deployEnvList =  BeanMapper.mapList(deployEnvEntityList, DeployEnv.class);
        return deployEnvList;
    }

    @Override
    public DeployEnv findDeployEnv(@NotNull String id) {
        DeployEnv deployEnv = findOne(id);

        joinTemplate.joinQuery(deployEnv);

        return deployEnv;
    }

    @Override
    public List<DeployEnv> findAllDeployEnv() {
        List<DeployEnvEntity> deployEnvEntityList =  deployEnvDao.findAllDeployEnv();

        List<DeployEnv> deployEnvList =  BeanMapper.mapList(deployEnvEntityList, DeployEnv.class);

        joinTemplate.joinQuery(deployEnvList);

        return deployEnvList;
    }

    @Override
    public List<DeployEnv> findDeployEnvList(DeployEnvQuery DeployEnvQuery) {
        List<DeployEnvEntity> deployEnvEntityList = deployEnvDao.findDeployEnvList(DeployEnvQuery);

        List<DeployEnv> deployEnvList = BeanMapper.mapList(deployEnvEntityList, DeployEnv.class);



        joinTemplate.joinQuery(deployEnvList);

        return deployEnvList;
    }

    @Override
    public Pagination<DeployEnv> findDeployEnvPage(DeployEnvQuery DeployEnvQuery) {
        Pagination<DeployEnvEntity>  pagination = deployEnvDao.findDeployEnvPage(DeployEnvQuery);

        List<DeployEnv> deployEnvList = BeanMapper.mapList(pagination.getDataList(), DeployEnv.class);
        joinTemplate.joinQuery(pagination.getDataList());

        return PaginationBuilder.build(pagination,deployEnvList);
    }





}