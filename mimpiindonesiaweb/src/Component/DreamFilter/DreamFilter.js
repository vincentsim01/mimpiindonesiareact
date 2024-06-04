import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import axios from 'axios';

import DreamFilterDisplay from './DreamFilterDisplay';


const baseUrl = "http://localhost:9120";


const DreamFilter = (props) =>{
    let dreamUrl = "";
    const [dreamcharacter,setdreamcharacter] = useState([]);
    const [dreamcharacter2,setdreamcharacter2] = useState([]);

    useEffect(() =>{
        fetch(`${baseUrl}/dream`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> setdreamcharacter2(data))

    },[])

    const handlefilter = (event) =>{


            dreamUrl = `${baseUrl}/dreamfilter?character=${event.target.value}`;


            // fetch(dreamUrl, {method: 'GET'})
            // .then((res)=> {props.dreamfiltering(res.data)})
  


            axios.get(dreamUrl)
            .then((res) => {props.dreamfiltering(res.data)})

        
    }


    const DreamDropdown = ({dreamcharacter2}) =>{
        if(dreamcharacter2){
            return dreamcharacter2.map((data)=>{
                return(
                    <>

                        <option value={data.character}>{data.character}</option>

                    </>
                )
            })
        }

    }

    const DreamDropdown2 = () =>{
        return dreamcharacter2.map((data)=>{
            return(<>
                <option value={data.character}>{data.character}</option>
                </>

            )
        })
    }






    return (

        <>
        <div>Dream Filter</div>

        <select onChange={handlefilter}>
            <option value="">Select All</option>

            {/* {DreamDropdown(props)} */}
            {DreamDropdown2(props)}

            </select>


        
        </>
    )
}

export default DreamFilter;