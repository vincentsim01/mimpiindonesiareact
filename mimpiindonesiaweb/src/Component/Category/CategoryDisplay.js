import React from 'react';
import {Link} from 'react-router-dom';


const CategoryDisplay = (props) =>{
    const CategoryListing = ({thecategory}) =>{
        if(thecategory){
            return thecategory.map((item)=>{
                return (
                    <>
                    <div className="categorycontainer">
                        <div className="categorycontent">
                    <Link to={`/${item.name}`}>
                    <img className="categoryimage" src={item.image}/>
                    <br></br>
                    <div className="categoryname">{item.name}</div> 
                    </Link>
                    </div>
                    </div>
                    
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
