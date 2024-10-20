import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const baseUrl = "http://localhost:9120";



const MoneyDetailDisplay = (props) =>{

    const removesessionstorage = () =>{
        sessionStorage.removeItem('cardmoneydetail');
    }

    const renderMoneyDetail = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){   
                return listData.map((item) => {
                    return(
                        <div className='item' key={item._id}>
                            <div className='row rowi'>
                                <div className='col-md-5'>
                                    <img src={item.image} alt={item.image}
                                    className='Image'/>
                                </div>


                                  
                                
                            </div>

                        </div>
                    )
                })
            }

        }
    }
                


//     const renderMoneyDetail = ({listData}) =>{

//         const renderData = ({listData}) => {
//             if(listData){
//                 if(listData.length > 0 ){   
//                     return listData.map((item) => {
//                         return(

//                             <>

//                                 {item.name}<br></br>
//                                 <img src={item.image}/><br></br>
                            
//                             </>

//                         )

//                     }
//                 }
//             }
//         }








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
        
        </>
    )
}

export default MoneyDetailDisplay;