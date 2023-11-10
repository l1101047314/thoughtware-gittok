package io.tiklab.xcode.scan.service;


import io.tiklab.core.page.Pagination;
import io.tiklab.join.annotation.FindAll;
import io.tiklab.join.annotation.FindList;
import io.tiklab.join.annotation.FindOne;
import io.tiklab.join.annotation.JoinProvider;
import io.tiklab.xcode.scan.model.ScanRecord;
import io.tiklab.xcode.scan.model.ScanRecordQuery;

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