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
                        <div className="imgbgcontainer">


                            {/* <div className="bgimage"></div> */}
                            {/* <div className="imgbg"> */}
                                <img src="https://i.ibb.co/8YSDPZC/templatecloudhori.png" className="bgimage"></img>
                            {/* </div> */}

                            {/* <a href="https://ibb.co/XbtyXw7"><img src="https://i.ibb.co/NsK1x49/templatecloud.png" alt="templatecloud" border="0"></a> */}
                            {/* <div className="imgbg">
                                <img src="https://i.ibb.co/X8r31Fk/templatebackaction7399.png" className="bgimage"></img>
                            </div> */}
                            {/* <img src="https://i.ibb.co/X8r31Fk/templatebackaction7399.png"></img>
                            <img src="https://i.ibb.co/X8r31Fk/templatebackaction7399.png"></img> */}
                        </div>
                        {/* <div className="imgbg"></div> */}

                       
                   

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