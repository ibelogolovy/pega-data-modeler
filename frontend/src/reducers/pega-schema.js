import actionTypes from '../constants/actionTypes';




const updatePegaSetting = (state, action) => {

    if (state === undefined){
        return {
          data: {},
          schemaList: [],
          loading: true,
          error: null
        };
      };
      
      switch (action.type) {
        case actionTypes.FETCH_SCHEMA_REQUESTED:
          return {
            ...state.pegaSchema,
            loading: true,
            error: null
          };
    
        case actionTypes.FETCH_SCHEMA_SUCCESS:
          return {
            ...state.pegaSchema,
            data: action.payload,
            loading: false,
            error: null
          };
    
        case actionTypes.FETCH_SCHEMA_ERROR:
            return {
                ...state.pegaSchema,
                loading: false,
                error: action.payload
            };
        default:
          return state.pegaSchema;
    
      }
};

export default updatePegaSetting;