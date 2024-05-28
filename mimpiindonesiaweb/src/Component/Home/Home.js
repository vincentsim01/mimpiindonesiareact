import React from 'react';
import './Home.css';
import Banner from './Banner';
import Count from '../Count/Count';
import Category from '../Category/Category';



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

        popupcontainer.classList.remove('none');
    }


    setTimeout(becomepopup,1000);


    function closepopup(){
        var popupcontainer = document.getElementById('popupcontainer');
        popupcontainer.classList.add('none');

    }




    return(
        <>
            <div id="popupcontainer" className="none">
                <button type="button" className="popupclosebutton" onClick={closepopup}>X</button>
                <p> Discount 50% Off Today!</p>

            </div>



            <Banner/>
            <br></br>
            <Category/>
            <br></br><br></br>


            <Count/>

        </>
    )
}

export default Home;