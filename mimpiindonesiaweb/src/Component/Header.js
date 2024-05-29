import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Logo from '../Component/Logo/Logo';
import './Header.css';


const Header = () =>{

    return(
        <div className="HeaderContainer">
           <Link to="/"> <div className="HeaderContent">Home</div></Link>
           <div className="HeaderContent">About</div>
            <Link to="/Character"><div className="HeaderContent">Character</div></Link>
            <Link to="/Dream"><div className="HeaderContent">Dream</div></Link>
            <Link to="/Event"><div className="HeaderContent">Event</div></Link>
            <Link to="/Actions"><div className="HeaderContent">Action</div></Link>
            <Link to="/Money"><div className="HeaderContent">Money</div></Link>
            <Link to="/"><div className="HeaderContent"><Logo/></div></Link>
            
        </div>
    )

}

export default Header;