import React, { useRef } from 'react';

import CaseSeach from '../../components/case-search';
import ModelExplorer from '../model-explorer';

import { useDispatch, useSelector } from 'react-redux';

import { caseParamSetted } from '../../actions';

const CaseDataView = () => {

    const dispatch = useDispatch(); 
    const headerRef = useRef(null);

    const { caseId, caseClass } = useSelector(state => state.selectedCase.params);

    const onSubmitSearch = ({ caseId, caseClass }) => {
        dispatch(caseParamSetted({ caseId, caseClass }));
    }
    
    return (
        <div>
            <div ref= {headerRef}>
                <div className = "page-header">
                    Case model view
                </div>
                <div className="search">
                    <CaseSeach caseId={ caseId } caseClass={ caseClass } onSubmitAction = { onSubmitSearch }/>
                </div>
            </div>
            {
                caseId && caseClass ? <ModelExplorer caseKey = { caseId } caseClass = { caseClass } />:null
            }
        </div>

    )
};

export default CaseDataView;