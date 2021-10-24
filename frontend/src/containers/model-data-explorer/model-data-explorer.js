import React, { useEffect, useState } from 'react';

// import TreeView from '../../components/tree-view';
import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import { ERD, ControlButtons } from '../../components/diagram';

import { useDispatch, useSelector } from 'react-redux';
import { postNewSchemaFromCase, setSchemaData } from '../../actions';
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

  const [ seletedNode, updateSeletedNode] = useState(null);

  const id = caseClass + " " + caseKey;

  const dispatch = useDispatch();


  const onNodeClick = (id) => {
    updateSeletedNode({
        node: schema.nodes.filter((item) => item.id === id),
        links: schema.links.filter((item) => item.source === id || item.target === id)
    });
  }

  const onUpdateName = (newName) => {
    dispatch(setSchemaData({
        ...schema,
        name: newName
    }));
  };

  useEffect(()=>{
    if(caseKey!=="" && caseClass!=="" && activeSettingUrl !== "") {
      postNewSchemaFromCase(id, activeSettingUrl, activeSettingCredential)(dispatch);
    }
  }, [ id, caseKey, caseClass, activeSettingUrl, activeSettingCredential, dispatch]); 

  return (
    <div className="model-explorer">
        <div className="model-list">
            {/* <button className="button-gray">Save</button>
            <button className="button-gray">Delete</button> */}
            List
        </div>
        <div className="model-schema">
          {
            case_error || schema_error ? <ErrorIndicator /> : (
                  case_loading || schema_loading ? <Spinner/> : <ERD data={ schema } onNodeClick = { onNodeClick }/>  
            )
          }
        </div>
        <div className="model-panel">
          {
            case_error || schema_error ? <ErrorIndicator /> : (
                  case_loading || schema_loading ? <Spinner/> : <ControlButtons shemaName = { schema.name } selectedNode={ seletedNode } nodes = { schema.nodes } updateName={ onUpdateName } /> 
            )
          }
        </div>
    </div>
  );

};

export default ModelDataExplorer;