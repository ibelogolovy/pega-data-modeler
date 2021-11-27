import React, { useState } from 'react';

const NodeList = ({ nodes, onNodeSelect = () => { }, selectedNodeId = "", onNodeAdd=()=>{}, onBatchNodeRemove=()=>{} }) => {

    const [activeNode, setActiveNode] = useState(selectedNodeId);
    const [batch, updateBatch] = useState([]);
    const [batchMode, updateBachMode] = useState(false);

    const onBatchClick = () => {
        updateBachMode(true);
    }

    const onNodeSelectInner = (id) => () => {
        if(batchMode) {
            if(batch.includes(id)) {
                updateBatch(batch.filter(item => item !== id));
            } else {
                updateBatch([
                    ...batch,
                    id
                ]);
            }
        } else {
            setActiveNode(id);
            onNodeSelect(id);
        }
    }

    const onBatchRemove = () => {
        onBatchNodeRemove(batch);
        updateBachMode(false);
    }

    const onCancelBatch = () => {
        updateBatch([]);
        updateBachMode(false);
    }

    const getNodeClass = (id) => {
        let className = "list-item ";
        if(activeNode === id) {
            className += " selected"
        };

        if(batch.includes(id)) {
            className += " in-batch"
        };

        return className;
    }

    return (
        <div className="description-block node-list">
            <table>
                <tbody>
                    {
                        nodes.map(({ label, id, customName }, i) => (
                            <tr key={i} className={getNodeClass(id)} onClick={onNodeSelectInner(id)}>
                                <td>{i + 1}</td>
                                <td>{label}
                                    {
                                        customName ? <span className="gray"> / {customName}</span> : null
                                    }
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
            { batchMode ? <>
                    <button className="button-gray" onClick={onBatchRemove}>Remove selected</button>
                    <button className="button-gray" onClick={onCancelBatch}>Cancel</button>
                </> : <> 
                    <button className="button-gray" onClick={onNodeAdd}>Add</button>
                    <button className="button-gray" onClick={onBatchClick}>Remove Nodes</button> 
                </>}
        </div>
    )
}

export default NodeList;