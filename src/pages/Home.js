import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => { 
    return (
        <div className='home'>
            <Navigation/>
            <div className='homeContent'>
                <div className='content'>
                    <h1>Armel Khitchang Tchoufa</h1>
                    <h2>Developpeur Full Stack</h2>
                    <div className='pdf'>
                        <a href="./media/Cv_Armel.pdf" target='_blank'>Telecharger</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;