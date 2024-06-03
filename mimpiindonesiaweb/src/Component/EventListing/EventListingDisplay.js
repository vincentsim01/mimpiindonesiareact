import React from 'react';
import {Link} from 'react-router-dom';

const EventListingDisplay = (props) =>{
    const EventListingList = ({cardname}) => {
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
        <div>EventListing Display</div>
        {EventListingList (props)}
        
        </>
    )
}

export default EventListingDisplay;