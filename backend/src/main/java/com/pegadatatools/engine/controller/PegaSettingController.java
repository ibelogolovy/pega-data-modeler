package com.pegadatatools.engine.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.*;

import com.pegadatatools.engine.model.PegaSetting;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/pegasetting")
public class PegaSettingController {

    Logger logger = LoggerFactory.getLogger(PegaAPIController.class);

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

    private void writeSettings() throws IOException {
        logger.debug("[writeSettings] Rewrite settings");
        mapper.writeValue(pegaSettingFilePath, settings);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void updatePegaSettings(HttpServletResponse response, @RequestBody PegaSetting requestBody, HttpSession session) throws IOException {

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
        catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            ex.printStackTrace(response.getWriter());
        }

    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<PegaSetting> getPegaSettings() throws IOException {

        refreshSettings();
        List<PegaSetting> list = new ArrayList<PegaSetting>(settings);
        Collections.sort(list);

        return list;
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void deletePegaSettings(HttpServletResponse response, @RequestParam String configName, HttpSession session) throws IOException {

        Iterator<PegaSetting> iterator = settings.iterator();
        refreshSettings();

        boolean removeResult = settings.removeIf(s -> {
            if (!configName.equals(s.getConfigName())) {
                return false;
            } else {
                logger.debug(String.format("[deletePegaSettings] Remove config = %s", configName));
                return true;
            }
        });

        if(removeResult)
            writeSettings();
    }

}
