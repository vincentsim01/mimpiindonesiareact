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
                <Link to="/" onClick={handleLogout}className="HeaderContent2">Logout</Link>
                <Link to="/viewfavcard" className="HeaderContent2">Favorite Card</Link>
                <Link to="/pickfavcard"className="HeaderContent2">Favorite Card</Link>

                </div>
            )
    
    
            } else {
                return(

                    <div className="HeaderRight">
                    <Link to="/register" className="HeaderContent2">Register</Link>
                    <Link to="/login" className="HeaderContent2">Login</Link>
                    <Link to="/viewfavcard" className="HeaderContent2">Favorite Card</Link>
                    <Link to="/pickfavcard" className="HeaderContent2">Pick Favorite Card</Link>
            
                    </div>
    

                )
    
        }
    }

    function headerreveal(){
        document.getElementsByClassName("cardhidden").classList.toggle("none");
    }

    // function headerhide(){
    //     document.getElementsByClassName("cardhiddenchild").classList.add(none);

    // }




    return(
        <div className="HeaderContainer">
            <div className="HeaderLeft">
           <Link to="/"> <div className="HeaderContent">Home</div></Link>
           <Link to="/About"><div className="HeaderContent">About</div></Link>
            <Link to="/Character"><div className="HeaderContent">Character</div></Link>
            <div className="carddropdown" onMouseOver={headerreveal}> Cards
                <div className="cardhidden none">        
                    <Link to="/Dream"><div className="HeaderContent cardhiddenchild">Dream</div></Link><br></br>
                    <Link to="/Event"><div className="HeaderContent cardhiddenchild">Event</div></Link><br></br>
                    <Link to="/Actioning"><div className="HeaderContent cardhiddenchild">Action</div></Link><br></br>
                    <Link to="/Trivia"><div className="HeaderContent cardhiddenchild">Trivia</div></Link><br></br>
                    <Link to="/Money"><div className="HeaderContent cardhiddenchild">Money</div></Link>
                </div>  
            </div>

            <Link to="/"><div className="HeaderContent"><Logo/></div></Link>
            </div>
            {conditionalHeader()}
           
            
        </div>
    )

}

export default Header;