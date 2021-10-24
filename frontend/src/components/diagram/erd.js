import React from "react";
import * as d3 from "d3";
import DagreGraph from 'dagre-d3-react';
import { renderToString } from 'react-dom/server';

import "./styles.css";

const nodeAsString = ({label, properties = []}) => {

    return renderToString(
        <table className="erd-node">
            <th>{label}</th>
            {
                properties.map(( item, i ) => {
                    return (
                        <tr key={i}>
                            <td>{ item.name }</td>
                        </tr>
                    );
                })
            }
        </table>);

};


const ERD = ({ data, onNodeClick }) => {


    const newNodes = data.nodes.map(( item, i ) => {
        return {
            id: item.id,
            labelType: "html",
            label: nodeAsString({ label: item.label, properties: item.properties})
        };
    });

    const newLinks = data.links.map((item, i) => {
        return {
            key: i,
            ...item,
            config: {
                curve: d3.curveBasis
            }
        };
    });


    return (
        <div className = "erd">
            <div className="schema">
            <span>Scroll the diagram to view</span>
                <DagreGraph
                    nodes={newNodes}
                    links={newLinks}
                    config={{
                        rankdir: 'TB',
                        align: 'DL',
                        ranker: 'tight-tree'
                    }}
                    width='100%'
                    height='1400'
                    animate={1000}
                    shape='rect'
                    fitBoundaries
                    zoomable
                    onNodeClick={e => onNodeClick(e.original.id)}
                />
            </div>
        </div>
    )
}

export default ERD;
