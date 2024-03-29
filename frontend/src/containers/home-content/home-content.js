import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

import SystemSettings from '../../components/system-settings';
import Spinner from '../../components/spinner';

import { postPegaSettingAndFetch, fetchPegaSetting, deletePegaSettingAndFetch } from '../../actions';

import './home-content.css';


const HomeContent = () => {

    const pegaSetting = useSelector(state => state.pegaSetting.data);
    const pegaSettingLoading = useSelector(state => state.pegaSetting.loading);

    const [cookies, setCookie] = useCookies(['activeSettingName', 'activeSettingCredential', 'activeSettingUrl', 'defaultWorkClass']);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchPegaSetting()(dispatch);
    }, [dispatch]);


    const onSubmitSetting = (data) => {
        if (data.login === "" || data.password === "" || data.url === "" || data.name === "") {
            alert("Please fill all fields!")
        } else {
            postPegaSettingAndFetch({ ...data })(dispatch);
            setCookie('activeSettingName', data.name, { path: '/' });
            setCookie('activeSettingCredential', btoa(data.login + ":" + data.password), { path: '/' });
            setCookie('activeSettingUrl', data.url, { path: '/' });
            setCookie('defaultWorkClass', data.defaultClass, { path: '/' });
        }
    };


    const onRemove = (name) => {
        if (name !== "") {
            deletePegaSettingAndFetch(name)(dispatch);
            if (cookies.activeSettingName === name && pegaSetting.length > 0) {
                setCookie('activeSettingName', pegaSetting[0].name, { path: '/' });
                setCookie('activeSettingCredential', btoa(pegaSetting[0].login + ":" + pegaSetting[0].password), { path: '/' });
                setCookie('activeSettingUrl', pegaSetting[0].url, { path: '/' });
                setCookie('defaultWorkClass', pegaSetting[0].defaultClass, { path: '/' });
            }
        }
    };

    return (
        <div className="home-content">
            <div className="purpose">
                <strong>Only</strong> for Pega Platform BPMS project. <br />
                <strong>Only</strong> for internal use.
            </div>
            <div className="system-settings block">
                <div className="title">System settings</div>
                {pegaSettingLoading ? <Spinner mode="white" /> :
                    <SystemSettings settings={pegaSetting} activeSetting={cookies.activeSettingName} onSubmit={onSubmitSetting} onRemove={onRemove} />}
            </div>
            <div className="about block">
                <div className="title">About</div>
                <div className="content">
                    This site is an React App created to help Pega team members work with system data model. The proposed tools allow you to view, visualize and change object data.
                    <br /><br />
                    Some tools: <br />
                    <ul>
                        <li><strong>Wide clipboard</strong> uses Pega API for getting work object data to show it as tree structure and detailed info about each property.</li>
                        <li><strong>Clipboard Comparator</strong> can help you to compare different work objects highlighting the differences.</li>
                        <li><strong>Clipboard Model tool</strong> allows you to build a diagram of dependencies between classes.</li>
                        <li><strong>Data Model tool</strong> is a fully functional tool for managing the case data model.</li>
                    </ul>
                </div>
            </div>
            <div className="info">
                <div className="float-left">Author: Ilya Belogolovy (ibelogolovy)</div>
                <div className="float-right"></div>
            </div>
        </div>
    )
}

export default HomeContent;
