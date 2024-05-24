import React, { useState,useEffect } from 'react';
import CategoryDisplay from './CategoryDisplay';
const baseUrl="http://localhost:9120";



const Category = () =>{


    const [category,setcategory]=useState([]);
    fetch(`${baseUrl}/cardcategory`,{method:'GET'})
        .then ((res)=>res.json())
        .then((data)=>setcategory(data))

    return (
        <>
        This is Category
        <br>
        </br>
        <CategoryDisplay thecategory={category}/>
        
        
        </>
    )
}

export default Category;