import axios from "axios";
import { endpoints } from "./endpoints";
import { authHeader, getError } from "../../helpers";

const getDataPage = (id, params, url, credentials) => {
  let _url = "/api/pega?url="+encodeURI(url + endpoints.DATA + "/" + id);
  return axios
    .get(_url, {
      headers: {
        ...authHeader(credentials)
      },
      params: params
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return Promise.reject(getError(error));
    });
}


export {
    getDataPage
};