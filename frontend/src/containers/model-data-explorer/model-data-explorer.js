import React, { useEffect } from 'react';

// import TreeView from '../../components/tree-view';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import { ERD } from '../../components/diagram';

import { useDispatch, useSelector } from 'react-redux';
import { postNewSchemaFromCase } from '../../actions';
import { useCookies } from 'react-cookie';

import './model-data-explorer.css';


const ModelDataExplorer = ({ caseKey = "", caseClass = "" }) => {

  // const data = useSelector(state => state.selectedCase.data);
  const schema = useSelector(state => state.pegaSchema.data);

  const case_loading = useSelector(state => state.selectedCase.loading);
  const case_error = useSelector(state => state.selectedCase.error);

  const schema_loading = useSelector(state => state.pegaSchema.loading);
  const schema_error = useSelector(state => state.pegaSchema.error);

  const [{activeSettingUrl, activeSettingCredential}, ] = useCookies(['activeSettingCredential', 'activeSettingUrl']);

  const id = caseClass + " " + caseKey;

  const dispatch = useDispatch();

  /* get case data with pega api */
  useEffect(()=>{
    if(caseKey!=="" && caseClass!=="" && activeSettingUrl !== "") {
      postNewSchemaFromCase(id, activeSettingUrl, activeSettingCredential)(dispatch);
    }
  }, [ id, caseKey, caseClass, activeSettingUrl, activeSettingCredential, dispatch]); 

  /* get case schema with api */


 if (case_error || schema_error) {
    return <ErrorIndicator />;
  }

  if(case_loading || schema_loading) {
    return <Spinner/>;
  }


  return (
    <div className="model-explorer">
        <div className="model-schema">
          <ERD data={ schema }/>  
        </div>
        <div className="model-list">
          <div className="buttons">
            <button className="button-gray">Save</button>
            <button className="button-gray">Delete</button>
          </div>
        </div>
    </div>
  );

};

export default ModelDataExplorer;