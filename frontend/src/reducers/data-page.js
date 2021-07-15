import actionTypes from '../constants/actionTypes';

const updateDataPage = (state, action) => {

  if (state === undefined){
    return {
      data: {},
      loading: true,
      error: null
    };
  };
  
  switch (action.type) {
    case actionTypes.FETCH_DATA_REQUESTED:
      return {
        ...state.dataPage,
        loading:true,
        error: null
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_DATA_ERROR:
      return {
        data: {},
        loading:false,
        error: action.payload
      };
    default:
      return state.dataPage;
  }

};

export default updateDataPage;
