import React, { useState } from 'react';

import Input from 'arui-feather/input';
import Button from 'arui-feather/button';
import Form from 'arui-feather/form';
// import Select from 'arui-feather/select';

import './case-search.css';


const CaseSearch = ({ caseId = "", caseClass = "", onSubmitAction = () => { } }) => {

    const [_caseId, _setCaseId] = useState(caseId);
    const [_caseClass, _setCaseClass] = useState(caseClass);

    return (
        <Form className='form-inline' method='get' onSubmit={() => onSubmitAction({ caseId: _caseId, caseClass: _caseClass })}>
            <Input
                label='Case'
                value={_caseId}
                placeholder='Enter case ID'
                view='line'
                onChange={(value) => _setCaseId(value)}
                clear={true}
                size='m'
            />

            <Input
                label='Class'
                value={_caseClass}
                placeholder='Enter class name'
                view='line'
                onChange={(value) => _setCaseClass(value)}
                clear={true}
                size='m'
            />

            <Button view='extra' size='s' type="submit" >Search</Button>

        </Form>
    );
};

export default CaseSearch;