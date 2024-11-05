import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => { 
    return (
        <div className='home'>
            <Navigation/>
            <div className='homeContent'>
                <div className='content'>
                    <h1>Armel Khitchang Tchoufa</h1>
                    <h2>Analyste programmeur</h2>
                    <div className='pdf'>
                        <a href="./media/Cv_Armel_Khitchang_Tchoufa.pdf" target='_blank'>Telecharger mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;