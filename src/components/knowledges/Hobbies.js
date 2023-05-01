import React from 'react';

const Hobbies = () => {
    return (
       <div className='hobbies'>
       <h3>Interets</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-book'></i>
                    <span>Lecture</span>
                </li>
                
                <li className='hobby'>
                    <i className='fas fa-basketball-ball'></i>
                    <span>Basket Ball</span>
                </li>
                
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Course</span>
                </li>
                
                <li className='hobby'>
                    <i className='fab fa-bitcoin'></i>
                    <span>Crypto-monnaies</span>
                </li>
                
                <li className='hobby'>
                    <i className='fas fa-rocket'></i>
                    <span>Espace</span>
                </li>
                
            </ul>
            
        </div>
    );
};

export default Hobbies;