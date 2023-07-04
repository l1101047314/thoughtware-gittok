package io.tiklab.xcode.config;

import com.alibaba.fastjson.JSONObject;
import io.tiklab.core.context.AppHomeContext;
import io.tiklab.core.exception.ApplicationException;
import io.tiklab.xcode.util.RepositoryUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.*;

@Configuration
public class InitializeBackups {



    @Bean
    public void InitializeBackupsUrl(){
        String appHome = AppHomeContext.getAppHome();
        String backupsPath=appHome+"/file/backups";
        File file = new File(backupsPath);
        try {
            FileInputStream inputStream = new FileInputStream(file);
            StringBuilder result = new StringBuilder();
            BufferedReader bfr = new BufferedReader(new InputStreamReader(inputStream));
            String lineTxt = null;
            while ((lineTxt = bfr.readLine()) != null) {
                String a=lineTxt;
                result.append(lineTxt).append(System.lineSeparator());
            }
            String fileData = result.toString();
            String replace = fileData.replace("\\", "\\\\");
            JSONObject jsonObject = JSONObject.parseObject(replace);
            String backUpsUrl = jsonObject.get("backups-url").toString();

            String defaultPath = RepositoryUtil.defaultPath();
            String substring = defaultPath.substring(0, defaultPath.lastIndexOf("/"));

            fileData =fileData.replace(backUpsUrl, substring+"/backups/backups");

            FileWriter fileWriter = new FileWriter(file);
            fileWriter.write(fileData);
            fileWriter.close();
            inputStream.close();
        }catch (IOException e){
            throw new ApplicationException(e.getMessage());
        }
    }
}
