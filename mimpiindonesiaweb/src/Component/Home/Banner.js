import {Link} from 'react-router-dom';
import React, { useState,useEffect } from 'react';


const Banner = () =>{

    return(
        <>
        {/* <img src="https://i.ibb.co/b3ndz7x/Artboard-1-3x.png"></img> */}
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.ibb.co/mSx4gWS/Screenshot-2024-05-29-222015.png" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.ibb.co/b3ndz7x/Artboard-1-3x.png" alt="Second slide"></img>
    </div>

  </div>
</div>


        
        </>
    )

}

export default Banner;