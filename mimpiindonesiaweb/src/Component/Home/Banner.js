import {Link} from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import './Banner.css';


const Banner = () =>{

    return(
        <>
        {/* <img src="https://i.ibb.co/b3ndz7x/Artboard-1-3x.png"></img> */}
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.ibb.co/f486XLY/cover-1.png" alt="First slide"></img>
    </div>


  </div>
</div>


        
        </>
    )

}

export default Banner;