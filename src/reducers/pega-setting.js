import actionTypes from '../constants/actionTypes';

const updatePegaSetting = (state, action) => {

    if (state === undefined){
        return {
          data: {},
          loading: true,
          error: null
        };
      };
      
      switch (action.type) {
        case actionTypes.FETCH_PEGASET_REQUESTED:
          return {
            ...state.pegaSetting,
            loading: true,
            error: null
          };
    
        case actionTypes.FETCH_PEGASET_SUCCESS:
          return {
            ...state.pegaSetting,
            data: action.payload,
            loading: false,
            error: null
          };
    
        case actionTypes.FETCH_PEGASET_POSTED:
            return {
                ...state.pegaSetting,
                loading: false,
                error: null
            };
        case actionTypes.FETCH_PEGASET_CASE_ERROR:
          return {
            ...state.pegaSetting,
            data: {},
            loading:false,
            error: action.payload
          };
    
    
        default:
          return state.pegaSetting;
    
      }
};

export default updatePegaSetting;