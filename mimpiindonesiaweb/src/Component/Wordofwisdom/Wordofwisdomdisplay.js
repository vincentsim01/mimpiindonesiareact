import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";

const Wordofwisdomdisplay = (props) =>{


    const objectifin=[
        {
            "name":"John",
            "email":"john@email.com",
            "telephone":"111222"
        },
        {
            "name":"Jane",
            "email":"jane@email.com",
            "telephone":"333444"
        },
        {
            "name":"Jim",
            "email":"jim@email.com",
            "telephone":"555666"
        }
    ]


    const objectify = [
        {
            name:"John",
            email:"john@email.com",
            telephone:"111222",
            hobby:[
                {name:"Reading", color:"blue"},
                {name:"Writing", color:"green"},
                {name:"Cooking", color:"yellow"}
            ]

        },
        {
            name:"Jane",
            email:"jane@email.com",
            telephone:"333444",
            hobby:[
                {name:"Playing", color:"red"},
                {name:"Running", color:"purple"},
                {name:"Swimming", color:"blue"}
            ]
        },
        {
            name:"Jim",
            email:"jim@email.com",
            telephone:"555666",
            hobby:[
                {name:"Singing", color:"pink"},
                {name:"Dancing", color:"orange"},
                {name:"Painting", color:"green"}
            ]
        }
    ];



    // let objectify3=Object.keys(objectifin[1]);
    // let objectify4=[];

    // for (const obj of objectifin) {
    //     for (const key in obj) {
    //       objectify4.push(`${obj[key]}`); // Log each key-value pair
    //     }
    //   }

    //   console.log(objectify4);

    let objectify2=[];

    for (var obj of objectify){
        for (var key in obj){
            objectify2.push(`${key}, ${obj[key]}`);

        }
    }

    
    


    // console.log(objectify.map((data)=>{
    //     return data.email
    // }));






    const renderdata = ({listData}) => {
        if(listData.length>0){
        return listData.map((item)=>{
            return(
                <>
                <div className="wordofwisdomcontainer">
                    <div className="containerwisdom"> Event:{item.event} </div>
                    <div className="containerwisdom"> Word:{item.word} </div>
                    <div className="containerwisdom"> Figure:{item.figure.map((item2)=>{
                        return(
                            <>
                                name: {item2.name} 
                                <br></br>
                                color: {item2.color}
                            </>
                        )
                    })} 
                    </div>
                    <div>This is objectify
                        <br></br>
                        {objectify.map((item)=>{
                            return(
                                <>
                                {item.hobby.map((item2)=>{
                                    return(
                                        <>
                                        {item2.name}
                                        </>
                                    )
                                })}
                                </>
                            )
                        })}
                    </div>
                    {/* <div>
                        {objectifin.forEach((item)=>{
                 
                                objectify2.push(item.name);
                  


                        })}
                        This is objectify2: {objectify2}


                    </div> */}

                    {/* <div className="containerwisdom"> with map: {objectify.map((item)=>{
                        return(
                            <>
                                objectify: 
                                <br></br>
                                {item.name}
                                <br></br>
                                Hobby: {item.hobby.map((item2)=>{
                                    return(
                                        <>
                                        {item2.name} and {item2.color}
                                        <br></br>
                                        </>
                                    )
                                })}

                      
                            </>
                        )
                    })} 
                    </div>
                    <br></br>
                    <br></br> */}


                    {/* <div className="containerwisdom">
                        Map Within {objectify.map((item)=>{
                            return(
                                <>
                                    {item.hobby.map((item2)=>{
                                        return(
                                            <>
                                                Hobby Name: {item2.name}
                                            
                                            </>
                                        
                                        )
                                    })}
                                
                                
                                </>
                            )
                        })}

                    </div>

                    <br></br><br></br><br></br>
                    <div className="containerwisdom">
                        {objectify3.map((item)=>{
                            return(
                                <>
                                The keys: {item} <br></br>
                                </>
                            )
                        })}

                    </div>
                    <div className="containerwisdom">
                        This is objectify4: {objectify4}

                    </div> */}


                </div>
                </>
            )
        }
        

         
        )
        }else{
            return(
                <div className="containerwisdom">No Data Found</div>
            )
        }
    }
    return(
        <>

        {renderdata(props)}

        </>
    )
}

export default Wordofwisdomdisplay;