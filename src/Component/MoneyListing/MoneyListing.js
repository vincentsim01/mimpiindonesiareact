import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams} from 'react-router-dom';
import MoneyListingDisplay from './MoneyListingDisplay';


const baseUrl = "http://localhost:9120";



const MoneyListing = () => {

    let [searchParams] = useSearchParams();
    const [categ,setcateg] = useState([]);


    let cardnamez = searchParams.getAll('name');
    let cardnamequery=Number(cardnamez);

    useEffect(() => {
        fetch(`${baseUrl}/money?name=${cardnamequery}`)
        .then((res)=>res.json())
        .then((data)=>setcateg(data))



    },[]);



    return(

        <>
        <div>
        This is Money Listing
        <MoneyListingDisplay cardname={categ}/>
        </div>
        </>
    )

    
}

export default MoneyListing;