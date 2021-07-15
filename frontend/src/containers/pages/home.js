import React from 'react';

import Header from '../../components/header';

import HomeContent from '../home-content';

const Home = ( ) => {

    return (
        <div className="page">
            <div className="page-header">
                <Header/>
            </div>
            <HomeContent/>
        </div>
    );
}

export default Home;