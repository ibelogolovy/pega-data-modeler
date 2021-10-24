import React, { useState } from "react";
import { VerticallyCenteredModal } from '../modal-dialog';

import pencilIcon from '../../images/pencil.png';

import "./styles.css";

const EditableNodeProperties = ({node}) => {
    const { properties } = node;
    return (
        <div className="node-properties description-block">
            <h3 className="description-title">Node Properties</h3>
            <table>
                <tbody>
                {
                    properties.map(( {name, customName=""}, i ) => {
                        return (
                            <tr key={i}>
                                <td>{ name }
                                    {
                                        customName === "" ? null : <span>{ customName }</span>
                                    }</td>
                                <td><img src={ pencilIcon } alt="edit"/></td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

const EditableNode = ({node}) => {
    const { label } = node;
    return (
        <div className="description-block">
            <h3 className="description-title">Node</h3>
                <div>Name: {label} <img src={ pencilIcon } alt="edit"/> </div> 
                <button className="button-gray">Add</button>
                <button className="button-gray">Remove</button>
        </div>
    )
}

const NodeList = ({nodes}) => {
    console.log(nodes);
    return (
        <div className="description-block">
            {
                nodes.map(({label}, i) =>  (
                        <div key={i}>
                            { label }
                        </div>
                    )
                )
            }
        </div>
    )
}


const ControlButtons = ({ shemaName, selectedNode, updateName, nodes }) => {

    const [ showModal, setShowModal] = useState(false);
    const [ newName, setNewName] = useState(shemaName);

    const onModalClose = () => {
        setShowModal(false);
    }

    const onModalSubmit = () => {
        setShowModal(false);
        updateName(newName);
    }

    return (
        <div className = "control-buttons">
            <div className ="schema-description description-block"> 
                <h3 className="description-title">Schema</h3>
                <div className ="schema-name" >Name: {shemaName} <img src={ pencilIcon } alt="edit" onClick = {(e)=>setShowModal(!showModal)}/></div>
                <button className="button-gray">Save</button>
                <button className="button-gray">Remove</button>
            </div>

            { showModal ? 
                <VerticallyCenteredModal header="Change Schema Name" onClose = { onModalClose }>
                    <input type="text" name="newName" value={newName || ""} onChange={e => setNewName(e.target.value)} />
                    <button className="button-gray" onClick={ onModalSubmit }>Save</button>
                </VerticallyCenteredModal> : null }
            { selectedNode ? 
                    <EditableNode node = { selectedNode.node[0] } /> : <NodeList nodes = {nodes}/>
            }
            { selectedNode ? 
                    <EditableNodeProperties node = { selectedNode.node[0] } /> : null
            }

            {selectedNode ? 
            null
               
            :null

            }
        </div>
    )
}

export default ControlButtons;
