package com.pegadatatools.engine.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pegadatatools.engine.model.PegaSetting;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class PegaSettingServiceImpl implements PegaSettingService {

    Logger logger = LoggerFactory.getLogger(PegaSettingService.class);

    private Set<PegaSetting> settings = new HashSet<>();

    @Autowired
    private File pegaSettingFilePath;

    private ObjectMapper mapper = new ObjectMapper();

    private void refreshSettings() throws IOException {
        logger.debug("[refreshSettings] Fetch setting from file system");
        boolean empty = !pegaSettingFilePath.exists() || pegaSettingFilePath.length() == 0;
        if(!empty) {
            settings = mapper.readValue(pegaSettingFilePath, new TypeReference<Set<PegaSetting>>(){});
        }
    }

    private synchronized void writeSettings() throws IOException {
        logger.debug("[writeSettings] Rewrite settings");
        mapper.writeValue(pegaSettingFilePath, settings);
    }

    @Override
    public void updateSetting(PegaSetting requestBody, HttpServletResponse response) {
        logger.debug("[updatePegaSettings] Update setting = " + requestBody.getConfigName());
        try{
            refreshSettings();
            if(settings.contains(requestBody)) {
                settings.remove(requestBody);
            }
            settings.add(requestBody);
            response.setStatus(HttpServletResponse.SC_OK);
            response.setContentType("application/json; charset=UTF-8");
            writeSettings();
        }
        catch (IOException ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            logger.error(ex.getStackTrace().toString());
        }

    }

    @Override
    public List<PegaSetting> getSettings() {
        List<PegaSetting> list = null;
        try{
            refreshSettings();
            list = new ArrayList<PegaSetting>(settings);
            Collections.sort(list);
        }
        catch (IOException ex) {
            logger.error(ex.getStackTrace().toString());
        }
        return list;
    }

    @Override
    public void deleteSetting(String configName, HttpServletResponse response) {
        Iterator<PegaSetting> iterator = settings.iterator();
        try {
            refreshSettings();
            boolean removeResult = settings.removeIf(s -> {
                if (!configName.equals(s.getConfigName())) {
                    return false;
                } else {
                    logger.debug(String.format("[deletePegaSettings] Remove config = %s", configName));
                    return true;
                }
            });
            if (removeResult) writeSettings();
        } catch (IOException ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            logger.error(ex.getStackTrace().toString());
        }
    }
}
