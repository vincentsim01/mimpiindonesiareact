import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Logo from '../Component/Logo/Logo';
import FindCard from './FindCard/FindCard';
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
                <Link to="/pickfavcard"className="HeaderContent2">Add Favorite Card</Link>

                </div>
            )
    
    
            } else {
                return(

                    <div className="HeaderRight">
                    <Link to="/register" className="HeaderContent2">Register</Link>
                    <Link to="/login" className="HeaderContent2">Login</Link>

            
                    </div>
    

                )
    
        }
    }

    function headerreveal(){
        document.getElementById("cardhidden").classList.remove("none");
    }

    function headerhide(){
        document.getElementById("cardhidden").classList.add("none");
    }

    // function headerhide(){
    //     document.getElementsByClassName("cardhiddenchild").classList.add(none);

    // }




    return(
        <div className="HeaderContainer">
            <div className="HeaderBG">
                <img src="https://i.ibb.co/LRRnfLj/Horizontal-Stretch-Cloud-no-top.png" className="headerimg"></img>
            </div>
            <div className="HeaderLeft">
           <Link to="/"> <div className="HeaderContent">Home</div></Link>
           <Link to="/About"><div className="HeaderContent">About</div></Link>

            <div id="carddropdown" className="HeaderContent" onMouseOver={headerreveal} onMouseOut={headerhide}> Cards
                <div id="cardhidden" className="none">     
                    <Link to="/Character"><div className="HeaderContent cardhiddenchild">Character</div></Link>   
                    <Link to="/Dream"><div className="HeaderContent cardhiddenchild">Dream</div></Link><br></br>
                    <Link to="/Event"><div className="HeaderContent cardhiddenchild">Event</div></Link><br></br>
                    <Link to="/Actioning"><div className="HeaderContent cardhiddenchild">Action</div></Link><br></br>
                    <Link to="/Trivia"><div className="HeaderContent cardhiddenchild">Trivia</div></Link><br></br>
                    <Link to="/Money"><div className="HeaderContent cardhiddenchild">Moneys</div></Link>
                </div>  
            </div>
            <Link to="/contactus"><div className="HeaderContent">Contact Us</div></Link>


            </div>
            <Link to="/"><div id="theLogo"><Logo /></div></Link>
            {conditionalHeader()}
            <div className="FindCardContainer"><FindCard className="FindCardHeader"/></div>

           
            
        </div>
    )

}

export default Header;