package io.thoughtware.gittork.scan.service;


import io.thoughtware.gittork.scan.model.ScanIssues;
import io.thoughtware.gittork.scan.model.ScanIssuesQuery;
import io.thoughtware.core.page.Pagination;
import io.thoughtware.join.annotation.FindAll;
import io.thoughtware.join.annotation.FindList;
import io.thoughtware.join.annotation.FindOne;
import io.thoughtware.join.annotation.JoinProvider;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
* ScanIssuesService-扫描问题
*/
@JoinProvider(model = ScanIssues.class)
public interface ScanIssuesService {

    /**
    * 创建
    * @param scanIssues
    * @return
    */
    String createScanIssues(@NotNull @Valid ScanIssues scanIssues);

    /**
    * 更新
    * @param scanIssues
    */
    void updateScanIssues(@NotNull @Valid ScanIssues scanIssues);

    /**
    * 删除
    * @param id
    */
    void deleteScanIssues(@NotNull String id);

    /**
     * 条件删除扫描结果
     * @param  key  删除条件字段
     * @param value
     */
    void deleteScanIssuesByCondition(@NotNull String key,@NotNull String value);

    @FindOne
    ScanIssues findOne(@NotNull String id);

    @FindList
    List<ScanIssues> findList(List<String> idList);

    /**
    * 查找
    * @param id
    * @return
    */

    ScanIssues findScanIssues(@NotNull String id);

    /**
    * 查找所有
    * @return
    */
    @FindAll
    List<ScanIssues> findAllScanIssues();

    /**
    * 查询列表
    * @param scanIssuesQuery
    * @return
    */
    List<ScanIssues> findScanIssuesList(ScanIssuesQuery scanIssuesQuery);

    /**
    * 按分页查询
    * @param scanIssuesQuery
    * @return
    */
    Pagination<ScanIssues> findScanIssuesPage(ScanIssuesQuery scanIssuesQuery);

}