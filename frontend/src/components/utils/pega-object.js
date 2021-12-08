import { addToObject } from './objects';

/* translate api name (or other page names) into pega name 
   (in addition to that add prefix if it gotten) */
const getPegaName = (prefix, name) => {
    if (name === "content") {
        name = "pyWorkPage"
    }
    // if has prefix - it is page list of page group item
    if (typeof prefix === "string" && prefix !== "") {
        name = Number(name) + 1;
        name = prefix + '(' + name + ')';
    }

    return name;
}

/* Return parent node from object structure
   by pega reference */
const getParentPageName = (ref) => {
    const regex = /[(]\d+[)]/ig;
    let parts = ref.replace(regex,"").split('.');
    return parts.length > 1 ? parts[parts.length - 2] : parts[parts.length - 1];
}

/* form pega reference array from json object */
const formReferenceList = (obj, reference = "", result = []) => {
    Object.keys(obj || {}).forEach(key => {

        const newRef = reference === "" ? getPegaName("", key) : reference + "." + getPegaName("", key);

        if (typeof obj[key] !== 'object') {
            result.push(newRef);
        }
        else if (typeof obj[key] === 'object') {
            if (Array.isArray(obj[key])) {
                obj[key].forEach((val, i) =>
                    result = formReferenceList(val,
                        reference === "" ? getPegaName(key, i) : reference + "." + getPegaName(key, i)
                        , result)
                );
            } else {
                result = formReferenceList(obj[key], newRef, result);
            }
        }

    });
    return result;
};

// adds missing properties from obj1 to obj2 (without value). Return new obj2.  
const addMissignProperties = (obj1, obj2) => {
    if(!obj1 || !obj2) {
        return {};
    }
    if(obj1==={}){
        return obj2;
    }

    return Object.keys(obj1 || {}).reduce((acc, key, i) => {
        let len = Object.keys(acc).length;
        let idx = i > len-1 ? len : i;

        let obj1Key = obj1[key];
        let obj2Key = obj2.hasOwnProperty(key) ? obj2[key] : null;

        if (typeof obj1Key !== 'object') { 
            if(!obj2Key) {
                acc = addToObject(acc, key, "<<green>>".concat(obj1Key.substring(8)), idx);
            }
        } else if (Array.isArray(obj1Key)) { 
            if(obj2Key) {
                acc[key] = obj1Key.length >= obj2Key.length ?
                        obj1Key.map((item, curri) => curri < obj2Key.length ? addMissignProperties(item, obj2Key[curri]) : addMissignProperties(item, {})) :
                        obj2Key.map((item, curri) => curri < obj1Key.length ? addMissignProperties(obj1Key[curri],item) : addMissignProperties({},item)); 
            } else {
                acc = addToObject(acc, key, obj1Key.map((item) =>  addMissignProperties(item,{})) ,idx);
            }
        } else {
            if(obj2Key) {
                acc[key] = addMissignProperties(obj1Key,obj2Key);
            } else {
                acc[key] = addMissignProperties(obj1Key,{});
            }
        }
        return acc;
    }, obj2);
}


export {
    getPegaName,
    formReferenceList,
    addMissignProperties,
    getParentPageName
};