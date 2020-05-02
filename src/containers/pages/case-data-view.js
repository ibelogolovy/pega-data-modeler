import React, { useState, useEffect, useRef } from 'react';

import WideClipboard from '../wideClipboard';
import CaseSeach from '../../components/case-search';

const CaseDataView = () => {

    const [caseId, setCaseId] = useState("");
    const [caseClass, setCaseClass] = useState("");

    const headerRef = useRef(null);

    const hideHeaderOnScroll = () => {

        // in future this function should be changed because reseting pageYOffset and scrollTop when the header is hiding
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkOn = 190;
    
        if (distanceY > shrinkOn ) {
            headerRef.current.className = "hidden";
        } else  {
            headerRef.current.className = "";
        }
      };
    
    useEffect(()=>{
        window.addEventListener("scroll", hideHeaderOnScroll);

        return () => {
            window.removeEventListener("scroll", hideHeaderOnScroll)
        }
    }, [ headerRef ]);

    const onSubmitSearch = ({ caseId, caseClass }) => {
        setCaseId(caseId);
        setCaseClass(caseClass);
    }
    
    return (
        <div>
            <div ref= {headerRef}>
                <div className = "page-header">
                    Case view
                </div>
                <div className="search">
                    <CaseSeach onSubmitAction = { onSubmitSearch }/>
                </div>
            </div>
            {
                caseId && caseClass ? <WideClipboard caseKey = { caseId } caseClass = { caseClass } />:null
            }
        </div>

    )
};

export default CaseDataView;