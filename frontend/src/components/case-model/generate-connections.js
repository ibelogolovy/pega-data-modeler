import React from 'react';

import { getAngleFromPoint, getAngleByLegs } from '../utils/geometry';

const generateConnections = (links, x, y, blockWidth, blockHeight, arr, groupClass) => {
    return Array.from(links).map((value, i) => {
        let currLink = arr.find(({ objClass }) => objClass === value);

        if (typeof currLink === "undefined" || currLink.objClass === groupClass) {
            return null;
        }

        let pathStartX = x + blockWidth / 2;
        let pathStartY = y + blockHeight / 2;
        let pathEndX = currLink.x + blockWidth / 2;
        let pathEndY = currLink.y + blockHeight / 2;
        let arrowWidth = 10;
        let arrowHeight = 10;
        let angle = getAngleFromPoint({ X: pathEndX, Y: pathEndY }, { X: pathStartX, Y: pathStartY });

        // alha angle in rigth triangle (from center Y, to center X and top of rect)
        let aAngle = getAngleByLegs(blockHeight / 2, blockWidth / 2);

        let sectorAngle = angle % 90;
        let currentSector = Math.floor((angle) / 90);


        if (currentSector === 0) {
            if (sectorAngle <= aAngle) {
                pathEndX = currLink.x - arrowWidth;
                pathEndY = currLink.y + Math.tan(sectorAngle * Math.PI / 180) * blockWidth / 2;
            } else {
                pathEndX = currLink.x + Math.tan((90 - sectorAngle) * Math.PI / 180) * blockHeight / 2;
                pathEndY = currLink.y - arrowHeight;
            }
        } else if (currentSector === 1) {
            if (sectorAngle <= 90 - aAngle) {
                pathEndX = currLink.x + blockWidth / 2 + Math.tan((90 - sectorAngle) * Math.PI / 180) * blockHeight / 2;
                pathEndY = currLink.y - arrowHeight;
            } else {
                pathEndX = currLink.x + blockWidth + arrowWidth;
                pathEndY = currLink.y + blockHeight / 2 - Math.tan(sectorAngle * Math.PI / 180) * blockWidth / 2;
            }
        } else if (currentSector === 2) {
            if (sectorAngle <= aAngle) {
                pathEndX = currLink.x + blockWidth + arrowWidth;
                pathEndY = currLink.y + blockHeight / 2 + Math.tan(sectorAngle * Math.PI / 180) * blockWidth / 2;
            } else {
                pathEndX = currLink.x + blockWidth / 2 + Math.tan((90 - sectorAngle) * Math.PI / 180) * blockHeight / 2;
                pathEndY = currLink.y + blockHeight + arrowHeight;
            }
        } else if (currentSector === 3) {
            if (sectorAngle <= 90 - aAngle && sectorAngle !== 0) {
                pathEndX = currLink.x + blockWidth / 2 - Math.tan((90 - sectorAngle) * Math.PI / 180) * blockHeight / 2;
                pathEndY = currLink.y + blockHeight + arrowHeight;
            } else if (sectorAngle === 0) {
                pathEndX = currLink.x + blockWidth / 2;
                pathEndY = currLink.y + blockHeight + arrowHeight;
            }
            else {
                pathEndX = currLink.x - arrowWidth;
                pathEndY = currLink.y + blockHeight / 2 + Math.tan(sectorAngle * Math.PI / 180) * blockWidth / 2;
            }
        }

        return (
            <path sector={currentSector} angl={sectorAngle} key={i} markerEnd='url(#arrow)' d={`M ${pathStartX},${pathStartY} L ${pathEndX},${pathEndY}`} fill="none"
                stroke="#A80036" strokeWidth="1.0" />
        );
    });
}

export {
    generateConnections
};