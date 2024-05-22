import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';


const Header = () =>{

    return(
        <div>
           <Link to="/"> <span>Home</span></Link>
            <span>About</span>
            <Link to="/Character"><span>Character</span></Link>
            <Link to="Dream"><span>Dream</span></Link>
            <Link to="/Event"><span>Event</span></Link>
            <span>Action</span>
            <span>Money</span>
        </div>
    )

}

export default Header;