import React, { useState,useEffect } from 'react';
const baseUrl = "http://localhost:9120";


const CatDropdown = () =>{

    const [categ, setcateg]=useState([]);

    useEffect(() =>{
        fetch(`${baseUrl}/cardcategory`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>setcateg(data))
    },[]
)

    return(
        <>

        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        </>

    )
}

export default CatDropdown;