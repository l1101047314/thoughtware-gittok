package io.tiklab.xcode.detection.service;

import io.tiklab.beans.BeanMapper;
import io.tiklab.core.page.Pagination;
import io.tiklab.core.page.PaginationBuilder;
import io.tiklab.dal.jpa.criterial.condition.DeleteCondition;
import io.tiklab.dal.jpa.criterial.conditionbuilder.DeleteBuilders;
import io.tiklab.join.JoinTemplate;
import io.tiklab.rpc.annotation.Exporter;
import io.tiklab.xcode.detection.dao.CodeScanInstanceDao;
import io.tiklab.xcode.detection.entity.CodeScanInstanceEntity;
import io.tiklab.xcode.detection.model.CodeScanInstance;
import io.tiklab.xcode.detection.model.CodeScanInstanceQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.List;

/**
* CodeScanInstanceServiceImpl-打开仓库的记录接口实现
*/
@Service
@Exporter
public class CodeScanInstanceImpl implements CodeScanInstanceService {

    @Autowired
    CodeScanInstanceDao codeScanInstanceDao;


    @Autowired
    JoinTemplate joinTemplate;


    @Override
    public String createCodeScanInstance(@NotNull @Valid CodeScanInstance codeScanInstance) {

        CodeScanInstanceEntity codeScanInstanceEntity = BeanMapper.map(codeScanInstance, CodeScanInstanceEntity.class);
        codeScanInstanceEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
        String codeScanInstanceId= codeScanInstanceDao.createCodeScanInstance(codeScanInstanceEntity);

        return codeScanInstanceId;
    }

    @Override
    public void updateCodeScanInstance(@NotNull @Valid CodeScanInstance codeScanInstance) {
        CodeScanInstanceEntity codeScanInstanceEntity = BeanMapper.map(codeScanInstance, CodeScanInstanceEntity.class);

        codeScanInstanceDao.updateCodeScanInstance(codeScanInstanceEntity);
    }

    @Override
    public void deleteCodeScanInstance(@NotNull String id) {
        codeScanInstanceDao.deleteCodeScanInstance(id);
    }

    @Override
    public void deleteCodeScanInstanceByRecord(String repositoryId) {
        DeleteCondition deleteCondition = DeleteBuilders.createDelete(CodeScanInstanceEntity.class)
                .eq("repositoryId", repositoryId)
                .get();
        codeScanInstanceDao.deleteCodeScanInstance(deleteCondition);
    }

    @Override
    public CodeScanInstance findOne(String id) {
        CodeScanInstanceEntity codeScanInstanceEntity = codeScanInstanceDao.findCodeScanInstance(id);

        CodeScanInstance codeScanInstance = BeanMapper.map(codeScanInstanceEntity, CodeScanInstance.class);
        return codeScanInstance;
    }

    @Override
    public List<CodeScanInstance> findList(List<String> idList) {
        List<CodeScanInstanceEntity> codeScanInstanceEntityList =  codeScanInstanceDao.findCodeScanInstanceList(idList);

        List<CodeScanInstance> codeScanInstanceList =  BeanMapper.mapList(codeScanInstanceEntityList, CodeScanInstance.class);
        return codeScanInstanceList;
    }

    @Override
    public CodeScanInstance findCodeScanInstance(@NotNull String id) {
        CodeScanInstance codeScanInstance = findOne(id);

        joinTemplate.joinQuery(codeScanInstance);

        return codeScanInstance;
    }

    @Override
    public List<CodeScanInstance> findAllCodeScanInstance() {
        List<CodeScanInstanceEntity> codeScanInstanceEntityList =  codeScanInstanceDao.findAllCodeScanInstance();

        List<CodeScanInstance> codeScanInstanceList =  BeanMapper.mapList(codeScanInstanceEntityList, CodeScanInstance.class);

        joinTemplate.joinQuery(codeScanInstanceList);

        return codeScanInstanceList;
    }

    @Override
    public List<CodeScanInstance> findCodeScanInstanceList(CodeScanInstanceQuery CodeScanInstanceQuery) {
        List<CodeScanInstanceEntity> codeScanInstanceEntityList = codeScanInstanceDao.findCodeScanInstanceList(CodeScanInstanceQuery);

        List<CodeScanInstance> codeScanInstanceList = BeanMapper.mapList(codeScanInstanceEntityList, CodeScanInstance.class);



        joinTemplate.joinQuery(codeScanInstanceList);

        return codeScanInstanceList;
    }

    @Override
    public Pagination<CodeScanInstance> findCodeScanInstancePage(CodeScanInstanceQuery CodeScanInstanceQuery) {
        Pagination<CodeScanInstanceEntity>  pagination = codeScanInstanceDao.findCodeScanInstancePage(CodeScanInstanceQuery);

        List<CodeScanInstance> codeScanInstanceList = BeanMapper.mapList(pagination.getDataList(), CodeScanInstance.class);
        joinTemplate.joinQuery(pagination.getDataList());

        return PaginationBuilder.build(pagination,codeScanInstanceList);
    }





}