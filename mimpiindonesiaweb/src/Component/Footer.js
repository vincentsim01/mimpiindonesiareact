import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Subscriber from './Subscriber/Subscriber';
import './Footer.css';


const Footer = () =>{

    return (
        <div className="footercontainer">
        {/* <div className="container "> */}
            <div className="rowa">
                <div className="col footercontent">
                    Social Media
                </div>

                <div className="col footercontent">
                    Card Types
                </div>
                <div className="col footercontent">
                <Link to ='/blog'>

                    Blogs

                </Link>
                </div>
                <div className="col footercontent">
                <Link to ='/contactus'>
                    Contact Us
                </Link>
                </div>
                <div className="col footercontent">
                <Link to ='/fanletter'>

                    Fanletter

                </Link>
                </div>
            {/* </div> */}
        </div>
        <br></br>
        <div className="subscribercontainer">
            <div className="subscriberbetween">
                <Subscriber></Subscriber>
            </div>
        </div>

        
        </div>
    )

}

export default Footer;
