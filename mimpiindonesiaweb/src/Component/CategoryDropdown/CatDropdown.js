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

    const renderCategory = (data) => {
        if(data){
            return data.map((item)=>{

                return(
                    <>
                    <option value={item.id} key={item.id}>
                        {item.name}

                    </option>
                    </>
                )
            }
            )
        }

    }

    return(
        <>

        <select>
            {renderCategory(categ)}
        </select>
        </>

    )
}

export default CatDropdown;