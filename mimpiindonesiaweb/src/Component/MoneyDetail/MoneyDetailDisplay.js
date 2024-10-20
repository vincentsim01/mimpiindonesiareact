import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";



const MoneyDetailDisplay = (props) =>{

    const renderMoneyDetail = ({listData}) =>{
        if(listData){
            return listData.map((item)=>{
                return(
                    <>
                    {item.name}<br></br>
                    <img src={item.image}/><br></br>
                    
                    </>
                )
            })

        }else{
            return(
                <>
                This Fail</>
            )
        }
    }


    return(
        <>

        {renderMoneyDetail(props)}
        
        </>
    )
}

export default MoneyDetailDisplay;