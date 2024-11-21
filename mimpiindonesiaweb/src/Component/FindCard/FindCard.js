import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";



var Findcardinputcontent;
const FindCard = () =>{
    let navigate = useNavigate();

    function Findcardinputchange(e){

        return Findcardinputcontent = e.target.value;


    }

    function Buttonsearchclick(){
        if(Findcardinputcontent){

            navigate(`/event`);
// Clear the input field after searching


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