import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetailDisplay from './CharacterDetailDisplay';
const baseUrl = "http://localhost:9120";



const CharacterDetail = () =>{

    const [characterdetail, setcharacterdetail] = useState([]);

    const sessionData = sessionStorage.getItem('cardcharacterdetail');

    useEffect(()=>{
        fetch(`${baseUrl}/characterdetail/${sessionData}`)
        .then((res) => res.json())
        .then((data) =>{
            setcharacterdetail(data);
        })

    },[])





    return(
        <>

        <CharacterDetailDisplay listData={characterdetail}/>
        
        </>
    )
}

export default CharacterDetail;