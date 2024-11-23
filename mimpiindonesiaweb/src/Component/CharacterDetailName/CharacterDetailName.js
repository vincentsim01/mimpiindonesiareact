import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CharacterDetailNameDisplay from './CharacterDetailNameDisplay';
import './CharacterDetailName.css';
const baseUrl = "http://localhost:9120";


const CharacterDetailName = () =>{
    let navigate = useNavigate();

    let params = useParams();
    let cardnameid = params.charactername;
    const [Charactercardname,setCharactercardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/character?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setCharactercardname(data));
    },[]);



    const previousbutton = () =>{
        function previousevent(){
                sessionStorage.setItem('cardcharacterdetail',JSON.stringify(1));
                navigate(`/characterdetail/${1}`)
        }
        return(   
            <>
            <div className="previousbuttonins" onClick={previousevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="previouschevronimg" src="https://i.ibb.co/j3vDCBq/chevron2.png"></img>
            </div>
             </>    
        )

    }

    const nextbutton = () =>{
        function nextevent(){
                sessionStorage.setItem('cardcharacterdetail',JSON.stringify(3));
                navigate(`/characterdetail/${3}`)
        }
        return(   
            <>
                <div className="nextbuttonins" onClick={nextevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img>
                </div>
             </>    
        )
    }


    return(<>
            <div className="characterdetailcontainer">
            <div className="twoButtons">
            <div className="previousbutton">{previousbutton()}</div>
            <div className="nextbutton"><br></br>{nextbutton()}</div>

                <CharacterDetailNameDisplay listData={Charactercardname}/>
                </div>


            </div>
            
    
    </>)


}

export default CharacterDetailName;