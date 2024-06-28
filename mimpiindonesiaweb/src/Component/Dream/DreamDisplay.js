import React from 'react';
import {Link} from 'react-router-dom';

const DreamDisplay = (props) => {
    console.log(">>>",props);
    const dreamList=({thedream})=>{
        if(thedream){
            return thedream.map((item)=>{
                return(
                    <div className="dreamContentContainer col-4">                    
                        <img src={item.image} alt="1"/><br></br>
                        {item.name}<br></br>
                        {item.character}<br></br>
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