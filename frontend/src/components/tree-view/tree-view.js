import React, { useState } from 'react';

import Node from './node';

import Input from 'arui-feather/input';

import SearchIcon from 'arui-feather/icon/action/search';

import './tree-view.css';

const Tree = ({ data, onClickNode, onExpandNode, getNodeStyle }) => {

    const [searchString, setSearchString] = useState("");

    const filteredData = data;

    return (
        <div className="tree">
            <Input
                placeholder='Search'
                view='filled'
                width='available'
                size='s'
                onKeyDown={({ keyCode, target: { value } }) => { if (keyCode === 13) { setSearchString(value) } }}
                onClearClick={() => setSearchString("")}
                clear={true}
                leftAddons={
                    <SearchIcon size='s' />
                }
            />
            <Node data={filteredData} onClickNode={onClickNode} searchString={searchString} onExpandNode={onExpandNode} getNodeStyle={getNodeStyle}/>
        </div>);
};

export default Tree;