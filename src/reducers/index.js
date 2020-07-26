import updateSelectedCase from './case';
import updateDataPage from './data-page';
import updatePegaSetting from './pega-setting';


const reducer = (state, action) => {
    return {
      pegaSetting: updatePegaSetting(state, action),
      selectedCase: updateSelectedCase(state,action),
      dataPage: updateDataPage(state,action)
    }
};

export default reducer;
