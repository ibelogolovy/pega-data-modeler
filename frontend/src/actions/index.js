import actionTypes from '../constants/actionTypes';
import { getCase } from '../services/pega-api/cases';
import { getDataPage } from '../services/pega-api/data';
import { getPegaSetting, addPegaSetting, deletePegaSetting } from '../services/api/pega-settings';
import { createPegaSchema, etPegaSchema, deletePegaSchema } from '../services/api/pega-schema';


// case action creators start
const caseRequested = () => {
    return {
      type: actionTypes.FETCH_CASE_REQUESTED
    };
};

const caseLoaded = (caseData) => {
    return {
      type: actionTypes.FETCH_CASE_SUCCESS,
      payload: caseData
    };
};

const caseError = (error) => {
    return {
      type: actionTypes.FETCH_CASE_ERROR,
      payload: error
    };
};

const fetchCase = (id, url, credentials) => (dispatch) => {
    dispatch(caseRequested());
    getCase(id, url, credentials)
      .then((data) => dispatch(caseLoaded(data)))
      .catch((error) => dispatch(caseError(error)));
};

const caseComparedLoaded = (caseData) => {
  return {
    type: actionTypes.FETCH_COMPARED_CASE_SUCCESS,
    payload: caseData
  };
};

const caseComparedError = (error) => {
  return {
    type: actionTypes.FETCH_COMPARED_CASE_ERROR,
    payload: error
  };
};

const fetchComparedCase = (id, url, credentials) => (dispatch) => {
  dispatch(caseRequested());
  getCase(id, url, credentials)
    .then((data) => dispatch(caseComparedLoaded(data)))
    .catch((error) => dispatch(caseComparedError(error)));
};

// case action creators end

// data action creators start
const dataRequested = () => {
    return {
      type: actionTypes.FETCH_DATA_REQUESTED
    };
};

const dataLoaded = (caseData) => {
    return {
      type: actionTypes.FETCH_DATA_SUCCESS,
      payload: caseData
    };
};

const dataError = (error) => {
    return {
      type: actionTypes.FETCH_DATA_ERROR,
      payload: error
    };
};

const fetchDataPage = (id, params, url, credentials) => (dispatch) => {
    dispatch(dataRequested());
    getDataPage(id, params, url, credentials)
      .then((data) => dispatch(dataLoaded(data)))
      .catch((error) => dispatch(dataError(error)));
};
// data action creators end

// case params action creators start
const caseParamSetted = (param) => {
    return {
      type: actionTypes.CASE_PARAM_SETTED,
      payload: param
    };
};

const caseParamRemoved = (param) => {
    return {
      type: actionTypes.CASE_PARAM_REMOVED,
      payload: param
    };
};
// case params action creators end

// pega settings creators start
const pegaSettingRequested = () => {
  return {
    type: actionTypes.FETCH_PEGASET_REQUESTED
  };
};

const pegaSettingLoaded = (setting) => {
  return {
    type: actionTypes.FETCH_PEGASET_SUCCESS,
    payload: setting
  };
};

const pegaSettingError = (error) => {
  return {
    type: actionTypes.FETCH_PEGASET_ERROR,
    payload: error
  };
};

const pegaSettingRemoved = (name) => {
  return {
    type: actionTypes.SET_PEGASET_REMOVE,
    payload: name
  };
};

const deletePegaSettingAndFetch = (name) => (dispatch) => {
  dispatch(pegaSettingRemoved(name));
  dispatch(pegaSettingRequested());
  deletePegaSetting(name).then(()=>{})
  .then(()=> getPegaSetting())
  .then((data) => dispatch(pegaSettingLoaded(data)))
  .catch((error) => dispatch(pegaSettingError(error)));
};

const fetchPegaSetting = () => (dispatch) => {
  dispatch(pegaSettingRequested());
  getPegaSetting()
    .then((data) => dispatch(pegaSettingLoaded(data)))
    .catch((error) => dispatch(pegaSettingError(error)));
};

const postPegaSettingAndFetch = (data) => (dispatch) => {
  dispatch(pegaSettingRequested());
  addPegaSetting(data).then(()=>{})
    .then(()=> getPegaSetting())
    .then((data) => dispatch(pegaSettingLoaded(data)))
    .catch((error) => dispatch(pegaSettingError(error)));
};

// pega settings creators end

// pega schema creators start
const schemaRequested = () => {
  return {
    type: actionTypes.FETCH_SCHEMA_REQUESTED
  };
};

const schemaLoaded = (caseData) => {
  return {
    type: actionTypes.FETCH_SCHEMA_SUCCESS,
    payload: caseData
  };
};

const schemaError = (error) => {
  return {
    type: actionTypes.FETCH_SCHEMA_ERROR,
    payload: error
  };
};


const postNewSchemaFromCase = (id, url, credentials) => (dispatch) => {
  dispatch(caseRequested());
  getCase(id, url, credentials)
    .then((data) => {
      dispatch(caseLoaded(data));
      dispatch(schemaRequested());
      createPegaSchema(data.content, id)
        .then((schema) => dispatch(schemaLoaded(schema)))
        .catch((error) => dispatch(schemaError(error)));
    })
    .catch((error) => dispatch(caseError(error)));
};


// pega schema creators end


export {
    fetchCase,
    fetchComparedCase,
    fetchDataPage,
    fetchPegaSetting,
    postPegaSettingAndFetch,
    deletePegaSettingAndFetch,
    caseParamSetted,
    caseParamRemoved,
    postNewSchemaFromCase
};