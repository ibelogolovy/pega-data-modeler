package com.pegadatatools.engine.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
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

    private Set<PegaSetting> settings = new HashSet<>();

    private File file = new File("pega-settings.json");

    private void refreshSettings() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        boolean empty = !file.exists() || file.length() == 0;
        if(!empty) {
            settings = mapper.readValue(file, new TypeReference<Set<PegaSetting>>(){});
        }
    }

    private void writeSettings() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(file, settings);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void updatePegaSettings(HttpServletResponse response, @RequestBody PegaSetting requestBody, HttpSession session) throws IOException {
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
        while(iterator.hasNext()) {
            PegaSetting current = iterator.next();
            System.out.println(current.getConfigName() + " = " + configName);
            if(current.getConfigName().equals(configName))
                iterator.remove();
        }
        writeSettings();
    }

}
