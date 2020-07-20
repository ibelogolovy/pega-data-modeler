import React from 'react';

import './filter-tagged.css';

const FilterTagged = ({ children = [], onClose = ()=>{}, onlyLastEditable = false }) => {

    return (
        <div className='filter-tagged'>
            {
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
                })
            }
        </div>
    )
}

export default FilterTagged;