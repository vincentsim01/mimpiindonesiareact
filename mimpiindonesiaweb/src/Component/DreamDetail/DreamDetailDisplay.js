import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SubmitCardReview from '../CardReview/SubmitCardReview';
import GetCardReview from '../CardReview/GetCardReview';
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
                    <div className="dreamdetailcontainer">
                        <div className="dreamdetailname dreamdetailcontent"><h1>{item.name}</h1></div>
                        <br></br>
                        <div className="dreamdetailimage dreamdetailcontent"><img src={item.image}/></div>
                        <br></br>

                        <div className="dreamdetailcharacter dreamdetailcontent">Karakter: {item.character}</div>
                        <br></br>
                        <div className="dreamdetailharga dreamdetailcontent">Harga: Rp {item.Harga} M</div>
                        <br></br>
                    <Link to="/Dream"><button className="btn btn-info" onClick={removesessionstorage}>Go Back Dream</button></Link>
                    <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button> 
                    <br></br> 
                    </div>

                    <div className="dreamdetailreviewcontainer">
                    <GetCardReview zacardname={item.name}/>
                    <SubmitCardReview zacardname={item.name}/> 
                    </div>
                    
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