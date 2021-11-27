import React, { useState, useEffect } from 'react';

import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';

import './system-settings.css';

const SystemSettings = ({ settings, activeSetting, onSubmit, onRemove }) => {

    const [formData, updateFormData] = useState({});

    useEffect(() => {
        updateFormData(state => settings.filter((value) => value.active === true).length > 0 ?
            settings.filter((value) => value.active === true)[0] : (settings.length > 0 ? settings[0] : { login: "", password: "", url: "", name: "", key: "", defaultClass: "" }));
    }, [settings]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const onSelectItem = (item) => {
        updateFormData(item);
    }

    const handleChange = (value, event) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [event.target.name]: value.trim()
        });
    };

    return (
        <div className="system__settings">
            <div className="add-form">
                <Form method="post" onSubmit={(e) => onSubmitForm(e)}
                >
                    <FormField>
                        <Input
                            label='Name'
                            name="name"
                            placeholder='Enter name of your config'
                            size='m'
                            width='available'
                            theme='alfa-on-white'
                            value={formData.name}
                            onChange={(value, event) => handleChange(value, event)}
                        />
                    </FormField>
                    <FormField>
                        <Input
                            label='URL'
                            name="url"
                            placeholder='Enter URL of your Pega'
                            size='m'
                            width='available'
                            theme='alfa-on-white'
                            value={formData.url}
                            onChange={(value, event) => handleChange(value, event)}
                        />
                    </FormField>
                    <FormField>
                        <Input
                            label='Login'
                            name="login"
                            placeholder='Enter Login for Pega API access'
                            size='m'
                            width='available'
                            theme='alfa-on-white'
                            value={formData.login}
                            onChange={(value, event) => handleChange(value, event)}
                        />
                    </FormField>
                    <FormField>
                        <Input
                            label='Password'
                            type="password"
                            name="password"
                            placeholder='Enter Password for Pega API access'
                            size='m'
                            disabled={formData.default}
                            width='available'
                            theme='alfa-on-white'
                            value={formData.password}
                            onChange={(value, event) => handleChange(value, event)}
                        />
                    </FormField>
                    <FormField>
                        <Input
                            label='Default Work Class'
                            name="defaultClass"
                            placeholder='Enter Default Work Class'
                            size='m'
                            width='available'
                            theme='alfa-on-white'
                            value={formData.defaultClass}
                            onChange={(value, event) => handleChange(value, event)}
                        />
                    </FormField>
                    <FormField>
                        <div className="control-buttons">
                            <Button theme="alfa-on-color" size="m" type='submit' >Save and select</Button>
                            {/* <Button theme="alfa-on-color" size="m" 
                                onClick ={ ()=>updateFormData({login:"", password:"", url:"", name: ""}) }>
                                    Reset
                            </Button> */}
                            <Button theme="alfa-on-color" size="m" onClick={() => onRemove(formData.name)} >Remove</Button>
                        </div>
                    </FormField>
                </Form>
            </div>
            <div className="list">
                {
                    settings.map((value, key) => {
                        const classes = value.name === activeSetting ?
                            "list-item active" : key === formData.key ? "list-item selected" : "list-item";

                        return <div key={key}
                            className={classes}
                            onClick={() => onSelectItem({ ...value, key })}>
                            {value.name}
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default SystemSettings;
