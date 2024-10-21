import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";

const DreamDetailDisplay = (props) => {

    const removesession = () =>{
        sessionStorage.removeItem('carddreamdetail');


    }


    const renderDream = ({listData})=>{

        if(listData){
            return listData.map((item)=>{
                // const savesession = () = {
                //     sessionStorage.setItem('cardname',JSON.stringify(item.name));
                //     navigate('/pickfavcard');

                // }

                return(
                    <>
                    <img src={item.image}/>
                    <br></br>
                    {item.name}
                    <br></br>
                    {item.character}
                    
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

        This is DreamDetailDisplay
        {renderDream(props)}
        
        
        
        
        </>
    )
}


export default DreamDetailDisplay;