import React from 'react';

import CaseSeach from '../../components/case-search';

import ModelDataExplorer from '../model-data-explorer'; 

import { useDispatch, useSelector } from 'react-redux';
import { caseParamSetted } from '../../actions';



const CaseDataView = () => {

    const dispatch = useDispatch(); 

    const { caseId, caseClass } = useSelector(state => state.selectedCase.params);

    const onSubmitSearch = ({ caseId, caseClass }) => {
        dispatch(caseParamSetted({ caseId, caseClass }));
    }

    return (
        <div>
            <div>
                <div className = "page-header">
                    Case Data model
                </div>
                <div className="search">
                    <CaseSeach caseId={ caseId } caseClass={ caseClass } onSubmitAction = { onSubmitSearch }/>
                </div>
            </div>
            <ModelDataExplorer caseKey = { caseId } caseClass = { caseClass } />
        </div>

    )
};

export default CaseDataView;





