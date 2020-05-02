import React from 'react';

import TreeExplorer from '../tree-explorer';
import PropertyExplorer from '../property-explorer';

import { useDispatch } from 'react-redux';

import { fetchDataPage, caseParamSetted } from '../../actions';


import './wideClipboard.css';


const WideClipdoard = ({ caseKey, caseClass }) => {

  const getPropDataPage = 'D_pzGetProperty';

  const dispatch = useDispatch();

  const onClickNode = ( { name, objClass, nodeRef } ) => {
    fetchDataPage(getPropDataPage, { PropertyName: name, AppliesToClass: objClass })(dispatch);
    dispatch(caseParamSetted({ reference: nodeRef }));
  }

  

  return (
    <div className="wide-clipboard">
      <div className = "tree-explorer">
        <TreeExplorer caseKey = { caseKey } caseClass = { caseClass } onClickNode={ onClickNode }/>
      </div>
      <div className = "property-explorer">
         <PropertyExplorer />
      </div>
    </div>
  );

};

export default WideClipdoard;