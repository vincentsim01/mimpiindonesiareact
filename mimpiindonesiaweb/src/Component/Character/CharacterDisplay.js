import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDisplay = (props) => {
    console.log(">>>",props);
    const characterList=({thecharacter})=>{
        if(thecharacter){
            return thecharacter.map((item)=>{
                return(
                    <span>                    
                        <img src={item.image} alt="1"/><br></br>
                        {item.name}<br></br>
                        {item.provinsi}<br></br>
                    </span>

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
        This is Character Display
        {characterList(props)}
        
        </>
    )
}


export default CharacterDisplay;