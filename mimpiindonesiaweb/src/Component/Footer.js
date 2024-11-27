import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Subscriber from './Subscriber/Subscriber';
import './Footer.css';


const Footer = () =>{

    function cardtypereveal(){
        // document.getElementById("cardtypefooter").classList.toggle("block");
        document.getElementById("cardtypefooter").classList.remove("none");

    }

    function cardtypehidden(){
        document.getElementById("cardtypefooter").classList.add("none");

    }

    function socialmediareveal(){
        document.getElementById("socialmediafooter").classList.remove("none");

    }

    function socialmediahide(){
        document.getElementById("socialmediafooter").classList.add("none");

    }

    return (<>
        <div className="footercontainer">
        {/* <div className="container "> */}
            <div className="rowa">
                <div id="socialmediafootercontainer" className="col footercontent">
                    <div id="socialmediafootertext" onMouseOver={socialmediareveal} onMouseOut={socialmediahide}>Social Media
                    <div id="socialmediafooter" className="none" style={{width:"250px"}}>
                    <table style={{textAlign:"center", width:"100%"}}>
                                    <tr>
                                        <td>
                                            <a href="http://www.facebook.com" target="_blank">Facebook</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="http://www.instagram.com" target="_blank">Instagram</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="http://www.tiktok.com" target="_blank">TikTok</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="http://www.snapchat.com" target="_blank">Snapchat</a>
                                        </td>
                                    </tr>
                        </table>
                    </div>
                    </div>

                </div>

                <div className="col footercontent" id="cardtypefootercontainer">
                    <div id="cardtypetext" onMouseOver={cardtypereveal} onMouseOut={cardtypehidden}>Card Types
                            <div id="cardtypefooter" className="none" style={{width:"250px"}} >
                                <table style={{textAlign:"center", width:"100%"}}>
                                    <tr>
                                        <td>
                                            <Link to="/character">Character</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/Dream">Dream</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/Event">Event</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/Actioning">Action</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/Trivia">Trivia</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/Money">Money</Link>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                    </div>
                </div>
                <div className="col footercontent">
                <Link to ='/blog' style={{ color: 'white' }}>

                    Blogs

                </Link>
                </div>
                <div className="col footercontent">
                <Link to ='/contactus'  style={{ color: 'white' }}>
                    Contact Us
                </Link>
                </div>
                <div className="col footercontent">
                <Link to ='/fanletter' style={{ color: 'white' }}>

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

        <div id="mobilefootercontainer">
            <div id="mobilefootertext">
                <Link to ='/blog' style={{ color: 'white' }}><p>Blogs</p></Link>
                <Link to ='/contactus' style={{ color: 'white' }}><p>Contact Us</p></Link>
                <Link to ='/fanletter' style={{ color: 'white' }}><p>Fanletter</p></Link>
            </div>
        

        </div>
        </>
    )

}

export default Footer;
