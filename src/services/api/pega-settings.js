import axios from "axios";

import { getError } from "../../helpers";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const headers = {
    'Content-Type': 'application/json'
  }

const getPegaSetting = () => {
    return axios
        .get("http://localhost:8080/api/pegasetting/")
        .then( response => {
            return response.data.map((value)=>{
                return {login: value.apiLogin, password: value.apiPassword, url: value.apiUrl, name: value.configName, active:value.active}});
        })
        .catch( error => {
            return Promise.reject(getError(error));
        })
}

// const getPegaSetting = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//           resolve([{apiLogin: "test", apiPassword: "test", apiUrl:"http://test.ru", configName:"PegaMRTDEV"}, 
//           {apiLogin: "test1", apiPassword: "te3st", apiUrl:"http://test4.ru", configName:"PegaMRTDEV2"},{apiLogin: "test", apiPassword: "test", apiUrl:"http://test.ru", configName:"PegaMRTDEV"}, 
//           {apiLogin: "test1", apiPassword: "te3st", apiUrl:"http://test4.ru", configName:"PegaMRTDEV2"},{apiLogin: "test", apiPassword: "test", apiUrl:"http://test.ru", configName:"PegaMRTDEV"}, 
//           {apiLogin: "test1", apiPassword: "te3st", apiUrl:"http://test4.ru", configName:"PegaMRTDEV2"},{apiLogin: "test", apiPassword: "test", apiUrl:"http://test.ru", configName:"PegaMRTDEV"}, 
//     {apiLogin: "test1", active:true, apiPassword: "te3st", apiUrl:"http://test4.ru", configName:"PegaMRTDEV2"},{apiLogin: "test", apiPassword: "test", apiUrl:"http://test.ru", configName:"PegaMRTDEV"}, 
//     {apiLogin: "test1", apiPassword: "te3st", apiUrl:"http://test4.ru", configName:"PegaMRTDEV2"},{apiLogin: "test", apiPassword: "test", apiUrl:"http://test.ru", configName:"PegaMRTDEV"}, 
//     {apiLogin: "test1", apiPassword: "te3st", apiUrl:"http://test4.ru", configName:"PegaMRTDEV2"}].map((value)=>{
//         return {login: value.apiLogin, password: value.apiPassword, url: value.apiUrl, name:value.configName, active:value.active};
//     }));
//         }, 10);
//       });
// }

const addPegaSetting = ({url, login, password, active, name}) => {
    return axios
        .post("http://localhost:8080/api/pegasetting/", {apiUrl: url, apiLogin: login, apiPassword: password, configName: name, active: active}, {headers: headers})
}

export {
    getPegaSetting,
    addPegaSetting
}