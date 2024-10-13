import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Logo from '../Component/Logo/Logo';
import './Header.css';
const url = "http://localhost:9120";

const Header = () =>{

    const [userData,setUserData] = useState('');
    let navigate = useNavigate();

    // useEffect(() => {
    //     if(sessionStorage.getItem('ltk') != null){
    //         fetch(`${url}/api/auth/userInfo`,{
    //             method:'GET',
    //             headers:{
    //                 'x-access-token':sessionStorage.getItem('ltk')
    //             }
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setUserData(data)

    //         })
    //     }
    // },[])


    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        setUserData('');
        navigate('/')
    }

    const conditionalHeader = () =>{

        if (sessionStorage.getItem('ltk')){

            return(



                <div className="HeaderRight">
                <button onClick={handleLogout}>Logout</button>
                <Link to="/viewfavcard">Favorite Card</Link>
                <Link to="/pickfavcard">Favorite Card</Link>

                </div>
            )
    
    
            } else {
                return(

                    <div className="HeaderRight">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/viewfavcard">Favorite Card</Link>
                    <Link to="/pickfavcard">Favorite Card</Link>
            
                    </div>
    

                )
    
        }
    }




    return(
        <div className="HeaderContainer">
            <div className="HeaderLeft">
           <Link to="/"> <div className="HeaderContent">Home</div></Link>
           <Link to="/About"><div className="HeaderContent">About</div></Link>
            <Link to="/Character"><div className="HeaderContent">Character</div></Link>
            <Link to="/Dream"><div className="HeaderContent">Dream</div></Link>
            <Link to="/Event"><div className="HeaderContent">Event</div></Link>
            <Link to="/Actioning"><div className="HeaderContent">Action</div></Link>
            <Link to="/Trivia"><div className="HeaderContent">Trivia</div></Link>
            <Link to="/Money"><div className="HeaderContent">Money</div></Link>
            <Link to="/"><div className="HeaderContent"><Logo/></div></Link>
            </div>
            {conditionalHeader()}
           
            
        </div>
    )

}

export default Header;