import React from 'react';

import Header from '../../components/header';

const Home = ( ) => {

    return (
        <div style={ {
            // display: 'flex',
            justifyContent:'space-around',
            alignItems: 'stretch',
            color: 'whitesmoke',
            padding:'5%',
            textAlign: 'center'
        } }>
            <Header/>
            {/* <div style={{ width: '20%' }} >Authors:<br/><br/>
                Ilya Belogolovy</div> */}
        </div>
    );
}

export default Home;