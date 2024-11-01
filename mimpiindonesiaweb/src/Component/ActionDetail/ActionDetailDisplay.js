import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";


const ActionDetailDisplay = (props) => {

    let navigate = useNavigate();
    const renderdata = ({listData}) => {
        const removesessionstorage = () =>{
            sessionStorage.removeItem('cardactiondetail');
        }
        if(listData){
            if(listData.length){
                return listData.map((item)=>{

                    const savesession = () => {
                        sessionStorage.setItem('cardname',JSON.stringify(item.name));
                        navigate('/pickfavcard');
                
                
                    }
                    return(
                    <>
                    <div className="container-fluid ActionDetailDisplayContainer">

                        <div className="row ActionDetailDisplayName">{item.name}</div><br></br>
                        <div className="row ActionDetailDisplayImageContainer"><img className="ActionDetailDisplayImage" src={item.image}/></div><br></br>
                        <div className="buttoncontainer">
                            <Link to="/Actioning"><button onClick={removesessionstorage}>Go Back Action</button></Link>
                            <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
                        </div>
                    </div>
                    
                    
                    </>

                    )

                })
            }
        }
    }



    return(
        <>

        {renderdata(props)}



        </>
    )
};

export default ActionDetailDisplay;