import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';


const baseUrl = "http://localhost:9120";

const ViewOrder = () => {
    const [orders,setOrder] = useState('');
    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)






    useEffect(() => {
        axios.get(`${baseUrl}/orders?email=${data.email}`).then((res) => {setOrder(res.data)})
    },[]);

        // useEffect(() => {
        //     // axios.get(`${baseUrl}/orders`)
        //     // .then((res) =>  console.log("this is the response from view order"+res))
        //     // .then((data) => {
        //     //     setOrder(data);
    
        //     // })


        //     fetch(`${baseUrl}/orders?email=${emaili}`,{method:'GET'})
        //     .then((res) =>  res.json())
        //     .then((data) => {
        //         setOrder(data);
        //     })
        // },[]);





    return(
        <>


            <DisplayOrder orderData={orders}/>
        </>
    )
}

export default ViewOrder;                    