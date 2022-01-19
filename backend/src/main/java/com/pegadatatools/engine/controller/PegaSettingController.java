package com.pegadatatools.engine.controller;

import com.pegadatatools.engine.service.PegaSettingService;
import com.pegadatatools.engine.service.PegaSettingServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

import com.pegadatatools.engine.model.PegaSetting;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/api/pegasetting")
public class PegaSettingController {

    private final PegaSettingService pegaSettingService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void updateSetting(@Validated @RequestBody PegaSetting requestBody, HttpServletResponse response) {
        pegaSettingService.updateSetting(requestBody, response);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<PegaSetting> getSettings()  {
        return pegaSettingService.getSettings();
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void deleteSetting(@RequestParam String configName, HttpServletResponse response) {
        pegaSettingService.deleteSetting(configName, response);
    }
}
