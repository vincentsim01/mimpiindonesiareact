import React from 'react';
import {Link} from 'react-router-dom';

const DreamDisplay = (props) => {
    console.log(">>>",props);
    const dreamList=({thedream})=>{
        if(thedream){
            return thedream.map((item)=>{
                return(
                    <div className="dreamContentContainer">                    
                        <div className="imageContainer"><img src={item.image} className="dreamImage" alt="1"/></div><br></br>
                        <div className="dreamName">{item.name} </div><br></br>
                        <div className="dreamCharacter">Karakter: {item.character}</div><br></br>
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