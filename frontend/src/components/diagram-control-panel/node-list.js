import React, { useState } from 'react';

const NodeList = ({ nodes, onNodeSelect = () => { }, selectedNodeId = "", onNodeAdd=()=>{} }) => {

    const [activeNode, setActiveNode] = useState(selectedNodeId);

    const onNodeSelectInner = (id) => () => {
        setActiveNode(id);
        onNodeSelect(id);
    }

    return (
        <div className="description-block node-list">
            <table>
                <tbody>
                    {
                        nodes.map(({ label, id, customName }, i) => (
                            <tr key={i} className={activeNode === id ? "list-item selected" : "list-item"} onClick={onNodeSelectInner(id)}>
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
            <button className="button-gray" onClick={onNodeAdd}>Add</button>
        </div>
    )
}

export default NodeList;