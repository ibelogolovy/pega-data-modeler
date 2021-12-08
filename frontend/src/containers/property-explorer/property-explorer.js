import React, { useEffect, useState } from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import PropertyView from '../../components/property-view';
import PropertyDiagramView from '../../components/property-diagram-view';

import { getParentPageName } from '../../components/utils/pega-object';

import { useSelector, useDispatch } from 'react-redux';
import { fetchDataPage, fetchSchemaList, fetchSchema } from '../../actions';
import { useCookies } from 'react-cookie';


import './property-explorer.css';


const PropertyExplorer = ({ property, appliesToClass, onChangeDiagram, diagram }) => {

  const [diagramProperties, setDiagramProperties] = useState([]);
  const [diagramNodes, setDiagramNodes] = useState([]);

  const dispatch = useDispatch();

  const schema_list = useSelector(state => state.pegaSchema.schemaList);
  const schema_list_loading = useSelector(state => state.pegaSchema.listLoading);
  const schema_list_error = useSelector(state => state.pegaSchema.listError);

  const getPropDataPage = 'D_pzGetProperty';

  const [{ activeSettingUrl, activeSettingCredential }, ] = useCookies(['activeSettingName', 'activeSettingCredential', 'activeSettingUrl']);

  const data = useSelector(state => state.dataPage.data);
  const loading = useSelector(state => state.dataPage.loading);
  const error = useSelector(state => state.dataPage.error);

  const schema = useSelector(state => state.pegaSchema.data);
  const schema_loading = useSelector(state => state.pegaSchema.loading);
  const schema_error = useSelector(state => state.pegaSchema.error);

  const { reference } = useSelector(state => state.selectedCase.params);

  useEffect(() => {
    fetchDataPage(getPropDataPage, { PropertyName: property, AppliesToClass: appliesToClass }, activeSettingUrl, activeSettingCredential)(dispatch);
  }, [dispatch, property, appliesToClass, activeSettingUrl, activeSettingCredential]);

  useEffect(() => {
    fetchSchemaList(dispatch);
  }, [dispatch]);
  
  useEffect(() => {
    if(diagram)
      fetchSchema(diagram.id)(dispatch);
  }, [diagram,dispatch]);

  useEffect(() => {
    if(diagram && !schema_loading && !schema_error) {
      const parentNode = getParentPageName(reference);
      const nodes = schema.nodes.filter(item=>item.label===parentNode);

      setDiagramProperties(nodes.reduce((acc,curr)=>{
        return [
          ...acc,
          ...curr.properties.filter(item=>item.name===property)
                .map(item=> {return {...item, nodeTable: curr.tableName, nodeName:curr.label, nodeLabel: curr.customName}})
        ]
      }, []));
      
    } 
  }, [diagram, reference, schema, property, schema_loading, schema_error]);


  const onSearchProperty = (prop, node) =>{
    fetchSchema(diagram.id)(dispatch);
  };

  if (error || schema_list_error || (diagram && schema_error)) {
    return <ErrorIndicator />;
  }

  if (loading || schema_list_loading || (diagram && schema_loading)) {
    return <Spinner />;
  }

  return <div className="property-views">
      <PropertyView data={data} 
                    reference={reference} />
      <PropertyDiagramView properties={diagramProperties} 
                            nodes={diagramNodes}
                            onSearchProperty={onSearchProperty} 
                            diagramList = {schema_list} 
                            diagram ={diagram} 
                            onChangeDiagram={onChangeDiagram}/>
  </div>;

};

export default PropertyExplorer;