import React from 'react';
import {Link} from 'react-router-dom';


const CategoryDisplay = (props) =>{
    const CategoryListing = ({thecategory}) =>{
        if(thecategory){
            return thecategory.map((item)=>{
                return (
                    <>
                    <Link to={`/${item.name}`}>
                    <img src={item.image}/>
                    {item.name}
                    </Link>
                    
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
