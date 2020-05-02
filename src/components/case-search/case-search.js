import React, { useState } from 'react';

import Input from 'arui-feather/input';
import Button from 'arui-feather/button';
import Form from 'arui-feather/form';
import Select from 'arui-feather/select';




import './case-search.css';


const CaseSearch = ({ onSubmitAction = ()=>{} }) => {

    const [caseId, setCaseId] = useState("");
    const [caseClass, setCaseClass] = useState("");

    const classList =  [
        { value: '01', text: 'ABR-FW-OpsFW-Work-Loan-Mortgage' }
    ];

    return (
        <Form className='form-inline' method='get' onSubmit={ () => onSubmitAction({ caseId, caseClass }) }>
                <Input
                    label='Case'
                    placeholder='Enter case ID'
                    view='line'
                    onChange = { ( value ) => setCaseId(value) }
                    clear={ true }
                    size='m'
                />
            <Select
                        label='Class'
                        size='m'
                        mode='radio'
                        placeholder = 'Enter class name'
                        renderPopupOnFocus={ true }
                        onChange = { ( value ) => setCaseClass(value) }
                        options={ classList }
                    />
        
            <Button view='extra' size='s' type="submit" >Search</Button>

        </Form>
    );
};

export default CaseSearch;