import React, { useState,useEffect } from 'react';
import ActionDisplay from './ActionDisplay';
import './Action.css';
import ActionFilter from '../ActionFilter/ActionFilter';
const baseUrl="http://localhost:9120";

const Actions = () =>{

    const [actions,setactions]=useState([]);

    useEffect(() =>{
        fetch(`${baseUrl}/actioning`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {setactions(data)})
    },[]);


    const setDataPerFilter = (data) =>{
        setactions(data);
    }

    return(
        <>



            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="https://i.ibb.co/ZgpBbgC/action.png" alt="First slide"></img>
                </div>
            </div>
            </div>

            <div className="theActionFilterContainer container-fluid">        
                <ActionFilter actionfiltering={(data)=>{setDataPerFilter(data)}}/>
            </div><br></br><br></br>
            <h1 align="center">Action Cards </h1>
            <br></br><br></br>


            <div className="themainActionContainer">
                <ActionDisplay theAction={actions}/>
            </div>

        </>
    )
}

export default Actions;