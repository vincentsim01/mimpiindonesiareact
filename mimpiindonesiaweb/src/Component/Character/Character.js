
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
        <h1 align="center">Character Cards </h1>
        <CharacterDisplay thecharacter={character}/>
        </>
    )
}

export default Character;