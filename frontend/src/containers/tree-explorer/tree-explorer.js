import React, { useEffect } from 'react';

import TreeView from '../../components/tree-view';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCase, fetchComparedCase } from '../../actions';
import { useCookies } from 'react-cookie';


const TreeExplorer = ({ caseKey = "", caseClass = "", onClickNode = () => { }, onExpandNode = () => { }, compareMode = false, getNodeStyle = ()=>"" }) => {

  const data = useSelector(state => state.selectedCase.data);
  const comparedData = useSelector(state => state.selectedCase.comparedData);
  const loading = useSelector(state => state.selectedCase.loading);
  const error = useSelector(state => state.selectedCase.error);

  const [{ activeSettingUrl, activeSettingCredential },] = useCookies(['activeSettingCredential', 'activeSettingUrl']);

  const id = caseClass + " " + caseKey;

  const dispatch = useDispatch();

  /* get case data with pega api */
  useEffect(() => {
    if (id !== "" ) {
      if (compareMode)
        fetchComparedCase(id, activeSettingUrl, activeSettingCredential)(dispatch);
      else
        fetchCase(id, activeSettingUrl, activeSettingCredential)(dispatch);
    }
  }, [id, activeSettingUrl, activeSettingCredential, dispatch, compareMode]);

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (compareMode)
    return <TreeView data={comparedData} onClickNode={onClickNode} onExpandNode={onExpandNode} getNodeStyle={getNodeStyle}/>;
  else
    return <TreeView data={data} onClickNode={onClickNode} onExpandNode={onExpandNode} getNodeStyle={getNodeStyle}/>;

};

export default TreeExplorer;