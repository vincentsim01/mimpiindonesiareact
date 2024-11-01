import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
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
                    return(
                        <div className='item' key={item._id}>
                            <div className='row rowi moneydetaildisplaycontainer'>
                                <div className='col-md-5'>
                                    <div className="moneydetailname">This is Money Rp {item.name} Milyar</div>
                                    <div className="moneydetailimage"><img src={item.image} alt={item.image}
                                    className='MoneyImage'/></div>
                                    <div className="moneydetailbuttoncontainer">
                                    <div className="moneybutton">
                                        <Link to="/Money"><button onClick={removesessionstorage} >Go Back Money</button></Link>
                                    </div>
                                    <div className="moneybutton">
                                        <button className="btn btn-primary" onClick={savesession} className="addfavouritebutton">Add as Favorite</button>   

                                    </div>
                                    </div>


                                </div>


                                  
                                
                            </div>

                        </div>
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