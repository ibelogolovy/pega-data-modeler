import React from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import PropertyView from '../../components/property-view';

import { useSelector } from 'react-redux';

// import './wideClipboard.css';

const PropertyExplorer = () => {

  const data = useSelector(state => state.dataPage.data);
  const loading = useSelector(state => state.dataPage.loading);
  const error = useSelector(state => state.dataPage.error);
  const { reference } = useSelector(state => state.selectedCase.params);

  if (error) {
    return <ErrorIndicator />;
  }

  if(loading) {
      return <Spinner/>;
  }

  return <PropertyView data = { data } reference = { reference } />;

};

export default PropertyExplorer;