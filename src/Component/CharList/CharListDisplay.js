import React from 'react';
import {Link} from 'react-router-dom';


const CharListDisplay = (props) =>{
    const CharListList = ({cardname}) => {
        if(cardname){
            return cardname.map((item)=>{
                return(
                    <>
                    {item.name}<br></br>
                    <img src={item.image}/>
                    
                    
                    </>
                )
            })
        }

    }



    return(
        <>
                <>
        <div>CharListing Display</div>
        {CharListList (props)}
        
        </>
        
        </>
    )
}

export default CharListDisplay;