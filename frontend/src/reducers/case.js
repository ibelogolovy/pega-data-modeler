import actionTypes from '../constants/actionTypes';
import { formReferenceList, addMissignProperties } from '../components/utils/pega-object';
import { diffObjects } from '../components/utils/objects.js';



const updateSelectedCase= (state, action) => {

  if (state === undefined){
    return {
      data: {},
      comparedData: {},
      params: {},
      comparedDelta: [],
      loading: false,
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
        comparedData: {},
        data: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_COMPARED_CASE_SUCCESS:
      let newData = addMissignProperties(action.payload, state.selectedCase.data);
      return {
        ...state.selectedCase,
        data: newData,
        comparedData: addMissignProperties(newData, action.payload),
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
