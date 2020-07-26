import actionTypes from '../constants/actionTypes';
import { getCase } from '../services/pega-api/cases';
import { getDataPage } from '../services/pega-api/data';
import { getPegaSetting, addPegaSetting } from '../services/api/pega-settings';

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

const fetchCase = (id) => (dispatch) => {
    dispatch(caseRequested());
    getCase(id)
      .then((data) => dispatch(caseLoaded(data)))
      .catch((error) => dispatch(caseError(error)));
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

const fetchDataPage = (id, params) => (dispatch) => {
    dispatch(dataRequested());
    getDataPage(id, params)
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

export {
    fetchCase,
    fetchDataPage,
    fetchPegaSetting,
    postPegaSettingAndFetch,
    caseParamSetted,
    caseParamRemoved
};