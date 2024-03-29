import React, { useEffect, useRef } from 'react';

import ClipboardComparator from '../clipboard-comparator';

import { useDispatch, useSelector } from 'react-redux';

import { useCookies } from 'react-cookie';

import { caseParamSetted, fetchPegaSetting } from '../../actions';

const CaseDataComparator = () => {

    const dispatch = useDispatch();
    const headerRef = useRef(null);

    const [cookies] = useCookies(['defaultWorkClass']);

    const { caseId, caseClass } = useSelector(state => state.selectedCase.params);
    const diffData = useSelector(state => state.selectedCase.comparedDelta);

    const caseClassWithDefault = !caseClass || caseClass === "" ? cookies.defaultWorkClass : caseClass;

    useEffect(() => {
        fetchPegaSetting()(dispatch);
    });

    const onSubmitSearch = ({ caseId, caseClass }) => {
        dispatch(caseParamSetted({ caseId, caseClass }));
    }

    return (
        <div className="page">
            <div ref={headerRef}>
                <div className="page-header">
                    Case Data Comparator
                </div>
                <ClipboardComparator caseKey={caseId} caseClass={caseClassWithDefault} onSubmitSearch={onSubmitSearch} diffData={diffData} />
            </div>
        </div>

    )
};

export default CaseDataComparator;