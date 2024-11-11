import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SubmitCardReview from '../CardReview/SubmitCardReview';
import GetCardReview from '../CardReview/GetCardReview';
const baseUrl = "http://localhost:9120";


const CharacterDetailDisplay = (props) =>{

    let navigate = useNavigate();

    const renderdata = ({listData}) =>{

        const removesessionstorage = () =>{
            sessionStorage.removeItem('cardcharacterdetail');
        }
    

        if (listData){
            if (listData.length>0){
                return listData.map((item)=>{

                    const savesession = () => {
                        sessionStorage.setItem('cardname',JSON.stringify(item.name));
                        navigate('/pickfavcard');
                
                
                    }
                    return(
                        <>
                        <div className="CharacterDetailDisplayContainer">
                            <div className="charactername chracterdetaildisplaycontent"><h1>{item.name}</h1></div>
                            <br></br>
                            <div className="characterimage chracterdetaildisplaycontent"><img src={item.image}/></div>
                            <br></br>
                            <div className="characterNIK chracterdetaildisplaycontent">Surat Izin Penduduk:  {item.NIK}</div>
                            <br></br>
                            <div className="charactergaji chracterdetaildisplaycontent">Gaji: {item.Gaji}</div>
                            <br></br>
                            <div className="characteraction chracterdetaildisplaycontent">Action: {item.Gaji}</div>
                            <br></br>
                            <div className="characterprovince chracterdetaildisplaycontent">Action: {item.provinsi}</div>
                            <br></br>
                            <div className="characterdream chracterdetaildisplaycontent">Dream: <br>
                            </br>
          
                                
                                        {Object.values(item.Dream).map((value, index) => (
                                        <p>{value}</p>
                                        ))}
                               

                            </div>
                            <br></br>
                            <Link to="/Character"><button className="btn btn-info" onClick={removesessionstorage}>Go Back Character</button></Link>
                            <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button> 

           



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


    return (

        <>

        {renderdata(props)}
        
        
        
        </>
    )
}


export default CharacterDetailDisplay;