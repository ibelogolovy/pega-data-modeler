import React, { useState } from 'react';

import TreeExplorer from '../tree-explorer';
import CaseSeach from '../../components/case-search';


import './clipboardComparator.css';

const ClipboardComparator = ({ caseKey, caseClass, onSubmitSearch, diffData = [] }) => {

  const [compareCaseKey, setCompareCaseKey] = useState("");
  const [compareCaseClass, setCompareCaseClass] = useState("");


  const onSubmitSearchCompare = ({ caseId, caseClass }) => {
    setCompareCaseKey(caseId);
    setCompareCaseClass(caseClass);
  }

  const onExpandNode = (path) => {
      
  }

  const getNodeStyle = (path) => {
      let clazz = "";
      diffData.forEach(ref =>{
          if(ref.startsWith(path) && (path.length === ref.length 
                                || ref.charAt(path.length) === '.' 
                                || ref.charAt(path.length) === '(' )) {
              clazz = "difference";
          };
      });
      return clazz;
  }
  

  return (
    <div className="clipboard-comparator">
      <div className = "tree-explorer">
        <CaseSeach caseId={ caseKey } caseClass={ caseClass } onSubmitAction = { onSubmitSearch }/>
        {
          caseKey && caseClass ? <TreeExplorer caseKey = { caseKey } caseClass = { caseClass } onExpandNode = { onExpandNode } getNodeStyle= { getNodeStyle }/>:null
        }
      </div>
      <div className = "tree-explorer">
        <CaseSeach caseId={ caseKey } caseClass={ caseClass } onSubmitAction = { onSubmitSearchCompare }/>
        {
          compareCaseKey && compareCaseClass ? <TreeExplorer caseKey = { compareCaseKey } caseClass = { compareCaseClass } onExpandNode = { onExpandNode } compareMode = { true } getNodeStyle= { getNodeStyle }/>:null
        }
      </div>
    </div>
  );

};

export default ClipboardComparator;