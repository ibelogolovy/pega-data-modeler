import React, { useEffect, useRef, useState } from 'react';

import { formDataER, addCoordinates, filterByObjectClass } from '../utils/form-data-er';

import { generateConnections } from './generate-connections';

import { getPegaName } from '../utils/pega-object';

import FilterTagged from '../filter-tagged';

import './case-model.css';

const CaseModel = ({ data }) => {

    const svgContainer = useRef(null);

    const [svgStyle, setSvgStyle] = useState({ width: 0, height: 0 });
    const [svgData, setSvgData] = useState([]);
    const [filterTags, setFilterTags] = useState([{ name: null, id: null }]);
    const [help, setHelp] = useState({ x: 0, y: 0, show: false, class: null, pages: [] });

    const smallGridWidth = svgStyle.width / 5; // small grid for cell allocating
    const cellSize = smallGridWidth / 10; // one cell in grid

    const blockWidth = cellSize * 9; // small block as 9 cells
    const blockHeight = cellSize * 2;
    const blockInterval = cellSize * 4; // interval between blocks
    const blocksInRow = 4;
    const rowsCount = Math.ceil((svgData.length + 1) / blocksInRow);

    const setMouseHelp = ({ pageX, pageY }, content) => {
        if (typeof pageX === "undefined" && typeof pageY === "undefined")
            setHelp({ show: false });
        else
            setHelp({
                show: true, x: pageX + 10, y: pageY, class: content.objClass,
                pages: Array.from(content.objName), linked: Array.from(content.linked)
            });
    }

    const deleteFilterTag = (deletedId) => {
        setFilterTags(filterTags.filter(({ id }) => id !== deletedId));
    }

    const addFilterTag = (name, id) => {
        if (!filterTags.some(e => e.id === id && e.name === name))
            setFilterTags([...filterTags, { name, id }]);
    }

    useEffect(() => {
        setHelp({ show: false });
        setSvgStyle({ width: svgContainer.current.clientWidth, height: (rowsCount) * (blockHeight + blockInterval - cellSize) - cellSize });
        setSvgData(addCoordinates(filterByObjectClass(formDataER(data), filterTags[filterTags.length - 1].id), blocksInRow, cellSize, blockWidth, blockInterval, cellSize));
    }, [data, svgContainer, blockWidth, blockHeight, blockInterval, cellSize, filterTags, rowsCount]);

    return (
        <div ref={svgContainer} className="case-model" >
            <FilterTagged onClose={deleteFilterTag}
                onlyLastEditable={true}
                additionalInsruction="Click on block for additional filter applying">
                {filterTags}
            </FilterTagged>
            {
                svgStyle.width === 0 ? null :

                    <svg width={svgStyle.width} height={svgStyle.height} xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="smallGrid" width={cellSize} height={cellSize} patternUnits="userSpaceOnUse">
                                <path d={`M ${cellSize}  0 L 0 0 0 ${cellSize}`} fill="none" stroke="#e1e1e1" strokeWidth="1" />
                            </pattern>
                            <pattern id="grid" width={cellSize} height={smallGridWidth} patternUnits="userSpaceOnUse">
                                <rect width={cellSize} height={smallGridWidth} fill="url(#smallGrid)" />
                                <path d={`M ${cellSize} 0 L ${cellSize} ${smallGridWidth}`} fill="none" stroke="#e1e1e1" strokeWidth="1" />
                            </pattern>
                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="#A80036" />
                            </marker>
                        </defs>

                        <rect width="100%" height="100%" fill="url(#grid)" />
                        {
                            svgData.map(({ objClass, linked, x, y }, i, arr) => {
                                return (
                                    <g id={objClass} className="group" key={i}>
                                        {
                                            generateConnections(linked, x, y, blockWidth, blockHeight, arr, objClass)
                                        }
                                    </g>
                                );
                            })
                        }
                        {
                            svgData.map((value, i) => {
                                const { objClass, objName, x, y } = value;
                                const pegaName = Array.from(objName).length > 1 ? getPegaName("", Array.from(objName)[0]) + "..." : getPegaName("", Array.from(objName)[0]);
                                return (
                                    <g id={objClass} className="group" key={i}
                                        onMouseMove={(e) => setMouseHelp(e, value)}
                                        onMouseLeave={() => setMouseHelp({})}
                                        onClick={() => addFilterTag(pegaName, objClass)}>
                                        <rect className="block" height={blockHeight} width={blockWidth} x={x} y={y} />
                                        <switch>
                                            <foreignObject x={x + 10} y={y} width={blockWidth - 20} height={blockHeight}>
                                                <div className="model-block" >
                                                    <div className="obj-name"> {pegaName} </div>
                                                    <div className="obj-class"> {objClass} </div>
                                                </div>
                                            </foreignObject>
                                            <text x={x + 10} y={y}>Your SVG viewer cannot display html.</text>
                                        </switch>
                                    </g>
                                );
                            })
                        }
                    </svg>

            }
            {
                help.show ?
                    <div className="help" style={{ left: help.x + 'px', top: help.y + 'px' }}>
                        <div className="field">
                            <div className="name">Class: </div>
                            <div className="value">{help.class}</div>
                        </div>
                        <div className="field">
                            <div className="name">Page Names: </div>
                            <div className="value">{help.pages.map((value, i) => {
                                return <span key={i}>{i > 0 ? ", " + getPegaName("", value) : getPegaName("", value)}</span>;
                            })}</div>
                        </div>
                        <div className="field">
                            <div className="name">Linked:</div>
                            <div className="value">{help.linked.map((value, i) => {
                                return <span key={i}>{i > 0 ? ", " + value : value}</span>;
                            })}</div>
                        </div>

                    </div>
                    : null
            }
        </div>
    )
};

export default CaseModel;