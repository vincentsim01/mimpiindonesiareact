import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Wordofwisdomdisplay from './Wordofwisdomdisplay';

const baseUrl = "http://localhost:9120";

const Wordofwisdom = () =>{
    const [usewordwisdom, setusewordwisdom] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/wordofwisdom`,{method:'GET'})
       .then((res) => res.json())
       .then((data) => setusewordwisdom(data))
    }, [])


    return(
        <>

        <Wordofwisdomdisplay listData={usewordwisdom}/>

        </>
    )
}

export default Wordofwisdom;