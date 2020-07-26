import React from 'react';


import './property-view.css';

const PropertyView = ({ data, reference }) => {

    const { pxInsName, 
            pyPropertyMode, 
            pyClassName, 
            pyDescription, 
            pyUsage, 
            pxCreateOpName } = data;

    return (
    <div className="property-view">
        <div className="field">
            <h2>Basic information</h2>
        </div>
         <div className="field">
            <div className="name"> Reference </div>
            <div className="value"> { reference } <div onClick={()=> navigator.clipboard.writeText(reference)}>Copy</div></div>
         </div>
         <div className="field">
            <div className="name"> Name </div>
            <div className="value"> { pxInsName } </div>
         </div>
         <div className="field">
            <div className="name"> Type </div>
            <div className="value"> { pyPropertyMode } </div>
         </div>
         <div className="field">
            <div className="name"> Class </div>
            <div className="value"> { pyClassName } </div>
         </div>
         <div className="field">
            <div className="name"> Description </div>
            <div className="value"> { pyDescription } </div>
         </div>
         <div className="field">
            <div className="name"> Usage </div>
            <div className="value"> { pyUsage } </div>
         </div>
         <div className="field">
            <div className="name"> Creator </div>
            <div className="value"> { pxCreateOpName } </div>
         </div>
    </div>);
};

export default PropertyView;