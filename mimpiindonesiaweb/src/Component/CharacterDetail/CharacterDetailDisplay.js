import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";


const CharacterDetailDisplay = (props) =>{

    let navigate = useNavigate();

    const renderdata = ({listData}) =>{

        const removesessionstorage = () =>{
            sessionStorage.removeItem('cardcharacterdetail');
        }
    

        if (listData){
            if (listData.length>0){
                return listData.map((item)=>{

                    const savesession = () => {
                        sessionStorage.setItem('cardname',JSON.stringify(item.name));
                        navigate('/pickfavcard');
                
                
                    }
                    return(
                        <>
                        <div className="charactername">{item.name}</div>
                        <br></br>
                        <div className="characterimage"><img src={item.image}/></div>
                        <br></br>
                        <Link to="/Character"><button onClick={removesessionstorage}>Go Back Character</button></Link>
                        <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   

                        </>
                    )
                })
            }
        }
    }


    return (

        <>

        {renderdata(props)}
        
        
        
        </>
    )
}


export default CharacterDetailDisplay;