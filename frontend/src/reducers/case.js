import actionTypes from '../constants/actionTypes';

const updateSelectedCase= (state, action) => {

  if (state === undefined){
    return {
      data: {},
      params: {},
      loading: true,
      error: null
    };
  };
  
  switch (action.type) {
    case actionTypes.FETCH_CASE_REQUESTED:
      return {
        ...state.selectedCase,
        loading:true,
        error: null
      };

    case actionTypes.FETCH_CASE_SUCCESS:
      return {
        ...state.selectedCase,
        data: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_CASE_ERROR:
      return {
        ...state.selectedCase,
        data: {},
        loading:false,
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
