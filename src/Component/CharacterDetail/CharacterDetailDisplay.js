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
                            <div className="charactername"><h1>{item.name}</h1></div>
                            <br></br>
                            <div className="characterimage"><img src={item.image}/></div>
                            <br></br>
                            <div className="characterdisplaytext">
                                <div className="characterdisplaytext2">
                                    <span className="characterNIK characterdetaildisplaycontent">Surat Izin Penduduk:  {item.NIK}</span>

                                    <span className="charactergaji characterdetaildisplaycontent">Gaji: {item.Gaji}</span>
                   
                                    <span className="characteraction characterdetaildisplaycontent">Action: {item.Gaji}</span>
                     
                                    <span className="characterprovince characterdetaildisplaycontent">Action: {item.provinsi}</span>
                                    <br></br>
                      

                                    <br></br>

                                </div>

                                <div className="characterdream ">Dream: <br>
                                    </br>
                
                                        
                                                {Object.values(item.Dream).map((value, index) => (
                                                <p>{value}</p>
                                                ))}
                                    

                                    </div>
                            </div>
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