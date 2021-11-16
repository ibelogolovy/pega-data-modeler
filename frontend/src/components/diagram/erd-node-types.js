
import React, { memo } from "react";
import { Handle } from 'react-flow-renderer';
// import { pencilIcon, deleteIcon } from '../../constants/controlIcons';


const erdNode = memo(({ data, isConnectable }) => {
    return (
        <React.Fragment>
            <table className="erd-node">
                <thead>
                    <tr>
                        <th>{data.label} {data.customName ? " / " + data.customName : null}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.properties.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <Handle
                type="target"
                position="top"
                style={{ background: '#555', height: '10px', width: '10px' }}
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position="bottom"
                style={{ background: '#555', height: '10px', width: '10px' }}
                isConnectable={isConnectable}
            />
        </React.Fragment>
    );
});

const nodeTypes = {
    erdNode: erdNode
};

export default nodeTypes;