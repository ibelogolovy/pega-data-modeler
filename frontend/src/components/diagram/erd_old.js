import React, { useRef, useEffect, useState} from "react";
import * as d3 from "d3";
import DagreGraph from 'dagre-d3-react';
import { renderToString } from 'react-dom/server';

import "./styles.css";

const nodeAsString = ({label, properties = [], customName}) => {
    
    return renderToString(
        <table className="erd-node">
            <th>{label} {customName ? " / "+ customName : null}</th>
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

    const erdRef = useRef(null);
    const [viewParams, setViewParams] = useState(null);

    const newNodes = data.nodes.map(( item, i ) => {
        return {
            id: item.id,
            labelType: "html",
            label: nodeAsString({ label: item.label, properties: item.properties, customName: item.customName})
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

    const onNodeClickInner = (e) => {
        onNodeClick(e.original.id);
    }

    useEffect(()=>{
        setViewParams({
            width: erdRef.current.clientWidth ,
            height: erdRef.current.clientHeight
        });
    }, [ erdRef ]); 


    return (
        <div className = "erd" ref={erdRef}>
            <div className="schema">
            <div className="light-tip">Scroll the diagram to view</div>
            {
                viewParams===null ? null :               
                    <DagreGraph
                        nodes={newNodes}
                        links={newLinks}
                        config={{
                            rankdir: 'TB',
                            align: 'DL',
                            ranker: 'tight-tree'
                        }}
                        width={ viewParams.width }
                        height={ viewParams.height }
                        animate={1000}
                        shape='rect'
                        fitBoundaries
                        zoomable
                        onNodeClick={onNodeClickInner}
                />
            }
            </div>
        </div>
    )
}

export default ERD;
