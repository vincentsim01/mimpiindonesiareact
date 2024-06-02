import React from 'react';
import {Link} from 'react-router-dom';


const DreamListingDisplay = (props) =>{
    const DreamListingList = ({cardname})=> {
        if (cardname){
            return cardname.map((item)=>{
                return (
                    <>
                    {item.name}
                    <br></br>
                    <img src={item.image}/>
                    
                    </>
                )

            })
        }
    }


    return(

        <>

        {DreamListingList(props)}
        
        
        
        
        </>
    )
}


export default DreamListingDisplay;