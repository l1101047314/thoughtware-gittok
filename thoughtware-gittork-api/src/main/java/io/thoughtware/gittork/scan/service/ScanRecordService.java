package io.thoughtware.gittork.scan.service;


import io.thoughtware.gittork.scan.model.ScanRecord;
import io.thoughtware.gittork.scan.model.ScanRecordQuery;
import io.thoughtware.core.page.Pagination;
import io.thoughtware.join.annotation.FindAll;
import io.thoughtware.join.annotation.FindList;
import io.thoughtware.join.annotation.FindOne;
import io.thoughtware.join.annotation.JoinProvider;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
* ScanRecordService-扫描记录
*/
@JoinProvider(model = ScanRecord.class)
public interface ScanRecordService {

    /**
    * 创建
    * @param scanRecord
    * @return
    */
    String createScanRecord(@NotNull @Valid ScanRecord scanRecord);

    /**
    * 更新
    * @param scanRecord
    */
    void updateScanRecord(@NotNull @Valid ScanRecord scanRecord);

    /**
    * 删除
    * @param id
    */
    void deleteScanRecord(@NotNull String id);

    /**
     * 条件删除扫描结果
     * @param  key  删除条件字段
     * @param value
     */
    void deleteScanRecordByCondition(@NotNull String key,@NotNull String value);

    @FindOne
    ScanRecord findOne(@NotNull String id);

    @FindList
    List<ScanRecord> findList(List<String> idList);

    /**
    * 查找
    * @param id
    * @return
    */

    ScanRecord findScanRecord(@NotNull String id);

    /**
    * 查找所有
    * @return
    */
    @FindAll
    List<ScanRecord> findAllScanRecord();

    /**
    * 查询列表
    * @param scanRecordQuery
    * @return
    */
    List<ScanRecord> findScanRecordList(ScanRecordQuery scanRecordQuery);

    /**
    * 按分页查询
    * @param scanRecordQuery
    * @return
    */
    Pagination<ScanRecord> findScanRecordPage(ScanRecordQuery scanRecordQuery);

}