import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Subscriber from './Subscriber/Subscriber';
import './Footer.css';


const Footer = () =>{

    return (
        <div className="footercontainer">
        <div className="container ">
            <div className="row">
                <div className="col footercontent">
                    Social Media
                </div>

                <div className="col footercontent">
                    Card Types
                </div>

                <div className="col footercontent">
                    Blogs
                </div>
                <Link to ='/contactus'>
                <div className="col footercontent">
                    Contact Us
                </div>
                </Link>
            </div>
        </div>
        <br></br>
        <Subscriber></Subscriber>

        
        </div>
    )

}

export default Footer;
