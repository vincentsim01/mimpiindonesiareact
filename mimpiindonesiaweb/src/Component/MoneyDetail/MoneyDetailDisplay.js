import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";



const MoneyDetailDisplay = (props) =>{

    const renderMoneyDetail = ({listData}) =>{
        if(listData){
            return(
                <>
                This is ListData Success
                
                </>
            )
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