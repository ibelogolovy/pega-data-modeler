import axios from "axios";

import { getError } from "../../helpers";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const headers = {
    'Content-Type': 'application/json'
  }

const { REACT_APP_API_URL } = process.env;

const createPegaSchema = (data, name) => {
    return axios
        .post(REACT_APP_API_URL+"/pega/schema", { name: name, case: data }, {headers: headers})
        .then( response => {
            return response.data;
        })
        .catch( error => {
            return Promise.reject(getError(error));
        })
}

const savePegaSchema = (data) => {
    return axios
        .put(REACT_APP_API_URL+"/pega/schema", data, {headers: headers})
        .then( response => {
            console.log(response);
            return response.data;
        })
        .catch( error => {
            return Promise.reject(getError(error));
        })
}

const getPegaSchema = (id) => {
    const url = REACT_APP_API_URL+"/pega/schema/"+id;
    return axios
        .get(url, {
            headers: headers
          })
        .then( response => {
            return response.data;
        })
        .catch( error => {
            return Promise.reject(getError(error));
        })
}

const getPegaSchemaList = () => {
    return axios
        .get(REACT_APP_API_URL+"/pega/schema", {
            headers: headers
          })
        .then( response => {
            return response.data;
        })
        .catch( error => {
            return Promise.reject(getError(error));
        })
}

const deletePegaSchema = (id) => {
    const url = REACT_APP_API_URL+"/pega/schema/"+id;
    return axios
        .delete(url);
}

export {
    createPegaSchema,
    getPegaSchema,
    getPegaSchemaList,
    deletePegaSchema,
    savePegaSchema
}