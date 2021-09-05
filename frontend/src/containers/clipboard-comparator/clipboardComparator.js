import React, { useState } from 'react';

import TreeExplorer from '../tree-explorer';
import PropertyExplorer from '../property-explorer';

import { useDispatch } from 'react-redux';

import { caseParamSetted } from '../../actions';


import './clipboardComparator.css';

const ClipboardComparator = ({ caseKey, caseClass }) => {

  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedPropClass, setSelectedPropClass] = useState("");
  
  const dispatch = useDispatch();

  const onClickNode = ( { nodeName, objClass, nodeRef } ) => {
    setSelectedProperty(nodeName);
    setSelectedPropClass(objClass);
    dispatch(caseParamSetted({ reference: nodeRef }));
  }

  return (
    <div className="wide-clipboard">
      <div className = "tree-explorer">
        <TreeExplorer caseKey = { caseKey } caseClass = { caseClass } onClickNode={ onClickNode }/>
      </div>
      <div className = "tree-explorer">
        <TreeExplorer caseKey = { caseKey } caseClass = { caseClass } onClickNode={ onClickNode }/>
      </div>
    </div>
  );

};

export default ClipboardComparator;