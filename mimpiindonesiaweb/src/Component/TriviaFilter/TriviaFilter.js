import React, { useState,useEffect } from 'react';
const baseUrl = "http://localhost:9120";

const TriviaFilter = (props) =>{

    const handleChangeKategori = (event) =>{
        fetch(`${baseUrl}/triviafilter?kategori=${event.target.value}`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.triviafiltering(data))
    }

    const handleChangeHarga = (event) =>{
        fetch(`${baseUrl}/triviafilter?Harga=${event.target.value}`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.triviafiltering(data))
    }

    
    const handleChangeReset = (event) =>{
        fetch(`${baseUrl}/triviafilter`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.triviafiltering(data))
    }



    return(
        <>

            This is Trivia Kategori Filter
            <div onChange={handleChangeKategori} className="Filter">
            <label className="filterValue"> 
                <input type="radio" name="kategori" value="Uang dan Finansial"/>Uang dan Finansial
            </label>
            <label className="filterValue">
                <input type="radio" name="kategori" value="Seni dan Budaya"/>Seni dan Budaya
            </label>
            <label className="filterValue">
                <input type="radio" name="kategori" value="Olah Raga"/>Olah Raga
            </label>
            <label className="filterValue">
                <input type="radio" name="kategori" value="Teknologi"/>Teknologi
            </label>
            <label className="filterValue">
                <input type="radio" name="kategori" value="Nasionalis"/>Nasionalis
            </label>
            </div>

            <div onChange={handleChangeHarga} className="Filter">
            <label className="filterValue"> 
                <input type="radio" name="harga" value="10"/>10
            </label>
            <label className="filterValue">
                <input type="radio" name="harga" value="30"/>30
            </label>
            <label className="filterValue">
                <input type="radio" name="harga" value="50"/>50
            </label>
            <label className="filterValue">
                <input type="radio" name="harga" value="70"/>70
            </label>
            </div>

            <div onChange={handleChangeReset} className="Filter">
                <label className="filterValue">
                    <input type="radio" name="reset" value="None"/>Reset Filter
                </label>
            </div>
        
        
        
        </>
    )
};


export default TriviaFilter;