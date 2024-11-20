import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';

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
        This is word of wisdom

        </>
    )
}

export default Wordofwisdom;