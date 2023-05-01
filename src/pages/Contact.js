import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
        <Navigation/>
        <div className='contactContent'>
            <div className='header'> <br/> 
               <div className='contactBox'>
                <h1>Contactez-moi</h1> 
                    <ul>
                         <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Montreal</span>
                        </li><br/><br/>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='438 830 8230'>
                            <span className='clickInput' 
                            onClick={()=>{alert('Telephone copie!!');}}>438 830 8230</span>
                            </CopyToClipboard>
                        </li><br/><br/>   
                        <li>
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text='khitchangarmel@gmail.com'>
                            <span className='clickInput' 
                               onClick={()=>{alert('Email copie!!');}}>khitchangarmel@gmail.com</span>
                            </CopyToClipboard>
                        </li><br/> 
                    </ul>
                </div>
            </div>
            <div className='socialNetwork'>
               <ul>
                    <a  href="https://www.linkedin.com/in/armel-khitchang-tchoufa-a58a30182" target="_blank" 
                        rel='noopener noreferrer'> 
                        <h4>Linkedin</h4>
                        <i className="fab fa-linkedin"></i>
                    </a>                    
                    <a  href="https://github.com/armelKhitchang" target="_blank" 
                        rel='noopener noreferrer'> 
                        <h4>Github</h4>
                        <i className="fab fa-github"></i>
                    </a>                    
                    <a  href="https://www.google.com" target="_blank" 
                        rel='noopener noreferrer'> 
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter"></i>
                    </a>                    
                    <a  href="https://codepen.io/Khifamel" target="_blank" 
                        rel='noopener noreferrer'>
                        <h4>Codepen</h4>
                         <i className="fab fa-codepen"></i>
                    </a>  
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;