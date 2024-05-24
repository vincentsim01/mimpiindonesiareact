import React from 'react';
import {Link} from 'react-router-dom';


const CategoryDisplay = (props) =>{
    const CategoryListing = ({thecategory}) =>{
        if(thecategory){
            return thecategory.map((item)=>{
                return (
                    <>
                    <img src={item.image}/>
                    {item.name}
                    
                    </>
                )
            })
        }

    }


    return(
        <>
        {CategoryListing(props)}
        
        
        
        </>



    )
}


export default CategoryDisplay;
