package net.tiklab.xcode.repository.dao;

import net.tiklab.dal.jpa.JpaTemplate;
import net.tiklab.xcode.repository.entity.RepositoryGroupEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RepositoryGroupDao {

    @Autowired
    JpaTemplate jpaTemplate;

    /**
     * 创建仓库组
     * @param repositoryGroupEntity 仓库组信息
     * @return 仓库组id
     */
    public String createCodeGroup(RepositoryGroupEntity repositoryGroupEntity){
        return jpaTemplate.save(repositoryGroupEntity, String.class);
    }

    /**
     * 删除仓库组
     * @param codeGroupId 仓库组id
     */
    public void deleteCodeGroup(String codeGroupId){
        jpaTemplate.delete(RepositoryGroupEntity.class,codeGroupId);
    }


    /**
     * 更新仓库组
     * @param repositoryGroupEntity 仓库组信息
     */
    public void updateCodeGroup(RepositoryGroupEntity repositoryGroupEntity){
        jpaTemplate.update(repositoryGroupEntity);
    }

    /**
     * 查询单个仓库组信息
     * @param codeGroupId 仓库组id
     * @return 仓库组信息
     */
    public RepositoryGroupEntity findOneCodeGroup(String codeGroupId){
        return jpaTemplate.findOne(RepositoryGroupEntity.class,codeGroupId);
    }

    /**
     * 查询所有仓库组
     * @return 仓库组列表
     */
    public List<RepositoryGroupEntity> findAllCodeGroup(){
        return jpaTemplate.findAll(RepositoryGroupEntity.class);
    }


    public List<RepositoryGroupEntity> findAllCodeGroupList(List<String> idList){
        return jpaTemplate.findList(RepositoryGroupEntity.class,idList);
    }
}
