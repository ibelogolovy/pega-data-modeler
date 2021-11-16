
// form data from pega api in new form where every object is unique and not embedded
const formPegaClassArr = (data = {}, parentName = "", parentLinked = "", arrayData = []) => {

    return Object.keys(data).reduce((accumulator, value) => {

        const isArray = Array.isArray(data[value]);
        const isObject = typeof data[value] === 'object';
        // default parent linked - needs for pega value and page group
        const defaultParentLinked = data[value] !== undefined && data[value].hasOwnProperty("pxObjClass") ? "" : data["pxObjClass"];

        if (isArray) {
            return [
                ...formPegaClassArr(data[value], value, data["pxObjClass"], accumulator)
            ];
        }

        if (!isObject) {
            return accumulator;
        }

        const objClass = data[value]["pxObjClass"];
        const linked = parentLinked === "" ? data["pxObjClass"] : parentLinked;
        const objName = parentName === "" ? value : parentName;

        const existIdx = accumulator.findIndex((currValue) => {
            return currValue.objClass === objClass;
        });

        return Number(existIdx) >= 0 ? [
            ...formPegaClassArr(data[value], "", defaultParentLinked, [
                ...accumulator.slice(0, existIdx),
                {
                    ...accumulator[existIdx],
                    objName: new Set([...accumulator[existIdx].objName, objName]),
                    objClass,
                    linked: new Set([...accumulator[existIdx].linked, linked])
                },
                ...accumulator.slice(existIdx + 1)
            ])
        ] : [
            ...formPegaClassArr(data[value], "", defaultParentLinked, [
                ...accumulator,
                {
                    objName: new Set([objName]),
                    objClass,
                    linked: new Set([linked])
                }
            ])
        ];

    }, arrayData);

};

// links count for object sortings
const countLinks = (data) => {
    return data.map((value, i) => {
        return {
            ...value,
            linkCount: data.filter((x) => x.linked.has(value.objClass)).length
        }
    });
};

// remove objects with undefined objClass
const filterEmptyObjClass = (data) => {
    return data.filter((value) => typeof value.objClass !== "undefined");
}
const sortByLinkCount = (data) => {
    return data.sort((a, b) => {
        if (a.linkCount < b.linkCount) return 1;
        if (a.linkCount > b.linkCount) return -1;
        return 0;
    });
}

// set final data
const formDataER = (data = {}) => {
    return sortByLinkCount(countLinks(filterEmptyObjClass(formPegaClassArr(data))));
}

// add coordinates for svg 
const addCoordinates = (data, elementsInRow, cellSize, blockWidth, blockInterval, indent) => {
    return data.reduce((accumulator, value, i, array) => {
        let idx = i % elementsInRow;


        let x = idx === 0 ? indent :
            idx === 1 ? idx * (blockWidth + cellSize) + blockInterval :
                idx * (blockWidth + blockInterval) + indent;
        let y = indent + Math.floor(i / elementsInRow) * cellSize * 5;

        return [...accumulator, { ...value, x: x, y: y }]

    }, []);
}


const filterByObjectClass = (data, objectClass) => {
    if (objectClass !== null || typeof objectClass === "undefined") {
        return data.filter(({ objClass, linked }) => {
            return objClass === objectClass || Array.from(linked).includes(objectClass);
        });
    } else return data;
};



export {
    formDataER,
    filterByObjectClass,
    addCoordinates
};