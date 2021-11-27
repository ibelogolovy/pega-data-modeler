import axios from "axios";

import { getError } from "../../helpers";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const headers = {
    'Content-Type': 'application/json'
  }

const { REACT_APP_API_URL } = process.env;

const getPegaSetting = () => {
    return axios
        .get(REACT_APP_API_URL+"/pegasetting/")
        .then( response => {
            return response.data.map((value)=>{
                return {login: value.apiLogin, password: value.apiPassword, url: value.apiUrl, name: value.configName, defaultClass: value.defaultClass}});
        })
        .catch( error => {
            return Promise.reject(getError(error));
        })
}

const addPegaSetting = ({url, login, password, active, name, defaultClass}) => {
    return axios
        .post(REACT_APP_API_URL+"/pegasetting/", {apiUrl: url, apiLogin: login, apiPassword: password, configName: name, defaultClass: defaultClass}, {headers: headers})
}

const deletePegaSetting = (name) => {
    return axios
        .delete(REACT_APP_API_URL+"/pegasetting/", {params:{configName: name}});
}

export {
    getPegaSetting,
    addPegaSetting,
    deletePegaSetting
}