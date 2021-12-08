import React from 'react';

import Select from 'react-select';

import './property-diagram-view.css';

const SearchResults = ({properties}) => {
    if(properties.length === 0){
        return <div className="field-group">
            Not found
        </div>
    }
    return <>
           { properties.map(({ name, customName, type, description, nodeName, nodeLabel, nodeTable }  , i) => {
                return (
                    <div key={i} className="field-group">
                        <div className="field">
                            <div className="name"> Name </div>
                            <div className="value"> { name } </div>
                        </div>
                        <div className="field">
                            <div className="name"> Label </div>
                            <div className="value"> { customName ? customName : "-" }  </div>
                        </div>
                        <div className="field">
                            <div className="name"> Type </div>
                            <div className="value"> { type ? type : "-" }  </div>
                        </div>
                        <div className="field">
                            <div className="name"> Description </div>
                            <div className="value"> { description ? description : "-" } </div>
                        </div>
                        <div className="field">
                            <div className="name"> Page </div>
                            <div className="value"> { nodeName } { nodeLabel ? "/ " + nodeLabel : null }</div>
                        </div>
                        <div className="field">
                            <div className="name"> Table </div>
                            <div className="value"> { nodeTable ? nodeTable : "-" } </div>
                        </div>
                    </div>
                );
            })}
            </>
}

const PropertyDiagramView = ({ properties=[], diagramList, onChangeDiagram, diagram}) => {

    const selectedDiagram = diagram ? diagram : {name: "Select schema...", id:0};
    // const onClickSearch = () => {
    //     onSearchProperty();
    // }

    return <div className="property-diagram-view">
        <div className="field">
            <h2>Data model information</h2>
        </div>
        <div className="field">
            <Select
                                name="diagram"
                                options={diagramList}
                                getOptionLabel={(option) => `${option['name']}`}
                                getOptionValue={(option) => `${option['id']}`}
                                defaultValue={selectedDiagram}
                                onChange={onChangeDiagram} />
            {/* <button className="button-gray" onClick={onClickSearch}>Search</button> */}
         </div>
        {diagram ?
            <SearchResults properties={properties} />
        : null}
    </div>
};


export default PropertyDiagramView;