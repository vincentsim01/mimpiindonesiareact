import React, { useState,useEffect } from 'react';



const Name = () =>{


   var [name,setname]= useState([]);

    function nameupdate(e){
        var thetext=document.getElementById('thetext');
        var name2=e.target.value;
       thetext.innerHTML=name2;

    }


    return(
        <>

        <input type="text" onChange={nameupdate}></input>
        {/* <p id="thetext">This text must change</p> */}
        
        
        </>
    )
}

export default Name;