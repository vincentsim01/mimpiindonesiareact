import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SubmitCardReview from '../CardReview/SubmitCardReview';
import GetCardReview from '../CardReview/GetCardReview';

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
                        <img src={item.image} className="imgbg"></img>

                        <div className="row ActionDetailDisplayName"><h1>{item.name}</h1></div><br></br>
                        <div className="row ActionDetailDisplayImageContainer"><img className="ActionDetailDisplayImage" src={item.image}/></div><br></br><br></br><br></br>
                        <div className="row ActionDetailDisplayEffect">{item.effect}</div><br></br>
                        <br></br>
                        <div className="buttoncontainer">
                            <Link to="/Actioning"><button className="btn btn-info" onClick={removesessionstorage}>Go Back Action</button></Link>
                            <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
                        </div>
                    </div>

                    <div className="ReviewContainer">
                        <br></br>                       

                        <GetCardReview zacardname={item.name}/>
                        <br></br>                      

                        <SubmitCardReview zacardname={item.name}/>
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