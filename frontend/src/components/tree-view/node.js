import React, { useState, useEffect } from 'react';

import './tree-view.css';

import { getPegaName } from '../utils/pega-object';

import collapseBtn from '../../images/collapseButton.png';


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


/* Function for creating tree node for clibdoard (called recursively)
Params:
    name
    data - object contains page properties
    prefix - for page list item (page name)
    reference - pega reference
    objclass - pega object class
    onClickNode(node) - function called when click node
    searchString - for searching in name attribute
    expandParent() - function called when expand parent node
    onExpandNode(reference) - function called when any node
    getNodeStyle(reference) - function for adding styling depends on reference
*/
const Node = ({ name = "", data = {}, prefix = "", reference = "", objClass = "", onClickNode, searchString = "", 
                expandParent = () => {}, onExpandNode = () => {}, getNodeStyle = () => "" }) => {

    const [visible, setVisible] = useState( name==="" );

    const isPage = typeof data === 'object';
    const isPageList = Array.isArray(data);

    const nodeName = getPegaName(prefix, name);
    const searchedClass = searchString !== "" ? getSearched(isPage||isPageList, nodeName, data, searchString) : "";

    const onClickAction = () => {
        onClickNode( { nodeName, objClass, nodeRef } );
    };

    const expandPage = () => {
        setVisible(true);
        expandParent();
    };

    const onExpandAction = () => {
        onExpandNode(nodeRef);
        setVisible(!visible);
    }
    
    useEffect(() => {
        if(searchedClass === "searched") {
            expandParent();
        }
    }, [ expandParent, searchedClass]);


    let nodeRef = isPageList ? reference : reference + nodeName;
    let nodePrefix;

    if(isPage && !isPageList && name !== "") {
         nodeRef = nodeRef+".";
    }

    if(isPageList) {
        nodePrefix = name;
    }

    if(!isPage) {
        return (
            <div className = { "node property " + searchedClass + " " + getNodeStyle(nodeRef)} 
                                                    onClick= { onClickAction } path = { nodeRef }>
                    <div className = "name "> { nodeName }</div>
                    <div className = "value ">  { data }</div>
            </div>
        );
    }

    objClass = data["pxObjClass"];

    return (
        <div className = {"node page " + getNodeStyle( isPageList ? nodeRef + nodeName : nodeRef )}>
            <div className = { nodeName !== "" ? "name" : "name hidden"}>
                <div className = { visible ? "collapse-btn" : "collapse-btn collapse"}
                    onClick = { onExpandAction }>
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
                                     expandParent = { expandPage } 
                                     onExpandNode = { onExpandNode }
                                     getNodeStyle = { getNodeStyle } />;
                    })
                }
            </div>
        </div>
        
    );
         
      
};

export default Node;