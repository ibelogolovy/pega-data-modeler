package com.pegadatatools.engine.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;

import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.nio.charset.Charset;


@Configuration
public class ApplicationConfig {

    @Value("${pega.setting.filepath}")
    private String pegaSettingFilePath;

    @Bean
    public RestTemplate restTemplate() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(15000);
        factory.setReadTimeout(15000);
        RestTemplate template = new RestTemplate(factory);
        template.getMessageConverters()
                .add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
        return template;
    }

    @Bean
    public File pegaSettingFile() {
        return new File(pegaSettingFilePath);
    }

}
