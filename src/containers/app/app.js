import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';


import VerticalNavigation from '../../components/vertical-navigation';

// pages
import Home from '../pages/home';
import CaseDataView from '../pages/case-data-view';
import CaseDataModel from '../pages/case-data-model';


import { navigationItems } from '../../constants/navigationItems';

import './app.css';

const App = () => {

    const location = useLocation();
    const [expandNav, setExpandNav] = useState(false);

    useEffect(()=>{
      setExpandNav(location.pathname==="/" )
    }, [ location ]);

    return (
      <div role="main" >
        <div className = {expandNav ? "navigation expand" : "navigation"}> 
            <VerticalNavigation 
                className = "panel"
                navigationItems = { navigationItems } 
                onHomeClick = { () => setExpandNav(true) } 
                onItemClick = { () => setExpandNav(false) } 
            />
        </div>
        <div className="content">
          <Switch>
            <Route
                  path="/"
                  component = { Home }
                  exact />
            <Route
                path="/clipboard"
                component = { CaseDataView }/>
            <Route
                path="/model"
                component = { CaseDataModel }/>
          </Switch>
        </div>
      </div>
    );
}

export default App;