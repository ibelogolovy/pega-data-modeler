import React, { useRef } from 'react';

import CaseSeach from '../../components/case-search';
import ModelExplorer from '../model-explorer';

import { useDispatch, useSelector } from 'react-redux';

import { useCookies } from 'react-cookie';

import { caseParamSetted } from '../../actions';

const CaseDataView = () => {

    const dispatch = useDispatch();
    const headerRef = useRef(null);

    const [cookies] = useCookies(['defaultWorkClass']);

    const { caseId, caseClass } = useSelector(state => state.selectedCase.params);

    const caseClassWithDefault = !caseClass || caseClass === "" ? cookies.defaultWorkClass : caseClass;

    const onSubmitSearch = ({ caseId, caseClass }) => {
        dispatch(caseParamSetted({ caseId, caseClass }));
    }

    return (
        <div>
            <div ref={headerRef}>
                <div className="page-header">
                    Class Data Model
                </div>
                <div className="search">
                    <CaseSeach caseId={caseId} caseClass={caseClassWithDefault} onSubmitAction={onSubmitSearch} />
                </div>
            </div>
            {
                caseId && caseClass ? <ModelExplorer caseKey={caseId} caseClass={caseClassWithDefault} /> : null
            }
        </div>

    )
};

export default CaseDataView;