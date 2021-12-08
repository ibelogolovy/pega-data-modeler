import React, { useState, useEffect } from "react";

import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    // eslint-disable-next-line
    removeElements,
    isNode,
    ArrowHeadType,
    Background,
    Controls,
    MiniMap,
    isEdge
} from 'react-flow-renderer';
import dagre from 'dagre';
import nodeTypes from './erd-node-types';

import "./styles.css";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 200;
const nodeHeight = 5;
const snapGrid = [20, 20];
const position = { x: 0, y: 0 };
const edgeType = 'default';
const edgeStrokeWidth = 3;
const edgeSimpleStyle = { strokeWidth: edgeStrokeWidth };
const edgeOutputStyle = { strokeWidth: edgeStrokeWidth, stroke: '#EF3124'};
const edgeInputStyle = { strokeWidth: edgeStrokeWidth, stroke: 'black'};

const getLayoutedElements = (elements, direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    elements.forEach((el) => {
        if (isNode(el)) {
            dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight + el.data.properties.length * 45 });
        } else {
            dagreGraph.setEdge(el.source, el.target);
        }
    });

    dagre.layout(dagreGraph);

    return elements.map((el) => {
        if (isNode(el)) {
            const nodeWithPosition = dagreGraph.node(el.id);
            el.targetPosition = isHorizontal ? 'left' : 'top';
            el.sourcePosition = isHorizontal ? 'right' : 'bottom';

            // unfortunately we need this little hack to pass a slightly different position
            // to notify react flow about the change. Moreover we are shifting the dagre node position
            // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
            el.position = {
                x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
                y: nodeWithPosition.y - nodeHeight / 2,
            };
            
        }

        return el;
    });
};


const getProcessedData = ({nodes, links, positions}) => {
    return [...nodes.map(item => {
        const existingPositions = positions.filter(pos => pos.nodeId === item.id);
        const existingPosition = existingPositions.length === 1 ? existingPositions[0] : position; 
        return {
            id: item.id,
            data: { ...item },
            position: existingPosition,
            type: 'erdNode'
        }
    }), ...links.map((item, i) => {
        return {
            id: `edge-${i}`,
            source: item.source, target: item.target, type: edgeType, animated: false,
            arrowHeadType: ArrowHeadType.ArrowClosed,
            style: edgeSimpleStyle
        }
    })];
};


const ERD = ({ data, onNodeClick=()=>{}, onNodeDelete=()=>{}, onEdgeDelete=()=>{}, onNodeDrag=()=>{}, updatePositions=()=>{}}) => {

    // if schema data has not positions for building diagram then special layoting function is called. Otherwise, positions would be used
    const layoutedElements = data.positions && data.positions.length > 0 ? getProcessedData(data) : getLayoutedElements(getProcessedData(data));
    const [elements, setElements] = useState(layoutedElements);

    useEffect(() => {
        const refreshElements = data.positions && data.positions.length > 0 ? getProcessedData(data) : getLayoutedElements(getProcessedData(data));
        setElements(refreshElements);
        // eslint-disable-next-line
      }, [data.links, data.nodes]);

    const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

    const onConnect = (params) =>
        setElements((els) =>
            addEdge({ ...params, type: edgeType, animated: true, style: edgeOutputStyle}, els)
        );

    const onElementsRemove = (elementsToRemove) => {
        // setElements((els) => removeElements(elementsToRemove, els));
    };

    const onSelectionChange = (selected) => {
        if(selected && isNode(selected[0])) {
            onNodeClick(selected[0].id);
            setElements([
                ...elements.filter(item => isNode(item)),
                ...elements.filter(item => isEdge(item) && item.source!==selected[0].id && item.target!==selected[0].id)
                    .map(item => { return {...item, animated: false, style: edgeSimpleStyle}}),
                ...elements.filter(item => isEdge(item) && item.source===selected[0].id)
                    .map(item => { return {...item, animated: true, style: edgeOutputStyle}}),
                ...elements.filter(item => isEdge(item) && item.target===selected[0].id)
                    .map(item => { return {...item, animated: true, style: edgeInputStyle}})
            ]);
        }
    };

    const onNodeDragStop = (event, node) => {
        onNodeDrag(node);
    };

    // first time we update all positions in store (after creation it will be unnecessarily)
    if(data.positions && data.positions.length === 0) {
        updatePositions(elements.filter(el=> isNode(el)).map(el => {
            return {
                nodeId: el.id,
                ...el.position
            }
        }));
    };

    return (
        <div className="erd">
            <div className="schema">
                <div className="light-tip">Scroll the diagram to view</div>
                <ReactFlowProvider>
                    <ReactFlow
                        elements={elements}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        onLoad={onLoad}
                        onElementsRemove={onElementsRemove}
                        snapToGrid
                        snapGrid={snapGrid}
                        minZoom={0.1}
                        onSelectionChange = {onSelectionChange}
                        onNodeDragStop = {onNodeDragStop} 
                        nodesConnectable = {false}
                        nodesDraggable = {true}
                    >
                        <MiniMap
                            nodeStrokeColor={(n) => {
                                if (n.type === 'erdNode') return '#EF3124';
                            }}
                            nodeColor={(n) => {
                                if (n.type === 'erdNode') return '#EF3124';
                                return '#fff';
                            }}
                        />
                        <Controls />
                        <Background />
                    </ReactFlow>
                </ReactFlowProvider>
            </div>
        </div>
    )
}

export default ERD;
