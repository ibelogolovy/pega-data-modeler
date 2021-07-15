import axios from "axios";
import { authHeader, getError } from "../../helpers";

import {endpoints} from "./endpoints";

const getCase = (id, url, credentials) => {
  let _url = "/api/pega";
  return axios
    .get(_url, {
      headers: {
        ...authHeader(credentials),
        "Access-Control-Expose-Headers": "etag"
      },
      params: {
        url: encodeURI(url + endpoints.CASES + "/" + id)
      }
    })
    .then( response => {
      // response.data["etag"] = response.headers.etag;
      return response.data;
    })
    .catch( error => {
      return Promise.reject(getError(error));
    });
};


export {
    getCase
};