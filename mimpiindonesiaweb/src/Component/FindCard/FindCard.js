import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";



var Findcardinputcontent;




const FindCard = () =>{
    const [thecardname,setthecardname] = useState([]);
    let navigate = useNavigate();



    // function fetchevent(thecardname){
    //     fetch(`${baseUrl}/event?name=${thecardname}`)
    //        .then((response) => response.json())
    //        .then((data) => {
    //             useState(data);
    //         });
    // }

    function Findcardinputchange(e){
        return Findcardinputcontent = e.target.value;

    }

    console.log(Findcardinputcontent);
    function Buttonsearchclick(){
        if(Findcardinputcontent){
            // if(fetch(`${baseUrl}/event?=${Findcardinputcontent}`,{method:'GET'})>0){navigate(`/Eventdetailname/${Findcardinputcontent}`);}
            // else{navigate(`/Dreamdetailname/${Findcardinputcontent}`)};
            // navigate(`/Eventdetailname/${Findcardinputcontent}`)
            navigate(`/Dreamdetailname/${Findcardinputcontent}`)


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