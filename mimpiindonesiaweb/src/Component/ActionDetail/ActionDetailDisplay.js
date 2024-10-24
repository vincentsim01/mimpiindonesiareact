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

                    {item.name}
                    <img src={item.image}/>
                    <Link to="/Actioning"><button onClick={removesessionstorage}>Go Back Action</button></Link>
                    <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
                    
                    
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