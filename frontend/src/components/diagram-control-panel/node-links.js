
import React from 'react';

import { pencilIcon, deleteIcon } from '../../constants/controlIcons';

const NodeLinks = ({ nodes, links, currentNodeId, onLinkEdit, linkTypes, onLinkRemove, onLinkAdd, format = "normal" }) => {
    return (
        <div className="node-links description-block with-edit">
            <h3 className="description-title">Node Links</h3>
            <table className={format}>
                <tbody>
                    {
                        format === "wide" ? <tr>
                            <th>Rel.</th>
                            <th>Node</th>
                            <th>Class</th>
                            <th></th>
                        </tr> : null
                    }
                    {
                        links.map((link, i) => {
                            const { source, target } = link;
                            const nodeObj = currentNodeId === source ? nodes.filter((node) => node.id === target)[0]
                                : nodes.filter((node) => node.id === source)[0];
                            const relLabel = currentNodeId === source ? linkTypes[1].label : linkTypes[0].label;
                            return (
                                <tr key={i} className="list-item">
                                    <td>{relLabel}</td>
                                    <td>{nodeObj.label}
                                        {
                                            nodeObj.customName ? <span className="gray"> / {nodeObj.customName}</span> : null
                                        }
                                    </td>
                                    <td>{nodeObj.objClass}</td>
                                    <td>
                                        <img src={pencilIcon} alt="edit" onClick={onLinkEdit(link, i)} />
                                        <img src={deleteIcon} alt="edit" onClick={onLinkRemove(i)} />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <button className="button-gray" onClick={onLinkAdd}>Add</button>
        </div>
    )
}

export default NodeLinks;