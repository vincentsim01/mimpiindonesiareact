import React,{useState, useEffect} from 'react';
const baseUrl = "http://localhost:9120";


const EventDetailDisplay = (props) => {

    const renderdata = ({listData}) => {
        if(listData){
            if(listData.length>0){   
                return listData.map((item)=>{
                    return(
                        <>
                                 {item.name}
                                 <br></br>
                                 <img src={item.image} alt={item.image}/>
                        </>
                    )
                })


            }else{
                return(
                    <div className="item"><h2>No Data Found</h2></div>
                )
            }


        }


    }

    return(

        <>


       
            {renderdata(props)}

        
        
        
        </>
    )




};


export default EventDetailDisplay;