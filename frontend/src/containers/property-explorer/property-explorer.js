import React, { useEffect } from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import PropertyView from '../../components/property-view';

import { useSelector, useDispatch } from 'react-redux';
import { fetchDataPage } from '../../actions';
import { useCookies } from 'react-cookie';


const PropertyExplorer = ({ property, appliesToClass }) => {

  const dispatch = useDispatch();

  const getPropDataPage = 'D_pzGetProperty';

  const [{ activeSettingUrl, activeSettingCredential },] = useCookies(['activeSettingName', 'activeSettingCredential', 'activeSettingUrl']);

  useEffect(() => {
    fetchDataPage(getPropDataPage, { PropertyName: property, AppliesToClass: appliesToClass }, activeSettingUrl, activeSettingCredential)(dispatch);
  }, [dispatch, property, appliesToClass, activeSettingUrl, activeSettingCredential]);

  const data = useSelector(state => state.dataPage.data);
  const loading = useSelector(state => state.dataPage.loading);
  const error = useSelector(state => state.dataPage.error);
  const { reference } = useSelector(state => state.selectedCase.params);

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <Spinner />;
  }

  return <PropertyView data={data} reference={reference} />;

};

export default PropertyExplorer;