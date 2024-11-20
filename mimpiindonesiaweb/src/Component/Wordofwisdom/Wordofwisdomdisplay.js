import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";

const Wordofwisdomdisplay = (props) =>{
    const renderdata = ({listData}) => {
        return listData.map((item)=>{
            return(
            <div className="containerwisdom"> {item.name} </div>
            )
        }

         
        )
    }
    return(
        <>
        This is word of wisdom display
        {renderdata(props)}

        </>
    )
}

export default Wordofwisdomdisplay;