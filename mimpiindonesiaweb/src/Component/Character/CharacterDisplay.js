import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDisplay = (props) => {
    console.log(">>>",props);
    const characterList=({thecharacter})=>{
        if(thecharacter){
            return thecharacter.map((item)=>{
                return(
                    <div className="charactercontainer">                    
                        <div className="characterindividual">
                            <img src={item.image} className="imagecharacter" alt="1"/><br></br>
                            <span className="charactername">{item.name}<br></br></span>
                            <span className="characterprovince">{item.provinsi}<br></br></span>
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
        This is Character Display
        {characterList(props)}
        
        </>
    )
}


export default CharacterDisplay;