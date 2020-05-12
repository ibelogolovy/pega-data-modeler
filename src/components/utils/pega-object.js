
const getPegaName = (prefix, name) => {
    if( name === "content") {
        name = "pyWorkPage"
    }

    // if has prefix - it is page list of page group item
    if(typeof prefix === "string" && prefix !== "") {
        name=Number.parseInt(name)+1;
        name=prefix+'('+name+')';
    }
    
    return name;
}


export {
    getPegaName
};