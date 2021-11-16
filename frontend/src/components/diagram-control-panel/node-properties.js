
import React from 'react';

import { pencilIcon, deleteIcon } from '../../constants/controlIcons';

const NodeProperties = ({ node, format = "normal", onPropertyEdit, onPropertyRemove, onPropertyAdd }) => {
    const { properties } = node;
    return (
        <div className="node-properties description-block with-edit">
            <h3 className="description-title">Node Properties</h3>
            <table className={format}>
                <tbody>
                    {
                        format === "wide" ? <tr>
                            <th>Name</th>
                            <th>Label</th>
                            <th>Class</th>
                            <th></th>
                            <th></th>
                        </tr> : null
                    }
                    {
                        properties.map((item, i) => {
                            const { name, customName, objClass } = item;
                            return (
                                <tr key={i} className="list-item">
                                    <td>{name}
                                        {
                                            customName && format === "normal" ? <span className="gray"> / {customName}</span> : null
                                        }
                                    </td>
                                    {
                                        format === "wide" ?
                                            <React.Fragment>
                                                <td>{customName}</td>
                                                <td>{objClass}</td>
                                            </React.Fragment>
                                            : null
                                    }
                                    <td>
                                        <img src={pencilIcon} alt="edit" onClick={onPropertyEdit(item, i)} />
                                        <img src={deleteIcon} alt="edit" onClick={onPropertyRemove(i)} />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <button className="button-gray" onClick={onPropertyAdd}>Add</button>
        </div>
    );
}

export default NodeProperties;