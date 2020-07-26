package com.pegadatatools.engine.controller;

import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;

import com.pegadatatools.engine.model.PegaSetting;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/pegasetting")
public class PegaSettingController {

    private Set<PegaSetting> settings =new HashSet<PegaSetting>();

    private void resetActiveSettings() {
        Iterator iterator = settings.iterator();
        while(iterator.hasNext()){
            PegaSetting current = (PegaSetting) iterator.next();
            current.setActive(false);
        }
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void updatePegaSettings(HttpServletResponse response, @RequestBody PegaSetting requestBody, HttpSession session) throws IOException {
        try{
            resetActiveSettings();
            if(settings.contains(requestBody)) {
                settings.remove(requestBody);
            }
            settings.add(requestBody);
            response.setStatus(HttpServletResponse.SC_OK);
            response.setContentType("application/json; charset=UTF-8");

        }
        catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            ex.printStackTrace(response.getWriter());
        }

    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<PegaSetting> getPegaSettings() {
        List<PegaSetting> list = new ArrayList<PegaSetting>(settings);
        Collections.sort(list);
        return list;
    }

}
