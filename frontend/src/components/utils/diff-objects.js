// this arrow function create object that contains diffrence between obj1 and obj2
const diffObjects = (obj1, obj2) => {
    const result = {};
    
    if (Object.is(obj1, obj2)) {
   			return undefined;
    }

    if(typeof obj2 === "undefined") {
        return obj1;
    }
    
    if (!obj2 || typeof obj2 !== 'object') {
    		return obj2;
    }

    Object.keys(obj1 || {}).concat(Object.keys(obj2 || {})).forEach( key => {

        if(obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
		        result[key] = obj2[key];
        }

        if(typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {

        	const value = Array.isArray(obj1[key]) ? (
                obj1[key].length > obj2[key].length ?
                    obj1[key].map( (val, i) => diffObjects(val, obj2[key][i])) : 
                    obj2[key].map( (val, i) => diffObjects(val, obj1[key][i]))
            ) :   diffObjects(obj1[key], obj2[key]);

            if (typeof value !== 'undefined') {
            		result[key] = value;
            }
        }
    });
    return result;
};


export {
    diffObjects
};