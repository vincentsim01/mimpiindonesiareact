import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SubmitCardReview from '../CardReview/SubmitCardReview';
const baseUrl = "http://localhost:9120";

const DreamDetailDisplay = (props) => {

    let navigate = useNavigate();

    const removesessionstorage = () =>{
        sessionStorage.removeItem('carddreamdetail');
    }


    const renderDream = ({listData})=>{

        if(listData){
            return listData.map((item)=>{
                const savesession = () => {
                    sessionStorage.setItem('cardname',JSON.stringify(item.name));
                    navigate('/pickfavcard');
            
            
                }

                return(
                    <>
                    <img src={item.image}/>
                    <br></br>
                    {item.name}
                    <br></br>
                    {item.character}
                    <br></br>
                    <Link to="/Dream"><button onClick={removesessionstorage}>Go Back Dream</button></Link>
                    <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button> 
                    <br></br> 
                    <SubmitCardReview zacardname={item.name}/> 
                    
                    </>
                )

            }
    
            )

        }else{
            return(
                <>
                No Data from DreamDetail
                
                </>
            )
        
            
        }




    }






    return(


        <>

        {renderDream(props)}
        
        
        
        
        </>
    )
}


export default DreamDetailDisplay;