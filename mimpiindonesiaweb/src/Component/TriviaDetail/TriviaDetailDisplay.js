import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
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
                            <div className="triviadisplayimage">
                                <img src={item.image}/>
                            </div>
                            <br></br>

                            <div className="triviadisplayname">{item.name}</div>
                            <br></br>
                            <div className="triviadisplaybuttoncontainer">
                                <Link to="/Trivia"><button onClick={removesessionstorage}>Go Back Trivia</button></Link>
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

        {renderdisplaydetail(props)}
        
        
        </>
    )





}


export default TriviaDetailDisplay;