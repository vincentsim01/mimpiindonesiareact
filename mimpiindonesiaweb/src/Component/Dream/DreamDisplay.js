import React from 'react';
import {Link} from 'react-router-dom';

const DreamDisplay = (props) => {
    console.log(">>>",props);
    const dreamList=({thedream})=>{
        if(thedream){
            return thedream.map((item)=>{
                return(
                    <span>                    
                        <img src={item.image} alt="1"/><br></br>
                        {item.name}<br></br>
                        {item.character}<br></br>
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
   
        {dreamList(props)}
        
        </>
    )
}


export default DreamDisplay;