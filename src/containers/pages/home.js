import React from 'react';

import Header from '../../components/header';

const Home = () => {

    return (
        <div style={ {
            display: 'flex',
            justifyContent:'space-around',
            alignItems: 'stretch',
            color: 'whitesmoke',
            padding:'5%',
            textAlign: 'center'
        } }>
            {/* <div style={{ width: '20%' }}>This resource was created to accumulate tools for viewing and analyzing data from the Pega platform.</div> */}
            <Header/>
            {/* <div style={{ width: '20%' }} >Authors:<br/><br/>
                Ilya Belogolovy</div> */}
        </div>
    );
}

export default Home;