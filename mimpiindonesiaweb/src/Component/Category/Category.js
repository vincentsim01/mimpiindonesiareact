import React, { useState,useEffect } from 'react';
import CategoryDisplay from './CategoryDisplay';
import './Category.css';
const baseUrl="http://localhost:9120";



const Category = () =>{


    const [category,setcategory]=useState([]);
    fetch(`${baseUrl}/cardcategory`,{method:'GET'})
        .then ((res)=>res.json())
        .then((data)=>setcategory(data))

    return (
        <>

        <CategoryDisplay thecategory={category}/>
        
        
        </>
    )
}

export default Category;