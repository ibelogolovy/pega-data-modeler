import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { useCookies } from 'react-cookie';

import VerticalNavigation from '../../components/vertical-navigation';

// pages
import Home from '../pages/home';
import CaseDataView from '../pages/case-data-view';
import CaseClassModel from '../pages/case-class-model';
import CaseDataModel from '../pages/case-data-model';
import CaseDataComparator from '../pages/case-data-comparator';


import { navigationItems } from '../../constants/navigationItems';

import './app.css';

const App = () => {

  const location = useLocation();
  const [expandNav, setExpandNav] = useState(false);

  const [cookies,] = useCookies(['activeSettingName']);

  useEffect(() => {
    setExpandNav(location.pathname === "/")
  }, [location]);

  const setVisibility = (dependOn) => {
    return !dependOn || (dependOn && cookies[dependOn]);
  }

  return (
    <div role="main">
      <div className={expandNav ? "navigation expand" : "navigation"}>
        <VerticalNavigation
          className="panel"
          navigationItems={navigationItems}
          onHomeClick={() => setExpandNav(true)}
          onItemClick={() => setExpandNav(false)}
          setVisibility={setVisibility}
        />
      </div>
      <div className="content">
        <Switch>
          <Route
            path="/"
            component={Home}
            exact />
          <Route exact
            path="/clipboard"
            component={CaseDataView} />
          <Route exact
            path="/clipboard-compare"
            component={CaseDataComparator} />
          <Route exact
            path="/model-class"
            component={CaseClassModel} />
          <Route
            path="/model-data"
            component={CaseDataModel} />
        </Switch>
      </div>
    </div>
  );
}

export default App;