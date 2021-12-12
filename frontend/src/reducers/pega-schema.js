import actionTypes from '../constants/actionTypes';


const updatePegaSetting = (state, action) => {

    if (state === undefined){
        return {
          data: {},
          schemaList: [],
          loading: false,
          error: null,
          listLoading: false,
          listError: null
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
        case actionTypes.FETCH_SCHEMA_LIST_REQUESTED:
          return {
            ...state.pegaSchema,
            listLoading: true,
            listError: null
          };
    
        case actionTypes.FETCH_SCHEMA_LIST_SUCCESS:
          return {
            ...state.pegaSchema,
            schemaList: action.payload,
            listLoading: false,
            listError: null
          };
    
        case actionTypes.FETCH_SCHEMA_LIST_ERROR:
            return {
                ...state.pegaSchema,
                listLoading: false,
                listError: action.payload
            };

        case actionTypes.SCHEMA_DATA_SETTED:
          return {
            ...state.pegaSchema,
            data: action.payload,
            loading: false,
            error: null,
            listLoading: false,
            listError: null
          }

        case actionTypes.DELETE_SCHEMA_SUCCESS:
          return {
            ...state.pegaSchema,
            data: {},
            loading: false,
            error: null
          };

        default:
          return state.pegaSchema;
    
      }
};

export default updatePegaSetting;