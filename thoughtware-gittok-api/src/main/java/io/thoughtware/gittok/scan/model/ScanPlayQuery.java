package io.thoughtware.gittok.scan.model;

import io.thoughtware.core.order.Order;
import io.thoughtware.core.order.OrderBuilders;
import io.thoughtware.core.page.Page;
import io.thoughtware.postin.annotation.ApiModel;
import io.thoughtware.postin.annotation.ApiProperty;

import java.util.List;

@ApiModel
public class ScanPlayQuery {

    @ApiProperty(name ="orderParams",desc = "排序参数")
    private List<Order> orderParams = OrderBuilders.instance().desc("createTime").get();

    @ApiProperty(name ="pageParam",desc = "分页参数")
    private Page pageParam = new Page();

    private String repositoryId;

    @ApiProperty(name ="scanSchemeId",desc = "扫描方案")
    private String scanSchemeId;

    public List<Order> getOrderParams() {
        return orderParams;
    }

    public void setOrderParams(List<Order> orderParams) {
        this.orderParams = orderParams;
    }

    public Page getPageParam() {
        return pageParam;
    }

    public void setPageParam(Page pageParam) {
        this.pageParam = pageParam;
    }

    public String getRepositoryId() {
        return repositoryId;
    }

    public ScanPlayQuery setRepositoryId(String repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }

    public String getScanSchemeId() {
        return scanSchemeId;
    }

    public void setScanSchemeId(String scanSchemeId) {
        this.scanSchemeId = scanSchemeId;
    }
}
