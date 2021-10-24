import React, { useState, useRef } from "react";
import { Canvas, Node } from 'reaflow';
import ControlButtons from './control-buttons';
import { TransformWrapper, TransformComponent } from 'yarn ';

import "./styles.css";


const ERD = ({ data }) => {

    const [ schemaData, updateSchemaData] = useState(data);

    const ref = useRef(null);

    const newNodes = schemaData.nodes.map(( item, i ) => {
        return {
            id: item.id,
            text: "",
            width: 200,
            height: 400,
            data: {
                label: item.label, 
                properties: item.properties
            }
        };
    });

    const newLinks = schemaData.links.map((item, i) => {
        return {
            id: i,
            from: item.source,
            to: item.target
        };
    });

    const updateName = (newName) => {
        updateSchemaData({
            ...schemaData,
            name: newName
        })
    };

    return (
        <div className = "erd">
            <div className="schema">
            <span>Scroll the diagram to view</span>
            <TransformWrapper
                wheel={{step: 30}}
                options={{
                    maxScale: 4,
                    limitToBounds: true,
                }}
            >
                <TransformComponent>
                    <Canvas
                            ref={ref}
                            zoomable={false}
                            maxWidth={1400}
                            nodes={newNodes}
                            edges={newLinks}
                            fit={true}
                            node={
                                <Node>
                                {event => (
                                    <foreignObject width={event.node.width} height={event.node.height}  x={0} y={0}>
                                        <table className="erd-node" style={{ padding: 10, textAlign: 'center' }}>
                                        <tbody>
                                            <tr>
                                                <th>{event.node.data.label}</th>
                                            </tr>
                                            {
                                                event.node.data.properties.map(( item, i ) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{ item.name }</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                            </tbody>
                                        </table>
                                            {/* <GetNode label = {event.node.data.label} properties = {event.node.data.properties} /> */}
                                    </foreignObject>
                                )}
                                </Node>
                            }
                    />
                </TransformComponent>
            </TransformWrapper>
            </div>
            <div className="control-buttons">
                <ControlButtons data={ schemaData } updateName={ updateName } />
            </div>
        </div>
    )
}

export default ERD;
