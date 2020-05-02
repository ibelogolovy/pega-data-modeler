import React from 'react';

import { Link } from 'react-router-dom';

import './vertical-navigation.css';

const VerticalNavigation = ({ navigationItems, onHomeClick, onItemClick, className="" }) => {
    return (
        <div className = {"vertical-navigation " + className}>
            { navigationItems.map(( { name, link, icon, role  }, i) => {
                return (
                    
                    <div className= {"menu-item "+ role} key={i}>
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