import React, { useState,useEffect } from 'react';
import './triviafilter.css';
const baseUrl = "http://localhost:9120";

const TriviaFilter = (props) =>{

    const handleChangeKategori = (event) =>{
            if(event.target.value!=="All"){
            fetch(`${baseUrl}/triviafilter?kategori=${event.target.value}`, {method: 'GET'})
            .then((res)=>res.json())
            .then((data)=> props.triviafiltering(data))
        }else{
            fetch(`${baseUrl}/triviafilter`, {method: 'GET'})
            .then((res)=>res.json())
            .then((data)=> props.triviafiltering(data))
        }
    }

    const handleChangeHarga = (event) =>{
        if(event.target.value!=="All"){
            fetch(`${baseUrl}/triviafilter?Harga=${event.target.value}`, {method: 'GET'})
            .then((res)=>res.json())
            .then((data)=> props.triviafiltering(data))
        }else{
            fetch(`${baseUrl}/triviafilter`, {method: 'GET'})
            .then((res)=>res.json())
            .then((data)=> props.triviafiltering(data))
        }
    }

    
    const handleChangeReset = (event) =>{
        fetch(`${baseUrl}/triviafilter`, {method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> props.triviafiltering(data))
    }



    return(
        <>

            <select onChange={handleChangeKategori} id='eventfilterkategori'>
                <option value="Uang dan Finansial">Uang dan Finansial</option>
                <option value="Seni dan Budaya">Seni dan Budaya</option>
                <option value="Olah Raga">Olah Raga</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Nasionalis">Nasionalis</option>
                <option value="All">All</option>
            </select>

            {/* <select onChange={handleChangeHarga}>
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="70">70</option>
            </select> */}


            {/* <div onChange={handleChangeKategori} className="Filter"> Kategori Filter
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
            </div> */}

            <div onChange={handleChangeHarga} className="HargaFilterContainer"> Harga: 
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
            <label className="filterValue">
                <input type="radio" name="harga" value="All"/>All
            </label>
            </div>

            {/* <div onChange={handleChangeReset} className="Filter">
                <label className="filterValue">
                    <input type="radio" name="reset" value="None"/>Reset Filter
                </label>
            </div> */}
        
        
        
        </>
    )
};


export default TriviaFilter;