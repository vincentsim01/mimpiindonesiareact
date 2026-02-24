import React, { useState,useEffect } from 'react';
import './Name.css';



const Name = () =>{


   var [name,setname]= useState([]);

    function nameupdate(e){
        var thetext=document.getElementById('thetext');
        var name2="Welcome to Mimpi Indonesia "+e.target.value;
       thetext.innerHTML=name2;

    }


    return(
        <>
        <div id="inputNameContainer">

            <input type="text" onChange={nameupdate}></input>
        {/* <p id="thetext">This text must change</p> */}

        </div>
        
        
        </>
    )
}

export default Name;