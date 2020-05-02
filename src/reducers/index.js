import updateSelectedCase from './case';
import updateDataPage from './data-page';


const reducer = (state, action) => {
    return {
      selectedCase: updateSelectedCase(state,action),
      dataPage: updateDataPage(state,action)
    }
};

export default reducer;
