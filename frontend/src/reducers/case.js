import actionTypes from '../constants/actionTypes';
import { formReferenceList } from '../components/utils/pega-object';
import { diffObjects } from '../components/utils/diff-objects.js';



const updateSelectedCase= (state, action) => {

  if (state === undefined){
    return {
      data: {},
      comparedData: {},
      params: {},
      comparedDelta: [],
      loading: true,
      error: null
    };
  };
  
  switch (action.type) {
    case actionTypes.FETCH_CASE_REQUESTED:
      return {
        ...state.selectedCase,
        loading: true,
        error: null
      };

    case actionTypes.FETCH_CASE_SUCCESS:
      return {
        ...state.selectedCase,
        comparedDelta: [],
        data: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_COMPARED_CASE_SUCCESS:
      return {
        ...state.selectedCase,
        comparedData: action.payload,
        comparedDelta: formReferenceList(diffObjects(state.selectedCase.data, action.payload)),
        loading: false,
        error: null
      };

    case actionTypes.FETCH_CASE_ERROR:
      return {
        ...state.selectedCase,
        comparedDelta: [],
        data: {},
        loading: false,
        error: action.payload
      };

    case actionTypes.FETCH_COMPARED_CASE_ERROR:
      return {
        ...state.selectedCase,
        comparedData: {},
        comparedDelta: [],
        loading: false,
        error: action.payload
      };

    case actionTypes.CASE_PARAM_SETTED:
      return {
        ...state.selectedCase,
        params: { ...state.selectedCase.params, ...action.payload },
        loading: false,
        error: false
      };

    default:
      return state.selectedCase;

  }

};

export default updateSelectedCase;
