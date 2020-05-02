import React, { useState, useEffect } from 'react';

import './tree-view.css';

import collapseBtn from '../../images/collapseButton.png';


const formNodeName = (prefix, name) => {
    if( name === "content") {
        name = "pyWorkPage"
    }

    // if has prefix - it is page list of page group item
    if(typeof prefix === "string" && prefix !== "") {
        name=Number.parseInt(name)+1;
        name=prefix+'('+name+')';
    }
    
    return name;
}


const getSearched = (isPage, name, value, search) => {
    if(!isPage && (name.includes(search) || value.includes(search))) {
        return "searched";
    }  
    else if (isPage && name.includes(search)) {
        return "searched";
    }
    else {
        return "hidden";
    }
};


const Node = ({ name = "", data = {}, prefix = "", reference = "", objClass = "", onClickNode, searchString = "", expandParent=()=>{} }) => {

    const [visible, setVisible] = useState( name==="" );
    // const elementRef = useRef(null);

    const isPage = typeof data === 'object';
    const isPageList = Array.isArray(data);

    const nodeName = formNodeName(prefix, name);
    const searchedClass = searchString !== "" ? getSearched(isPage||isPageList, nodeName, data, searchString): null;

    const onClickAction = () => {
        onClickNode( { nodeName, objClass, nodeRef } );
    };

    const expandPage = () => {
        setVisible(true);
        expandParent();
    };
    
    useEffect(() => {
        if(searchedClass === "searched") {
            expandParent();
        }
    }, [ expandParent, searchedClass]);


    let nodeRef = reference + nodeName;
    let nodePrefix;

    if(isPage && name !== "") {
         nodeRef = isPage ? nodeRef+"." : nodeRef;
    }

    if(isPageList) {
        nodePrefix = name;
    }

    if(!isPage) {
        return (
            <div className = { "node property " + searchedClass} onClick= { onClickAction } path = { nodeRef }>
                    <div className = "name "> { nodeName }</div>
                    <div className = "value ">  { data }</div>
            </div>
        );
    }

    objClass = data["pxObjClass"];

    return (
        <div className = "node page">
            <div className = { nodeName !== "" ? "name" : "name hidden"}>
                <div className = { visible ? "collapse-btn" : "collapse-btn collapse"}
                    onClick = { () => setVisible(!visible) }>
                    <img src = { collapseBtn } alt = "collapse"></img>
                </div>
                { nodeName }
            </div>
            <div className = { visible ? "":"hidden" }>
                {
                    Object.keys(data).map((value,i) => {
                        return <Node key = { i } 
                                     data = { data[value] } 
                                     name = { value } 
                                     prefix = { nodePrefix } 
                                     onClickNode = { onClickNode }
                                     objClass = { objClass }
                                     reference = { nodeRef }
                                     searchString = { searchString } 
                                     expandParent = { expandPage } />;
                    })
                }
            </div>
        </div>
        
    );
         
      
};

export default Node;