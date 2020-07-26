import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SystemSettings from '../../components/system-settings';
import Spinner from '../../components/spinner';

import { postPegaSettingAndFetch, fetchPegaSetting } from '../../actions';

import './home-content.css';


const HomeContent = () => {

    const pegaSetting = useSelector(state => state.pegaSetting.data);
    const pegaSettingLoading = useSelector(state => state.pegaSetting.loading);

    const dispatch = useDispatch(); 

    useEffect(()=>{
        fetchPegaSetting()(dispatch);
      }, [ dispatch ]); 


    const onSubmitSetting = (data) => {
        if(data.login ==="" || data.password ==="" || data.url ==="" || data.name ===""  ) {
            alert("Please fill all fields!")
        } else {
            postPegaSettingAndFetch({...data, active:true})(dispatch);
        }
    };

    return (
        <div className="home-content">
            <div className="purpose">
                <strong>Only</strong> for Pega Platform BPMS project. <br/>
                <strong>Only</strong>  for your red company.
            </div>
            <div className="system-settings block">
                <div className="title">System settings</div>
                {pegaSettingLoading ? <Spinner mode="white"/> :
                  <SystemSettings settings={pegaSetting} onSubmit ={onSubmitSetting} />}
            </div>
            <div className="about block">
                <div className="title">About</div>
                <div className="content">
                    This site is an isomorphic React App created to help Pega team members work with system data model. The proposed tools allow you to view and visualize object data.
                    <br/><br/>
                    Some tools: <br/><br/>
                    <strong>Wide clipboard</strong> uses Pega API for getting work object data to show it as tree structure and detailed info about each property. <br/><br/>
                    <strong>Clipboard viewer</strong> uses such Pega API for building ER diagram. <br/>
                </div>
            </div>
            <div className="info">
                <div className="float-left">Authors: Ilya Belogolovy (ibelogolovy)</div>
                <div className="float-right">For learning purpose actually :) </div>
            </div>
        </div>
    )
}

export default HomeContent;
