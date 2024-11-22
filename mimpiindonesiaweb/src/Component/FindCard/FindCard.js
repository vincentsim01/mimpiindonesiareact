import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";



var Findcardinputcontent;




const FindCard = () =>{
    const [thecardname,setthecardname] = useState([]);
    const [eventresponse,seteventresponse] = useState([]);
    const [dreamresponse,setdreamresponse] = useState([]);
    let navigate = useNavigate();



    // function fetchevent(thecardname){
    //     fetch(`${baseUrl}/event?name=${thecardname}`)
    //        .then((response) => response.json())
    //        .then((data) => {
    //             useState(data);
    //         });
    // }

    function Findcardinputchange(e){

        Findcardinputcontent = e.target.value;



        fetch(`${baseUrl}/event?name=${Findcardinputcontent}`,{method:'GET'})
        .then((response) => response.json())
        .then((data)=>seteventresponse(data));

        fetch(`${baseUrl}/dream?name=${Findcardinputcontent}`,{method:'GET'})
        .then((response) => response.json())
        .then((data)=>setdreamresponse(data));

        console.log(eventresponse.map((res)=> {return(res.name)}));
        console.log(dreamresponse.map((res)=> {return(res.name)}));

        return Findcardinputcontent;

    }


    function Buttonsearchclick(){
        if(Findcardinputcontent){
            // if(fetch(`${baseUrl}/event?=${Findcardinputcontent}`,{method:'GET'})>0){navigate(`/Eventdetailname/${Findcardinputcontent}`);}
            // else{navigate(`/Dreamdetailname/${Findcardinputcontent}`)};
            // navigate(`/Eventdetailname/${Findcardinputcontent}`)
            // navigate(`/Dreamdetailname/${Findcardinputcontent}`)



            // const eventresponse = fetch(`${baseUrl}/event?=${Findcardinputcontent}`,{method:'GET'}).then(response => response.json()).then((data)=>{eventdata.push(data)});
            // const dreamresponse = fetch(`${baseUrl}/dream?=${Findcardinputcontent}`,{method:'GET'}).then(response => response.json()).then((data)=>{dreamdata.push(data)});
            






            if(eventresponse.length>0){

                   navigate(`/Eventdetailname/${Findcardinputcontent}`);
            }
            else if(dreamresponse.length>0){

                  navigate(`/Dreamdetailname/${Findcardinputcontent}`);
            }
            else{
                alert("No Results Found");
            }
            // fetch(`${baseUrl}/event?=${Findcardinputcontent}`,{method:'GET'})
            //.then((response) => response.json())
            //.then((data) => {
            //     if(data.length>0){navigate(`/eventdetailname/${Findcardinputcontent}`);}
            //     else{navigate(`/dreamdetailname/${Findcardinputcontent}`)};
            // });
            // navigate(`/eventdetailname/${Findcardinputcontent}`)


            

        }
            else{
                alert("Your Search Input is Empty");
        }

    }
    return(
        <>  
            <input id="Findcardinput" onChange={Findcardinputchange} type="text"></input>  <button type="button" onClick={Buttonsearchclick} className="btn btn-info" value="Search">Search</button>
        </>
    )
}
export default FindCard;