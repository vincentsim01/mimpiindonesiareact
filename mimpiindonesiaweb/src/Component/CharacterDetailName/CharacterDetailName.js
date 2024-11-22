import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CharacterDetailNameDisplay from './CharacterDetailNameDisplay';
import './CharacterDetailName.css';
const baseUrl = "http://localhost:9120";


const CharacterDetailName = () =>{

    let params = useParams();
    let cardnameid = params.charactername;
    const [Charactercardname,setCharactercardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/character?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setCharactercardname(data));
    },[]);

    console.log(cardnameid);


    return(<>

    <CharacterDetailNameDisplay listData={Charactercardname}/>
    
    
    </>)


}

export default CharacterDetailName;