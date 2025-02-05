package io.thoughtware.gittok.setting.service;

import io.thoughtware.gittok.common.RepositoryUtil;
import io.thoughtware.gittok.setting.model.Auth;
import io.thoughtware.toolkit.beans.BeanMapper;
import io.thoughtware.toolkit.join.JoinTemplate;
import io.thoughtware.rpc.annotation.Exporter;
import io.thoughtware.gittok.setting.entity.AuthEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
@Exporter
public class AuthServerImpl implements AuthServer {

    @Autowired
    private JoinTemplate joinTemplate;

    @Autowired
    private io.thoughtware.gittok.setting.dao.AuthDao AuthDao;


    /**
     * 创建认证
     * @param auth 信息
     * @return 认证id
     */
    @Override
    public String createAuth(Auth auth) {
        auth.setCreateTime(RepositoryUtil.date(1,new Date()));
        AuthEntity groupEntity = BeanMapper.map(auth, AuthEntity.class);
        return AuthDao.createAuth(groupEntity);
    }

    /**
     * 删除认证
     * @param AuthId 认证id
     */
    @Override
    public void deleteAuth(String AuthId) {
        AuthDao.deleteAuth(AuthId);
    }

    /**
     * 更新认证
     * @param auth 认证信息
     */
    @Override
    public void updateAuth(Auth auth) {
        AuthEntity groupEntity = BeanMapper.map(auth, AuthEntity.class);
        AuthDao.updateAuth(groupEntity);
    }

    /**
     * 查询单个认证
     * @param AuthId 认证id
     * @return 认证信息
     */
    @Override
    public Auth findOneAuth(String AuthId) {
        AuthEntity groupEntity = AuthDao.findOneAuth(AuthId);
        Auth auth = BeanMapper.map(groupEntity, Auth.class);
        // joinTemplate.joinQuery(auth);
        return auth;
    }

    /**
     * 查询所有认证
     * @return 认证信息列表
     */
    @Override
    public List<Auth> findAllAuth() {
        List<AuthEntity> groupEntityList = AuthDao.findAllAuth();
        List<Auth> list = BeanMapper.mapList(groupEntityList, Auth.class);
        // joinTemplate.joinQuery(list);
        if (list == null || list.isEmpty()){
            return Collections.emptyList();
        }
        return list;
    }


    @Override
    public List<Auth> findAllAuthList(List<String> idList) {
        List<AuthEntity> groupEntities = AuthDao.findAllAuthList(idList);
        List<Auth> list = BeanMapper.mapList(groupEntities, Auth.class);
        // joinTemplate.joinQuery(list);
        return list;
    }

    /**
     * 查询用户认证
     * @return 认证集合
     */
    @Override
    public List<Auth> findUserAuth() {
        List<Auth> allAuth = findAllAuth();
        if (allAuth.isEmpty()){
            return Collections.emptyList();
        }
      /*  List<Auth> list = new ArrayList<>();
        for (Auth auth : allAuth) {
            User user = auth.getUser();
            if (!user.getId().equals(LoginContext.getLoginId())){
                continue;
            }
            list.add(auth);
        }*/

        return allAuth;
    }
    
}




















