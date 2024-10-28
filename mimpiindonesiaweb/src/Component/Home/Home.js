import React from 'react';
import './Home.css';
import Banner from './Banner';
import Count from '../Count/Count';
import Category from '../Category/Category';
import Name from '../InsertName/Name';
import CatDropdown from '../CategoryDropdown/CatDropdown';




import { useState, useEffect } from 'react';


const Home = () => {
    var popupcontainer = document.getElementById('popupcontainer');

    const [showPopup, setShowPopup] = useState(false);

    // useEffect(() => {
    //     // Show the popup after 1 second
    //     const timeoutId = setTimeout(() => {
    //       setShowPopup(true);
    //     }, 1000);
    
    //     // Clear the timeout to avoid showing the popup if the component is unmounted before the timeout
    //     return () => clearTimeout(timeoutId);
    //   }, []);


    //   const closepopup = () => {
    //     setShowPopup(false);
    //   };

    function becomepopup(){
        var popupcontainer = document.getElementById('popupcontainer');
        let bannercontainer=document.getElementById('carouselExampleSlidesOnly');

        bannercontainer.classList.add('opacityhalf');


        popupcontainer.classList.remove('none');

    }


    setTimeout(becomepopup,1000);


    function closepopup(){
        var popupcontainer = document.getElementById('popupcontainer');
        popupcontainer.classList.add('none');

        let bannercontainer=document.getElementById('carouselExampleSlidesOnly');

        bannercontainer.classList.remove('opacityhalf');

    }




    return(
        <>
        <div id="totalhomecontainer">
            <div id="popupcontainer" className="none">
                <button type="button" className="popupclosebutton" onClick={closepopup}>X</button>
                <img src="https://i.ibb.co/d7JHQP2/www-mimpiindonesia-com.png" id="popupimage"></img>
                <p> Discount Up To 70% Off Today!</p>

            </div>

            <div id="homecontainer">

            <Banner/>
            <br></br>
            <Category/>
            <br></br><br></br>



            <Count/><br></br>
            <p id="thetext">This text must change</p>
            <Name/>
            <br>
            </br>
            <CatDropdown/>
            <br></br>
            </div>
            </div>




  

        </>
    )
}

export default Home;