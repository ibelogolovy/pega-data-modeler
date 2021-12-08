import React, { useEffect, useRef } from 'react';

import WideClipboard from '../wideClipboard';
import CaseSeach from '../../components/case-search';

import { useDispatch, useSelector } from 'react-redux';

import { useCookies } from 'react-cookie';

import { caseParamSetted, fetchPegaSetting } from '../../actions';

const CaseDataView = () => {

    const dispatch = useDispatch();
    const headerRef = useRef(null);

    const [cookies] = useCookies(['defaultWorkClass']);

    const { caseId, caseClass } = useSelector(state => state.selectedCase.params);

    const caseClassWithDefault = !caseClass || caseClass === "" ? cookies.defaultWorkClass : caseClass;

    useEffect(() => {
        fetchPegaSetting()(dispatch);
    });

    const hideHeaderOnScroll = () => {
        if(headerRef.current) {
            const distanceY = window.pageYOffset || document.documentElement.scrollTop;
            const shrinkOn = headerRef.current.className === "hidden" ? 0 : 190;

            if (distanceY > shrinkOn) {
                headerRef.current.className = "hidden";
            } else {
                headerRef.current.className = "";
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", hideHeaderOnScroll);

        return () => {
            window.removeEventListener("scroll", hideHeaderOnScroll)
        }
    }, [headerRef]);


    const onSubmitSearch = ({ caseId, caseClass }) => {
        dispatch(caseParamSetted({ caseId, caseClass }));
    }

    return (
        <div className="page">
            <div ref={headerRef}>
                <div className="page-header">
                    Wide clipboard
                </div>
                <div className="search">
                    <CaseSeach caseId={caseId} caseClass={caseClassWithDefault} onSubmitAction={onSubmitSearch} />
                </div>
            </div>
            {
                caseId && caseClass ? <WideClipboard caseKey={caseId} caseClass={caseClassWithDefault} /> : null
            }
        </div>

    )
};

export default CaseDataView;