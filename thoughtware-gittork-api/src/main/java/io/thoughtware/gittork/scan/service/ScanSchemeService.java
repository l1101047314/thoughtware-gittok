package io.thoughtware.gittork.scan.service;


import io.thoughtware.gittork.scan.model.ScanScheme;
import io.thoughtware.gittork.scan.model.ScanSchemeQuery;
import io.thoughtware.core.page.Pagination;
import io.thoughtware.join.annotation.FindAll;
import io.thoughtware.join.annotation.FindList;
import io.thoughtware.join.annotation.FindOne;
import io.thoughtware.join.annotation.JoinProvider;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
* ScanPlaySchemeService-扫描方案
*/
@JoinProvider(model = ScanScheme.class)
public interface ScanSchemeService {

    /**
    * 创建
    * @param scanPlayScheme
    * @return
    */
    String createScanScheme(@NotNull @Valid ScanScheme scanPlayScheme);

    /**
    * 更新
    * @param scanPlayScheme
    */
    void updateScanScheme(@NotNull @Valid ScanScheme scanPlayScheme);

    /**
    * 删除
    * @param id
    */
    void deleteScanScheme(@NotNull String id);

    /**
     * 条件删除扫描结果
     * @param  key  删除条件字段
     * @param value
     */
    void deleteScanSchemeByCondition(@NotNull String key,@NotNull String value);

    @FindOne
    ScanScheme findOne(@NotNull String id);

    @FindList
    List<ScanScheme> findList(List<String> idList);

    /**
    * 查找
    * @param id
    * @return
    */

    ScanScheme findScanScheme(@NotNull String id);

    /**
    * 查找所有
    * @return
    */
    @FindAll
    List<ScanScheme> findAllScanScheme();

    /**
    * 查询列表
    * @param scanPlaySchemeQuery
    * @return
    */
    List<ScanScheme> findScanSchemeList(ScanSchemeQuery scanPlaySchemeQuery);

    /**
    * 按分页查询
    * @param scanPlaySchemeQuery
    * @return
    */
    Pagination<ScanScheme> findScanSchemePage(ScanSchemeQuery scanPlaySchemeQuery);

}