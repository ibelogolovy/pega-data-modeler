package com.pegadatatools.engine.model;

import java.util.Objects;

public class PegaSetting  implements Comparable {

    private String configName;
    private String apiUrl;
    private String apiLogin;
    private String apiPassword;
    private Boolean active;

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Boolean getActive() {
        return active;
    }

    public String getConfigName() {
        return configName;
    }

    public String getApiUrl() {
        return apiUrl;
    }

    public String getApiLogin() {
        return apiLogin;
    }

    public String getApiPassword() {
        return apiPassword;
    }

    public void setConfigName(String configName) {
        this.configName = configName;
    }

    public void setApiUrl(String apiUrl) {
        this.apiUrl = apiUrl;
    }

    public void setApiLogin(String apiLogin) {
        this.apiLogin = apiLogin;
    }

    public void setApiPassword(String apiPassword) {
        this.apiPassword = apiPassword;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.apiLogin, this.apiUrl);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (!(obj instanceof PegaSetting))
            return false;
        PegaSetting other = (PegaSetting) obj;
        if (!this.apiUrl.equals(other.getApiUrl()) && !this.apiLogin.equals(other.getApiLogin()))
            return false;
        return true;
    }

    @Override
    public int compareTo(Object o) {
        return this.getConfigName().compareTo(((PegaSetting) o).getConfigName());
    }

}
