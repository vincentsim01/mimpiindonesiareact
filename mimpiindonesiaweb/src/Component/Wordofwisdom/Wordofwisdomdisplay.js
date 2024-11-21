import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";

const Wordofwisdomdisplay = (props) =>{

    const objectify1=[1,2,3,4,5,6];

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

    console.log(objectify);

    const objectify3=Object.keys(objectifin);

    console.log("this is objectify3"+objectify3);
    console.log(objectify3);



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
                    })} </div>

                    <div className="containerwisdom"> with map: {objectify.map((item)=>{
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

                    <div className="containerwisdom">
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
        This is word of wisdom display
        {renderdata(props)}

        </>
    )
}

export default Wordofwisdomdisplay;