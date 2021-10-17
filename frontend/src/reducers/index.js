import updateSelectedCase from './case';
import updateDataPage from './data-page';
import updatePegaSetting from './pega-setting';
import updatePegaSchema from './pega-schema';


const reducer = (state, action) => {
    return {
      pegaSetting: updatePegaSetting(state, action),
      selectedCase: updateSelectedCase(state,action),
      pegaSchema: updatePegaSchema(state,action),
      dataPage: updateDataPage(state,action)
    }
};

export default reducer;
