import React, { useEffect } from 'react';

import TreeView from '../../components/tree-view';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCase } from '../../actions';


const TreeExplorer = ({ caseKey = "", caseClass = "", onClickNode }) => {

  const data = useSelector(state => state.selectedCase.data);
  const loading = useSelector(state => state.selectedCase.loading);
  const error = useSelector(state => state.selectedCase.error);

  const id = caseClass + " " + caseKey;

  const dispatch = useDispatch();

  /* get case data with pega api */
  useEffect(()=>{
    console.log("id "+ id);
    fetchCase(id)(dispatch);
  }, [ id, dispatch ]); 

 if (error) {
    return <ErrorIndicator />;
  }

  if(loading) {
      return <Spinner/>;
  }

  return <TreeView data = { data } onClickNode = { onClickNode }/>;

};

export default TreeExplorer;