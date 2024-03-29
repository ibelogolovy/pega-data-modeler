import React, { useState, useEffect } from "react";
import Select from 'react-select';

import { VerticallyCenteredModal } from '../modal-dialog';

import { pencilIcon } from '../../constants/controlIcons';

import NodeList from './node-list';
import Node from './node';
import NodeProperties from './node-properties';
import NodeLinks from './node-links';

import "./diagram-control-panel.css";

const linkTypes = [
    {
        label: "FROM",
        value: 1
    },
    {
        label: "TO",
        value: 2
    }
];

const propertyTypes = [
    {label: "ARRAY", value: "ARRAY"},
    {label: "BINARY", value: "BINARY"},
    {label: "BOOLEAN", value: "BOOLEAN"},
    {label: "MISSING", value: "MISSING"},
    {label: "NULL", value: "NULL"},
    {label: "NUMBER", value: "NUMBER"},
    {label: "OBJECT", value: "OBJECT"},
    {label: "POJO", value: "POJO"},
    {label: "STRING", value: "STRING"}
];

const DiagramControlPanel = ({ schema = { id: null, nodes: [], links: [], positions: []}, selectedNode, onUpdateSchema = () => { }, onSaveSchema = () => { }, onDeleteSchema = () => { }, format = "normal",onNodeClick =()=>{} }) => {

    const { name, nodes, links } = schema;

    const [showModal, setShowModal] = useState(false);
    const [modalField, setModalField] = useState(false);
    const [modalParam, setModalParam] = useState({});

    const [showPropertyModal, setShowPropertyModal] = useState(false);
    const [showNodeModal, setShowNodeModal] = useState(false);
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    // const [showConfirmModal, setShowConfirmModal] = useState(false);

    const [activeNode, setActiveNode] = useState(selectedNode);

    const selectedNodeId = activeNode ? activeNode.node.id : "";

    useEffect(() => {
        setActiveNode(selectedNode);
    }, [selectedNode]);

    const onModalClose = () => {
        setShowModal(false);
        setShowPropertyModal(false);
        setShowLinkModal(false);
        setShowNodeModal(false);
        setModalParam({});
    };

    const showModalWithOneField = (fieldName, initialfieldValue) => (e) => {
        setModalParam({ value: initialfieldValue });
        setModalField(fieldName);
        setShowModal(true);
    };

    const showPropertyModalDialog = (propertyObj, idx) => (e) => {
        setModalParam({
            ...propertyObj,
            idx: idx
        });
        setModalField(propertyObj.name);
        setShowPropertyModal(true);
    };

    const showNodeModalDialog = (nodeObj) => (e) => {
        setModalParam(nodeObj);
        setModalField("new");
        setShowNodeModal(true);
    };

    const showLinkModalDialog = (linkObj, idx) => (e) => {
        setModalParam({
            idx: idx,
            value: linkObj.source === selectedNodeId ? linkObj.target : linkObj.source,
            relation: linkObj.source === selectedNodeId ? linkTypes[1] : linkTypes[0]
        });
        // setModalField(linkObj.objClass);
        setShowLinkModal(true);
    };

    const updateActiveNode = (newNodeObj) => {
        const nodeIdx = nodes.findIndex(item => item.id === selectedNodeId);
        onUpdateSchema({
            ...schema,
            nodes: [
                ...nodes.slice(0, nodeIdx),
                newNodeObj.node,
                ...nodes.slice(nodeIdx + 1)
            ],
            links: [
                ...newNodeObj.links,
                ...schema.links.filter(item => item.source !== selectedNodeId && item.target !== selectedNodeId)
            ]
        });
        setActiveNode(newNodeObj);
    };

    const onRemoveNode = (idx) => {
        const nodeIdx = idx ? idx : nodes.findIndex(item => item.id === selectedNodeId);
        onUpdateSchema({
            ...schema,
            nodes: [
                ...nodes.slice(0, nodeIdx),
                ...nodes.slice(nodeIdx + 1)
            ],
            links: links.filter((item) => item.source !== selectedNodeId && item.target !== selectedNodeId),
            positions: schema.positions.filter(item => item.nodeId !== selectedNodeId)
        });
        setActiveNode(null);
    };

    const onBatchNodeRemove = (idxs=[]) => {
        onUpdateSchema({
            ...schema,
            nodes: nodes.filter(item => !idxs.includes(item.id)),
            links: links.filter(item => !idxs.includes(item.source) && !idxs.includes(item.target)),
            positions: schema.positions.filter(item => !idxs.includes(item.nodeId))
        });
    };

    const onLinkRemove = (idx) => (e) => {
        updateActiveNode({
            ...activeNode,
            links: [
                ...activeNode.links.slice(0, idx),
                ...activeNode.links.slice(idx + 1)
            ]
        });
    };

    const onModalWithOneFieldSubmit = () => {
        if (modalField === "node name") {
            updateActiveNode({
                ...activeNode,
                node: {
                    ...activeNode.node,
                    label: modalParam.value
                }
            });
        }
        else if (modalField === "node class") {
            updateActiveNode({
                ...activeNode,
                node: {
                    ...activeNode.node,
                    objClass: modalParam.value
                }
            });
        }
        else if (modalField === "node database table") {
            updateActiveNode({
                ...activeNode,
                node: {
                    ...activeNode.node,
                    tableName: modalParam.value
                }
            });
        } else if (modalField === "node label") {
            updateActiveNode({
                ...activeNode,
                node: {
                    ...activeNode.node,
                    customName: modalParam.value
                }
            });
        } else {
            const newObj = {};
            newObj[modalField] = modalParam.value;
            onUpdateSchema({
                ...schema,
                ...newObj
            });
        }
        onModalClose();
    };

    const onPropertyModalSubmit = () => {
        if (Number(modalParam.idx) >= 0) {
            updateActiveNode({
                ...activeNode,
                node: {
                    ...activeNode.node,
                    properties: [
                        ...activeNode.node.properties.slice(0, modalParam.idx),
                        modalParam,
                        ...activeNode.node.properties.slice(modalParam.idx + 1)
                    ]
                }
            });
        } else {
            updateActiveNode({
                ...activeNode,
                node: {
                    ...activeNode.node,
                    properties: [
                        ...activeNode.node.properties,
                        modalParam,
                    ]
                }
            });
        };
        onModalClose();
    };

    const onPropertyRemove = (idx) => (e) => {
        updateActiveNode({
            ...activeNode,
            node: {
                ...activeNode.node,
                properties: [
                    ...activeNode.node.properties.slice(0, idx),
                    ...activeNode.node.properties.slice(idx + 1)
                ]
            }
        });
    };

    const onPropertyAdd = () => {
        const maxPropId = activeNode.node.properties.reduce((accumulator, currentValue) => {
            if (accumulator < Number(currentValue.id)) {
                return Number(currentValue.id);
            }
            return accumulator;
        }, 0);
        const newProp = {
            id: maxPropId + 1,
            name: ""
        };
        showPropertyModalDialog(newProp)();
    };

    const onLinkAdd = () => {
        const newLink = {
            target: selectedNodeId,
            source: selectedNodeId
        };
        showLinkModalDialog(newLink)();
    };

    const onNodeAdd = () => {
        const maxNodeId = nodes.reduce((prev,curr) =>  Number(prev) <= Number(curr.id) ? Number(curr.id)+1 : Number(prev), 0 );
        const newNode= {
            id: maxNodeId.toString(),
            customName: null,
            label: null,
            objClass: null,
            tableName: null,
            properties: []
        };
        showNodeModalDialog(newNode)();
    };

    const onLinkModalSubmit = () => {
        const linkIdx = modalParam.idx;
        const newLink = {
            source: modalParam.relation.value === 1 ? modalParam.value : selectedNodeId,
            target: modalParam.relation.value === 2 ? modalParam.value : selectedNodeId
        };
        const alreadyInLinks = activeNode.links.filter(link => link.target === newLink.target && link.source === newLink.source).length > 0;
        if (Number(linkIdx) >= 0 && !alreadyInLinks) {
            updateActiveNode({
                ...activeNode,
                links: [
                    ...activeNode.links.slice(0, linkIdx),
                    newLink,
                    ...activeNode.links.slice(linkIdx + 1)
                ]
            });
        } else if (!alreadyInLinks) {
            updateActiveNode({
                ...activeNode,
                links: [
                    ...activeNode.links,
                    newLink
                ]
            });
        };
        onModalClose();
    };

    const onNodeModalSubmit = () => {
        if (modalParam.id) {
            onUpdateSchema({
                ...schema,
                nodes: [
                    ...schema.nodes,
                    modalParam
                ]
            });
        };
        onModalClose();
    };

    const getNodeById = (id) => {
        const result = nodes.filter((node) => node.id === id);
        if (result.length > 0) {
            return result[0];
        }
        return null;
    };

    const onCloseNode = () => {
        setActiveNode(null);
    };

    const onNodeSelect = (id) => {
        const selectedNode = nodes.filter((node) => node.id === id)[0];
        const selectedLinks = links.filter((item) => item.source === id || item.target === id)
        setActiveNode({ node: selectedNode, links: selectedLinks });
    };


    const onRemoveSchema = () => {
        setShowRemoveModal(false);
        onDeleteSchema(schema.id);
    };

    const toggleRemoveModal = () => {
        setShowRemoveModal(!showRemoveModal);
    };

    return (
        <div className={format === "wide" ? "diagram-control-buttons wide" : "diagram-control-buttons"}>
            <div className="column">
                <div className="schema-description description-block">
                    <h3 className="description-title">Schema</h3>
                    <div className="row" ><div className="field">Name:</div> <div className="value">{name}</div> <img src={pencilIcon} alt="edit" onClick={showModalWithOneField("name", name)} /></div>
                    <button className="button-gray" onClick={onSaveSchema}>Save</button>
                    {
                        schema.id ?
                            <button className="button-gray" onClick={toggleRemoveModal}>Remove</button> : null
                    }
                </div>
                {!activeNode || format === "wide" ?
                    <NodeList nodes={nodes}
                        onNodeSelect={onNodeSelect}
                        selectedNodeId={selectedNodeId}
                        onNodeAdd={onNodeAdd} 
                        onBatchNodeRemove = {onBatchNodeRemove} /> : null
                }
            </div>
            <div className="column">
                {format === "normal" && activeNode ?
                    <Node node={activeNode.node}
                        onCloseNode={onCloseNode}
                        onEditField={showModalWithOneField}
                        onRemoveNode={onRemoveNode} /> : null
                }

                {activeNode ?
                    <NodeProperties node={activeNode.node}
                        format={format}
                        onPropertyEdit={showPropertyModalDialog}
                        onPropertyRemove={onPropertyRemove}
                        onPropertyAdd={onPropertyAdd} /> : null
                }

                {format === "normal" && activeNode ?
                    <NodeLinks nodes={nodes}
                        links={activeNode.links}
                        currentNodeId={selectedNodeId}
                        linkTypes={linkTypes}
                        onLinkEdit={showLinkModalDialog}
                        onLinkRemove={onLinkRemove}
                        onLinkAdd={onLinkAdd}
                        format={format} /> : null
                }
            </div>
            <div className="column">
                {format === "wide" && activeNode ?
                    <React.Fragment>
                        <Node node={activeNode.node}
                            onCloseNode={onCloseNode}
                            onEditField={showModalWithOneField}
                            onRemoveNode={onRemoveNode} />
                        <NodeLinks nodes={nodes}
                            links={activeNode.links}
                            currentNodeId={selectedNodeId}
                            linkTypes={linkTypes}
                            onLinkEdit={showLinkModalDialog}
                            onLinkRemove={onLinkRemove}
                            onLinkAdd={onLinkAdd}
                            format={format} />
                    </React.Fragment>
                    : null
                }
            </div>
            {showModal ?
                <VerticallyCenteredModal header={"Change " + modalField} onClose={onModalClose}>
                    <input type="text" name="newName" value={modalParam.value || ""} onChange={e => setModalParam({ value: e.target.value })} />
                    <button className="button-gray" onClick={onModalWithOneFieldSubmit}>Save</button>
                </VerticallyCenteredModal> : null
            }

            {showNodeModal ?
                <VerticallyCenteredModal header={"New node"} onClose={onModalClose}>
                    <label htmlFor="label">Label: <input type="text" name="customName" value={modalParam.label || ""} onChange={e => setModalParam({ ...modalParam, label: e.target.value })} /></label>
                    <label htmlFor="objClass">Class: <input type="text" name="objClass" value={modalParam.objClass || ""} onChange={e => setModalParam({ ...modalParam, objClass: e.target.value })} /></label>
                    <button className="button-gray" onClick={onNodeModalSubmit}>Save</button>
                </VerticallyCenteredModal> : null
            }

            {showPropertyModal ?
                <VerticallyCenteredModal header={"Edit property " + modalField} onClose={onModalClose}>
                    <label htmlFor="name">Name: <input type="text" name="name" value={modalParam.name || ""} onChange={e => setModalParam({ ...modalParam, name: e.target.value })} /></label>
                    <label htmlFor="label">Label: <input type="text" name="label" value={modalParam.customName || ""} onChange={e => setModalParam({ ...modalParam, customName: e.target.value })} /></label>
                    <label htmlFor="type">Type:
                    <Select
                            name="type"
                            options={propertyTypes}
                            defaultValue={propertyTypes.find(item => item.value === modalParam.type)}
                            onChange={option => setModalParam({ ...modalParam, type: option.value })}
                            isSearchable={false} />
                    </label>
                    <label htmlFor="description">Description: <textarea type="text" name="description" value={modalParam.description || ""} onChange={e => setModalParam({ ...modalParam, description: e.target.value })} /></label>
                    <button className="button-gray" onClick={onPropertyModalSubmit}>Save</button>
                </VerticallyCenteredModal> : null
            }

            {showLinkModal ?
                <VerticallyCenteredModal header={"Edit link of " + activeNode.node.label} onClose={onModalClose}>
                    <label htmlFor="relationType">Relation to this node:
                        <Select
                            name="relationType"
                            options={linkTypes}
                            defaultValue={modalParam.relation}
                            onChange={option => setModalParam({ ...modalParam, relation: option })} />
                    </label>
                    <label htmlFor="relationNode">Node:
                        <Select
                            name="relationNode"
                            options={nodes}
                            // isSearchable
                            pageSize={10}
                            defaultValue={getNodeById(modalParam.value)}
                            getOptionLabel={(option) => `${option['label']} ${option['customName'] ? " / " + option['customName'] : ""}`}
                            getOptionValue={(option) => `${option['id']}`}
                            onChange={(option) => option && setModalParam({ ...modalParam, value: option.id })} />
                    </label>
                    <button className="button-gray" onClick={onLinkModalSubmit}>Save</button>
                </VerticallyCenteredModal> : null
            }

            {
                showRemoveModal ? 
                <VerticallyCenteredModal header={"Confirmation"} onClose={toggleRemoveModal} format="small">
                    <div>Do you really want to remove schema {name}?</div>
                    <button className="button-gray" onClick={onRemoveSchema}>Yes</button>
                    <button className="button-gray" onClick={toggleRemoveModal}>No</button>
                </VerticallyCenteredModal> : null
            }

        </div>
    )
}

export default DiagramControlPanel;
