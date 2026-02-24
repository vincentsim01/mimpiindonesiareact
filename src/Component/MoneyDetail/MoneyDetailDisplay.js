import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SubmitCardReview from '../CardReview/SubmitCardReview';
import GetCardReview from '../CardReview/GetCardReview';
const baseUrl = "http://localhost:9120";



const MoneyDetailDisplay = (props) =>{

    let navigate = useNavigate();

    const removesessionstorage = () =>{
        sessionStorage.removeItem('cardmoneydetail');
    }




    const renderMoneyDetail = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){   
                return listData.map((item) => {

                    const savesession = () => {
                        sessionStorage.setItem('cardname',JSON.stringify(item.name));
                        navigate('/pickfavcard');
                
                
                    }
                    return(<>
                        <div className='item' key={item._id}>
                            <div className=' moneydetaildisplaycontainer2'>

                                    <div className="moneydetailname"><h1>This is Money Rp {item.name} Milyar</h1></div>
                                    <div className="moneydetailimage"><img src={item.image} alt={item.image}
                                    className='MoneyImage'/></div>
                                    <div className="moneydetailbuttoncontainer">

                                            <Link to="/Money"><button className="btn btn-info" onClick={removesessionstorage} >Go Back Money</button></Link>


                                            <button className="btn btn-primary addfavouritebutton" onClick={savesession}>Add as Favorite</button>   

                                    </div>


                                </div>


                                  
                                




                            

                        </div>
                        <br></br>


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
                


    // const renderMoneyDetail2 = ({listData}) =>{

    //     const renderData = ({listData}) => {
    //         if(listData){
    //             if(listData.length > 0 ){   
    //                 return listData.map((item) => {
    //                     return(

    //                         <>

    //                             {item.name}<br></br>
    //                             <img src={item.image}/><br></br>
                            
    //                         </>

    //                     )

    //                 }
    //             )
    //             }
    //         }
    //     }
    // }








//     //     if(listData){
//     //         return listData.map((item)=>{
//     //             return(
//     //                 <>
//     //                 {item.name}<br></br>
//     //                 <img src={item.image}/><br></br>
                    
//     //                 </>
//     //             )
//     //         })

//     //     }else{
//     //         return(
//     //             <>
//     //             This Fail</>
//     //         )
//     //     }
//     // }


    return(
        <>

        {renderMoneyDetail(props)}
        <br></br>
        {/* {renderMoneyDetail2(props)} */}
        
        </>
    )
}

export default MoneyDetailDisplay;