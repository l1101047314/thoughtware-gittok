package io.tiklab.xcode.scan.service;

import io.tiklab.core.exception.ApplicationException;
import io.tiklab.xcode.scan.model.CodeScan;
import io.tiklab.xcode.scan.model.CodeScanInstance;

public interface CodeScanService {

    /**
     * 代码扫描
     * @param scanPlayId
     * @return 执行状态 true:成功 false:失败
     * @throws ApplicationException 运行失败
     */
    String codeScanExec(String  scanPlayId);


    /**
     * 查询代码扫描结果
     * @param repositoryId 代码仓库id
     * @return 执行状态 true:成功 false:失败
     * @throws ApplicationException 运行失败
     */

    CodeScan findScanResult(String repositoryId);

    /**
     * 查询代码扫描状态
     * @param scanPlayId 扫描计划
     * @param scanWay 扫描方式  rule、sonar
     * @return 执行状态 true:成功 false:失败
     * @throws ApplicationException 运行失败
     */
    String findScanState(String scanPlayId,String scanWay);

    /**
     * 创建扫描方案
     * @param codeScan
     * @throws ApplicationException 运行失败
     */
    String createCodeScan(CodeScan codeScan);

    /**
     * 查询代码扫描方案
     * @param repositoryId 代码仓库id
     * @return 执行状态 true:成功 false:失败
     * @throws ApplicationException 运行失败
     */
    CodeScan findCodeScanByRpyId(String repositoryId);


}
