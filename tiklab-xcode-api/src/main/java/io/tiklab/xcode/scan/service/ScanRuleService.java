package io.tiklab.xcode.scan.service;


import io.tiklab.core.page.Pagination;
import io.tiklab.join.annotation.FindAll;
import io.tiklab.join.annotation.FindList;
import io.tiklab.join.annotation.FindOne;
import io.tiklab.join.annotation.JoinProvider;
import io.tiklab.xcode.scan.model.ScanRule;
import io.tiklab.xcode.scan.model.ScanRuleQuery;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
* ScanRuleService-扫描规则
*/
@JoinProvider(model = ScanRule.class)
public interface ScanRuleService {

    /**
    * 创建
    * @param scanRule
    * @return
    */
    String createScanRule(@NotNull @Valid ScanRule scanRule);

    /**
    * 更新
    * @param scanRule
    */
    void updateScanRule(@NotNull @Valid ScanRule scanRule);

    /**
    * 删除
    * @param id
    */
    void deleteScanRule(@NotNull String id);

    /**
     * 条件删除扫描结果
     * @param  key  删除条件字段
     * @param value
     */
    void deleteScanRuleByCondition(@NotNull String key,@NotNull String value);

    @FindOne
    ScanRule findOne(@NotNull String id);

    @FindList
    List<ScanRule> findList(List<String> idList);

    /**
    * 查找
    * @param id
    * @return
    */

    ScanRule findScanRule(@NotNull String id);

    /**
    * 查找所有
    * @return
    */
    @FindAll
    List<ScanRule> findAllScanRule();

    /**
    * 查询列表
    * @param scanRuleQuery
    * @return
    */
    List<ScanRule> findScanRuleList(ScanRuleQuery scanRuleQuery);

    /**
    * 按分页查询
    * @param scanRuleQuery
    * @return
    */
    Pagination<ScanRule> findScanRulePage(ScanRuleQuery scanRuleQuery);

}