package com.pegadatatools.engine.service;

import com.pegadatatools.engine.model.PegaSetting;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface PegaSettingService {

    void updateSetting(PegaSetting setting, HttpServletResponse response);

    List<PegaSetting> getSettings();

    void deleteSetting(String configName, HttpServletResponse response);
}
