import React, { useEffect, useState } from 'react';

import ErrorIndicator from '../../components/error-indicator';
import Spinner from '../../components/spinner';
import { ERD } from '../../components/diagram';
import DiagramControlPanel from '../../components/diagram-control-panel';

import { collapseBtn, expandFullscreenIcon, collapseFullscreenIcon } from '../../constants/controlIcons';

import { useDispatch, useSelector } from 'react-redux';
import { postNewSchemaFromCase, setSchemaData, fetchSchemaList, fetchSchema, saveSchema, deleteSchema } from '../../actions';
import { useCookies } from 'react-cookie';

import './model-data-explorer.css';


const ModelDataExplorer = ({ caseKey = "", caseClass = "" }) => {

  const schema = useSelector(state => state.pegaSchema.data);

  const schemaEmpty = Object.keys(schema).length === 0;

  const [forceUpdate, setForceUpdate] = useState(null);
  const [hideSchemaColumn, setHideSchemaColumn] = useState(false);
  const [expandFullscreen, setExpandFullscreen] = useState(false);
  const [seletedNode, updateSeletedNode] = useState(null);
  const [selectedSchema, setSelectedSchema] = useState(schema ? schema.id : null);

  const schema_loading = useSelector(state => state.pegaSchema.loading);
  const schema_error = useSelector(state => state.pegaSchema.error);

  const schema_list = useSelector(state => state.pegaSchema.schemaList);
  const schema_list_loading = useSelector(state => state.pegaSchema.listLoading);
  const schema_list_error = useSelector(state => state.pegaSchema.listError);

  const case_loading = useSelector(state => state.selectedCase.loading);
  const case_error = useSelector(state => state.selectedCase.error);

  const [{ activeSettingUrl, activeSettingCredential },] = useCookies(['activeSettingCredential', 'activeSettingUrl']);


  const id = caseClass + " " + caseKey;

  const dispatch = useDispatch();

  const onExpandFullscreen = () => {
    setExpandFullscreen(!expandFullscreen);
  };

  const onNodeClick = (id) => {
    updateSeletedNode({
      node: schema.nodes.filter((item) => item.id === id)[0],
      links: schema.links.filter((item) => item.source === id || item.target === id)
    });
  };

  const onSelectDiagram = (id) => (e) => {
    if(selectedSchema !== id && !schema_loading) {
      fetchSchema(id)(dispatch);
      setSelectedSchema(id);
      updateSeletedNode(null);
    }
  };

  const onUpdateSchema = (newSchema) => {
    dispatch(setSchemaData(newSchema));
  };

  // const onUpdateNode = (node) => {
  //   dispatch(setSchemaData({
  //     ...schema,
  //     nodes: [
  //       ...schema.nodes.filter(item=>item.id!==node.id),
  //       node
  //     ]
  //   }));
  // };

  const OnDragNode = (node) => {
    onUpdateSchema({
      ...schema, 
      positions: [
        ...schema.positions.filter(pos=>pos.nodeId!== node.id),
        {
          nodeId: node.id,
          ...node.position
        }
      ]
    });
  };

  const updatePositions = (positions) => {
    dispatch(setSchemaData({
      ...schema,
      positions
    }));
  }

  const onSaveSchema = () => {
    saveSchema(schema)(dispatch);
    setForceUpdate(!forceUpdate);
  };

  const onDeleteSchema = (id) => {
    deleteSchema(id)(dispatch);
    setForceUpdate(!forceUpdate);
  };

  useEffect(() => {
    if (caseClass.trim() !== "" && caseKey.trim() !== ""   && activeSettingUrl !== "") {
      setSelectedSchema("");
      postNewSchemaFromCase(id, activeSettingUrl, activeSettingCredential)(dispatch);
    }
  }, [id, caseClass, caseKey, activeSettingUrl, activeSettingCredential, dispatch]);

  useEffect(() => {
    fetchSchemaList(dispatch);
  }, [dispatch, forceUpdate])

  const viewClasses = expandFullscreen ? "expand-full-screen": "";
  const colClasses = hideSchemaColumn ? "sec-col-collapsed": "";

  return (
    <div className={"model-explorer "+viewClasses+" "+colClasses}>
      <div className="column">
        <div className="model-list">
          {
            schema_list_error ? <ErrorIndicator /> : (
              schema_list_loading ? <Spinner /> : <div className="model-list-inner">
                <h3>Existing model</h3>
                <table>
                  <tbody>
                    {
                      schema_list.map((item, i) => (
                        <tr key={i} className={selectedSchema === item.id ? "model-list-item selected" : "model-list-item"} onClick={onSelectDiagram(item.id)}>
                          <td>{i + 1}</td>
                          <td>{item.name}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            )
          }
        </div>
      </div>
      <div className="column">
        <div className="model-schema">
          {
            case_error || schema_error ? <ErrorIndicator /> : (
              (case_loading) || (schema_loading && !schemaEmpty) ? <Spinner /> :
                (!schemaEmpty && !hideSchemaColumn ? <ERD data={schema} onNodeClick={onNodeClick} onNodeDrag={OnDragNode} updatePositions={updatePositions} /> : null)
            )
          }
        </div>
      </div>
      <div className="column">
        {
            schemaEmpty || schema_loading || schema_error ? null
              : <img src={collapseBtn} 
                      onClick={() => setHideSchemaColumn(!hideSchemaColumn)} 
                      className={hideSchemaColumn ? "collapse-icon expand" : "collapse-icon"} 
                      alt="collapse/expand" />
        }
        {
            schemaEmpty || schema_loading || schema_error ? null
              : <img src={expandFullscreen ? collapseFullscreenIcon : expandFullscreenIcon} 
                      onClick={onExpandFullscreen} 
                      className="fullscreen-icon expand" 
                      alt="full screen" />
        }
        <div className="model-panel">
          {
            case_error || schema_error ? <ErrorIndicator /> : (
              (case_loading) || (schema_loading && !schemaEmpty) ? <Spinner /> :
                (!schemaEmpty ? <DiagramControlPanel
                  selectedNode={seletedNode}
                  schema={schema}
                  onUpdateSchema={onUpdateSchema}
                  onSaveSchema={onSaveSchema}
                  onDeleteSchema={onDeleteSchema}
                  onNodeClick={onNodeClick}
                  format={hideSchemaColumn ? "wide" : "normal"} /> : null)
            )
          }
        </div>
      </div>
    </div>
  );

};

export default ModelDataExplorer;