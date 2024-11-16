import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SubmitCardReview from '../CardReview/SubmitCardReview';
import GetCardReview from '../CardReview/GetCardReview';
const baseUrl = "http://localhost:9120";


const TriviaDetailDisplay = (props) =>{

    let navigate = useNavigate();


    const renderdisplaydetail = ({listData}) =>{

        if(listData){
            if(listData.length>0){

                const removesessionstorage = () =>{
                    sessionStorage.removeItem('cardtriviadetail');
                }
            

                return listData.map((item)=>{

                    const savesession = () => {
                        sessionStorage.setItem('cardname',JSON.stringify(item.name));
                        navigate('/pickfavcard');
                
                
                    }


                    return(
                        <>
                        <div className="triviadetaildisplaycontainer">
                            <div className="triviaimagebgcontainer">
                                <img className="triviaimagebg" src="https://i.ibb.co/98Yv8Cw/RGB-02.jpg"></img>
                                

                            </div>
                            <div className="triviadisplayname"><h1>{item.name}</h1></div>
                            <br></br>
                            <div className="triviadisplayimage">
                                <img src={item.image}/>
                            </div>
                            <br></br>


                            <div className="triviadisplaybuttoncontainer">
                                <Link to="/Trivia"><button onClick={removesessionstorage}>Go Back Trivia</button></Link>
                                <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>  
                            </div>
                        </div> 

                        <div className="ReviewContainer">
                        <br></br> <br></br> <br></br>                     

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

        {renderdisplaydetail(props)}
        
        
        </>
    )





}


export default TriviaDetailDisplay;