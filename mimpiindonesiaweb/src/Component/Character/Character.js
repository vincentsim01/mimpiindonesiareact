
import React, { useState,useEffect } from 'react';
import './Character.css';
import CharacterDisplay from './CharacterDisplay';
const baseUrl = "http://localhost:9120";



const Character= () =>{
    const [character,setcharacter] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/character`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setcharacter(data)

        })
    },[])



    return(
        <>
        <div id="characterbannercontainer">
    
            <div id="bgimagecharacter">            <h1 style={{color:"white"}}><br></br><br></br><br></br>CHOOSE YOUR CHARACTER</h1></div>
        </div>
        <br></br><br></br>
        <h1 align="center">Character Cards </h1>
        <CharacterDisplay thecharacter={character}/>
        </>
    )
}

export default Character;