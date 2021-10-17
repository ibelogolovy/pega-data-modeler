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

const getPegaSchema = (id) => {
    return axios
        .get(REACT_APP_API_URL+"/pega/schema", {
            headers: headers,
            params: {
              id: id
            }
          })
        .then( response => {
            return response.data;
        })
        .catch( error => {
            return Promise.reject(getError(error));
        })
}

const deletePegaSchema = (id) => {
    return axios
        .delete(REACT_APP_API_URL+"/pega/schema", { params: { id } });
}

export {
    createPegaSchema,
    getPegaSchema,
    deletePegaSchema
}