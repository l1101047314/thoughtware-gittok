package net.tiklab.xcode.setting.service;

import net.tiklab.join.annotation.FindAll;
import net.tiklab.join.annotation.FindList;
import net.tiklab.join.annotation.FindOne;
import net.tiklab.join.annotation.JoinProvider;
import net.tiklab.xcode.setting.model.Auth;


import java.util.List;

@JoinProvider(model = Auth.class)
public interface AuthServer {


    /**
     * 创建认证
     * @param auth 信息
     * @return 认证id
     */
    String createAuth(Auth auth);

    /**
     * 删除认证
     * @param AuthId 认证id
     */
    void deleteAuth(String AuthId);

    /**
     * 更新认证
     * @param auth 认证信息
     */
    void updateAuth(Auth auth);

    /**
     * 查询单个认证
     * @param AuthId 认证id
     * @return 认证信息
     */
    @FindOne
    Auth findOneAuth(String AuthId);

    /**
     * 查询所有认证
     * @return 认证信息列表
     */
    @FindAll
    List<Auth> findAllAuth();


    @FindList
    List<Auth> findAllAuthList(List<String> idList);

    /**
     * 查询用户认证
     * @return 认证集合
     */
    List<Auth> findUserAuth();
    
    
    
    
    
    
    
    
}








































