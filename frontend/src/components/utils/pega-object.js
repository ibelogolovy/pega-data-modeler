
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


export {
    getPegaName,
    formReferenceList
};