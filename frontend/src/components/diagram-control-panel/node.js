import React, {useState} from 'react';

import { pencilIcon, closeIcon } from '../../constants/controlIcons';

import { VerticallyCenteredModal } from '../modal-dialog';

const Node = ({ node, onCloseNode = () => { }, onEditField = () => () => { }, onRemoveNode = () => { } }) => {
    const { label, objClass, tableName, customName } = node;
    const [showModal, setShowModal] = useState(false);

    const onRemoveNodeInner = () =>{
        toggleModal();
        onRemoveNode();
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    return (
        <div className="description-block">
            <h3 className="description-title">Node <img onClick={onCloseNode} className="icon-close" src={closeIcon} alt="close" /></h3>
            <div className="row">Name: {label} <img src={pencilIcon} alt="edit" onClick={onEditField("node name", label)} /> </div>
            <div className="row">Label: {customName || "Unknown"} <img src={pencilIcon} alt="edit" onClick={onEditField("node label", customName)} /> </div>
            <div className="row">Class: {objClass || "Unknown"} <img src={pencilIcon} alt="edit" onClick={onEditField("node class", objClass)} /> </div>
            <div className="row">Database Table: {tableName || "Unknown"} <img src={pencilIcon} alt="edit" onClick={onEditField("node database table", tableName)} /> </div>
            {/* <button className="button-gray">Save</button> */}
            <button className="button-gray" onClick={toggleModal}>Remove</button>
            {
                showModal ? 
                <VerticallyCenteredModal header={"Confirmation"} onClose={toggleModal} format="small">
                    <div>Do you really want to remove node {label}?</div>
                    <button className="button-gray" onClick={onRemoveNodeInner}>Yes</button>
                    <button className="button-gray" onClick={toggleModal}>No</button>
                </VerticallyCenteredModal> : null
            }
        </div>
    )
}

export default Node;