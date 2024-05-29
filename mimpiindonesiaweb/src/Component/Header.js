import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Logo from '../Component/Logo/Logo';


const Header = () =>{

    return(
        <div>
           <Link to="/"> <span>Home</span></Link>
            <span>About</span>
            <Link to="/Character"><span>Character</span></Link>
            <Link to="/Dream"><span>Dream</span></Link>
            <Link to="/Event"><span>Event</span></Link>
            <Link to="/Actions"><span>Action</span></Link>
            <Link to="/Money"><span>Money</span></Link>
            <Link to="/"><Logo/></Link>
            
        </div>
    )

}

export default Header;