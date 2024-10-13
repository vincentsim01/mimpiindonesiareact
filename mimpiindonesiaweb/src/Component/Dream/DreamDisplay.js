import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DreamDisplay = (props) => {
    let navigate = useNavigate();

    console.log(">>>",props);
    const dreamList=({thedream})=>{
        if(thedream){
            return thedream.map((item)=>{
                const savesession = () => {
                    sessionStorage.setItem('cardname',JSON.stringify(item.name));
                    navigate('/pickfavcard');
    
            
                }
                return(
                    <div className="dreamContentContainer">  
                        <div className="dreamName">{item.name} </div><br></br>                  
                        <div className="imageContainer"><img src={item.image} className="dreamImage" alt="1"/></div><br></br>
                        <div className="dreamCharacter">Karakter: {item.character}</div><br></br>
                        <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
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
   
        {dreamList(props)}
        
        </>
    )
}


export default DreamDisplay;