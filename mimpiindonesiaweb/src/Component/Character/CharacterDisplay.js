import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CharacterDisplay = (props) => {
    let navigate = useNavigate();

    console.log(">>>",props);
    const characterList=({thecharacter})=>{
        if(thecharacter){
            return thecharacter.map((item)=>{

                const savesession = () => {
                    sessionStorage.setItem('cardname',JSON.stringify(item.name));
                    navigate('/pickfavcard');
    
            
                }
                return(
                    <div className="charactercontainer">                    
                        <div className="characterindividual">
                            <img src={item.image} className="imagecharacter" alt="1"/><br></br>
                            <span className="charactername">{item.name}<br></br></span>
                            <span className="characterprovince">{item.provinsi}<br></br></span>
                            <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
                        </div>
                    </div>

                )
            }
        
        
        
        )
        } else {
        return(
        <>There is nothing to return</>)
        }
    }


    return(
        <>

        <br>
        </br>
        {characterList(props)}
        
        </>
    )
}


export default CharacterDisplay;