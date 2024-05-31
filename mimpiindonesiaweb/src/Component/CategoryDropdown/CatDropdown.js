import React, { useState,useEffect } from 'react';
const baseUrl = "http://localhost:9120";


const CatDropdown = () =>{

    const [categ, setcateg]=useState([]);
    const [categspecific, setcategspecific]=useState([]);

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
                    <option value={item.name} key={item.id}>
                        {item.name}

                    </option>
                    </>
                )
            }
            )
        }

    }

    const handleCategory = (event) =>{
        let dacategory=event.target.value;
        fetch(`${baseUrl}/${dacategory}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => setcategspecific(data))
    }


    const renderCategSpecific= (data) => {
        if(data){
            return data.map((item)=>{

                return(
                    <>
                    <option value={item.name} key={item.id}>
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

        <select onChange={handleCategory}>
            {renderCategory(categ)}
        </select>


        <select>
            {renderCategSpecific(categspecific)}
        </select>
        </>

    )
}

export default CatDropdown;