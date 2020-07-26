import React from 'react';

import './filter-tagged.css';

const FilterTagged = ({ children = [], onClose = ()=>{}, additionalInsruction = "", onlyLastEditable = false }) => {
    return (
        <div className='filter-tagged'>
            {
                children.length > 1 ? 
                children.map( ({ name, id }, key, array) => {

                    return name !==null  ? (
                        <div key={key} className='filter-tag'>
                            {name}
                            {
                                onlyLastEditable && key !== array.length-1 ? 
                                     null : 
                                     <div className="close" onClick={ ()=>onClose( id ) }></div>
                                
                            }
                        </div>
                    ) : null;
                }) : additionalInsruction
            }
        </div>
    )
}

export default FilterTagged;