import React, { useEffect, useRef, useState } from 'react';

import { formDataER, addCoordinates } from '../utils/form-data-er';

import { getDistance, getAngleFromPoint } from '../utils/vectors';

import { getPegaName } from '../utils/pega-object';

import './case-model.css';

const CaseModel = ({ data }) => {

    const svgContainer = useRef(null);

    const [svgWidth, setSvgWidth] = useState(0);

    const smallGridWidth = svgWidth/5; // small grid for cell allocating
    const cellSize = smallGridWidth/10; // one cell in grid

    const blockWidth = cellSize * 9; // small block as 9 cells
    const blockHeight = cellSize * 2;
    const blockInterval = cellSize * 4; // interval between blocks

    const generateConnections = ( links, x, y, blockWidth, blockHeight, arr ) => {
        return Array.from(links).map(( value, i)=>{
            let currLink = arr.find(({ objClass }) => objClass === value );
            console.log(currLink);
            if(typeof currLink === "undefined") {
                return null;
            }

            let pathStartX = x + blockWidth/2;
            let pathStartY = y + blockHeight/2;
            let pathEndX = currLink.x + blockWidth/2;
            let pathEndY = currLink.y + blockHeight/2;

            let distance = getDistance({ X:pathStartX , Y:pathStartY }, {  X:pathEndX , Y: pathEndY});

            return (<g key={ i } >
                {/* <polygon fill="none" 
                    points={`63, 87, 70, 67, 77, 87`} stroke = "#A80036" strokeWidth= "1.0"/> */}
                <path  value={distance} marker-end='url(#arrow)' d={`M ${pathStartX},${pathStartY} L ${pathEndX},${pathEndY}`} fill="none"
                                                        stroke="#A80036" strokeWidth= "1.0"/>
                </g>);
        });
    }

    useEffect(()=> {
        setSvgWidth(svgContainer.current.clientWidth);
        console.log(addCoordinates(formDataER(data), 4, cellSize, blockWidth, blockInterval));

    }, [ data, svgContainer,blockWidth,blockInterval,cellSize ]);

    return (
        <div ref= { svgContainer } className="case-model" >
            {
                svgWidth===0 ? null :

                <svg width={ svgWidth } height="2600" xmlns="http://www.w3.org/2000/svg">

                    <defs>
                        <pattern id="smallGrid" width={ cellSize } height={ cellSize }  patternUnits="userSpaceOnUse">
                            <path d={`M ${ cellSize }  0 L 0 0 0 ${ cellSize }`} fill="none" stroke="#e1e1e1" strokeWidth="1"/>
                        </pattern>
                        <pattern id="grid" width={ cellSize } height={ smallGridWidth } patternUnits="userSpaceOnUse">
                            <rect width={ cellSize} height={ smallGridWidth } fill="url(#smallGrid)"/>
                            <path d={`M ${ cellSize } 0 L ${ cellSize } ${ smallGridWidth }`} fill="none" stroke="#e1e1e1" strokeWidth="1"/>
                        </pattern>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#A80036" />
                        </marker>
                    </defs>

                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {
                       addCoordinates(formDataER(data), 4, cellSize, blockWidth, blockInterval)
                            .map(({ objClass, linked, x, y }, i, arr) => {
                                return (
                                    <g id = { objClass } className = "group"  key = { i }>
                                        {
                                            generateConnections(linked, x, y, blockWidth, blockHeight, arr)
                                        }
                                    </g>
                                );
                            }) 
                    }
                    { 
                        addCoordinates(formDataER(data), 4, cellSize, blockWidth, blockInterval)
                            .map(({ objClass, objName, x, y }, i) => {
                                return (
                                        <g id = { objClass } className = "group"  key = { i }>
                                            <rect className = "block" height={ blockHeight } width={ blockWidth } x={ x } y={ y }/>

                                            <switch>
                                                <foreignObject x={ x+10 } y={ y } width={ blockWidth-20 } height={ blockHeight }>
                                                    <div className="obj-name"> { objName } </div>
                                                    <div className="obj-class"> { objClass } </div>
                                                </foreignObject>
                                                <text x={x+10} y={y}>Your SVG viewer cannot display html.</text>
                                            </switch>
                                        </g>
                                    );
                        })
                    }
                </svg>

            }
        </div>
    )
};

export default CaseModel;