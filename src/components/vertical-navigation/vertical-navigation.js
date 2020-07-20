import React from 'react';

import { Link } from 'react-router-dom';

import './vertical-navigation.css';


const VerticalNavigation = ({ navigationItems=[], onHomeClick=()=>{}, onItemClick=()=>{}, onItemHover=()=>{}, className="" }) => {
    return (
        <div className = {"vertical-navigation " + className} onMouseLeave = { ()=> onItemHover({ help:"Click on menu item for info" }) }>
            { navigationItems.map(( { name, link, icon, role, help  }, i) => {
                return (
                    <div key={i} className= {"menu-item "+ role} 
                        onMouseEnter = { () => onItemHover({ help }) } >
                        <Link to={ link } onClick={ role === "home" ? onHomeClick : onItemClick }>
                            <div className="item-icon"> 
                                <img src={ icon } alt="icon"/>
                            </div> 
                            <div className = "item-name"> 
                                { name } 
                            </div>
                        </Link>
                    </div>
                )
                })
            }
       </div>
    );
}

export default VerticalNavigation;