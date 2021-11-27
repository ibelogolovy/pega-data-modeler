import React from 'react';

import CaseSeach from '../../components/case-search';

import ModelDataExplorer from '../model-data-explorer';

import { useCookies } from 'react-cookie';

import { useDispatch, useSelector } from 'react-redux';
import { caseParamSetted } from '../../actions';


const CaseDataView = () => {

    const dispatch = useDispatch();
    
    const [cookies] = useCookies(['defaultWorkClass']);

    const { caseId, caseClass } = useSelector(state => state.selectedCase.params);

    const caseClassWithDefault = !caseClass || caseClass === "" ? cookies.defaultWorkClass : caseClass;

    console.log(caseClassWithDefault);

    const onSubmitSearch = ({ caseId, caseClass }) => {
        dispatch(caseParamSetted({ caseId, caseClass }));
    }

    return (
        <React.Fragment>
            <div>
                <div className="page-header">
                    Case Data model
                </div>
                <div className="search">
                    <CaseSeach caseId={caseId} caseClass={caseClassWithDefault} onSubmitAction={onSubmitSearch} />
                </div>
            </div>
            <div style={{ height:'80%'}}>
                <ModelDataExplorer caseKey={caseId} caseClass={caseClassWithDefault} />
            </div>
        </React.Fragment>

    )
};

export default CaseDataView;





