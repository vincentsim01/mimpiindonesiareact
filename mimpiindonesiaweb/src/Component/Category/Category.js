import React, { useState,useEffect } from 'react';
import CategoryDisplay from './CategoryDisplay';
import FindCard from '../FindCard/FindCard';
import CatDropdown from '../CategoryDropdown/CatDropdown';
import './Category.css';
const baseUrl="http://localhost:9120";



const Category = () =>{


    const [category,setcategory]=useState([]);
    fetch(`${baseUrl}/cardcategory`,{method:'GET'})
        .then ((res)=>res.json())
        .then((data)=>setcategory(data))

    return (
        <>
        <div className="categorycontainertop">

        <CategoryDisplay thecategory={category}/>
        <br></br>
        <div className="misccontainer">
            <br></br>
            <br></br>
            <FindCard/>
            <br></br>
            <br></br>
            <CatDropdown/>
            <br></br>
        </div>
        </div>
        
        
        </>
    )
}

export default Category;