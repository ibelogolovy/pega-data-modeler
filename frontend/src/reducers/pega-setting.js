import actionTypes from '../constants/actionTypes';


const removeSetting = (settings, name) => {
  let idx = settings.findIndex(({_name}) => _name === name);
  return [
    ...settings.slice(0, idx),
    ...settings.slice(idx + 1)
  ]
};


const updatePegaSetting = (state, action) => {

    if (state === undefined){
        return {
          data: {},
          activeSettingName: "",
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

        case actionTypes.SET_PEGASET_ACTIVE:
          return {
              ...state.pegaSetting,
              activeSettingName: action.payload,
              loading: false,
              error: null
          };
        case actionTypes.SET_PEGASET_REMOVE:
          return {
              ...state.pegaSetting,
              data: removeSetting(state.pegaSetting.data, action.payload),
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