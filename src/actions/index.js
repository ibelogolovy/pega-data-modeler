import actionTypes from '../constants/actionTypes';
import { getCase } from '../services/pega-api/cases';
import { getDataPage } from '../services/pega-api/data';

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

export {
    fetchCase,
    fetchDataPage,
    caseParamSetted,
    caseParamRemoved
};