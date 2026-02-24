import React from 'react';
import {Link} from 'react-router-dom';


const ListingDisplay = (props) =>{

    const ListingList = ({thecard}) =>{
        if(thecard){
            return thecard.map((item)=>{
                return(
                    <>
                    {item.name}<br></br><br></br>
                    <img src={item.image}/>
                    
                    
                    </>
                )

            })
        }else{
            return(
                <>
                <span>there is nothing</span>
                
                </>
            )
        }

    }





    return(
        <>
        {ListingList(props)} 
        </>
    )



}


export default ListingDisplay;