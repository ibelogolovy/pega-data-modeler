import React from "react";
import * as d3 from "d3";
import DagreGraph from 'dagre-d3-react';
import { renderToString } from 'react-dom/server';

import pencilIcon from '../../images/pencil.png';


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


const ERD = ({ data }) => {

    const { name } = data;

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
            <span>Scroll the diagram to view</span>
            <div className ="schema-name"> {name} <img src={ pencilIcon } alt="edit"/></div>
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
                onNodeClick={e => console.log(e)}
                onRelationshipClick={e => console.log(e)}
            />
        </div>
    )
}

export default ERD;
