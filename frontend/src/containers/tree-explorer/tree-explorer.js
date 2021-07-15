import React, { useEffect } from 'react';

import TreeView from '../../components/tree-view';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCase } from '../../actions';
import { useCookies } from 'react-cookie';


const TreeExplorer = ({ caseKey = "", caseClass = "", onClickNode }) => {

  const data = useSelector(state => state.selectedCase.data);
  const loading = useSelector(state => state.selectedCase.loading);
  const error = useSelector(state => state.selectedCase.error);

  const [{activeSettingUrl, activeSettingCredential}, ] = useCookies(['activeSettingCredential', 'activeSettingUrl']);

  const id = caseClass + " " + caseKey;

  const dispatch = useDispatch();

  /* get case data with pega api */
  useEffect(()=>{
    if(id!=="") {
      fetchCase(id, activeSettingUrl, activeSettingCredential)(dispatch);
    }
  }, [ id, activeSettingUrl, activeSettingCredential, dispatch ]); 

 if (error) {
    return <ErrorIndicator />;
  }

  if(loading) {
    return <Spinner/>;
  }

  return <TreeView data = { data } onClickNode = { onClickNode }/>;

};

export default TreeExplorer;