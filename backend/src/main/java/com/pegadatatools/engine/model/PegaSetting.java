package com.pegadatatools.engine.model;

import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotBlank;

import java.util.Objects;

public class PegaSetting implements Comparable {

    @NotBlank @Getter @Setter private String configName;
    @NotBlank @Getter @Setter private String apiUrl;
    @NotBlank @Getter @Setter private String apiLogin;
    @NotBlank @Getter @Setter private String apiPassword;
    @Getter @Setter private String defaultClass;
    @Getter @Setter private Boolean active;

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
