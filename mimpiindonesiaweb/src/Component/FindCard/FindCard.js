import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams} from 'react-router-dom';

const FindCard = () =>{
    let Findcardinputcontent;
    function Findcardinputchange(e){

        Findcardinputcontent = e.target.value;
        console.log(Findcardinputcontent);

    }

    function Buttonsearchclick(){
        alert ("This is the card that you are searching for: "+Findcardinputcontent);
    }
    return(
        <>  
            <input id="Findcardinput" onChange={Findcardinputchange} type="text"></input>  <button type="button" onClick={Buttonsearchclick} className="btn btn-info" value="Search">Search</button>
        </>
    )
}
export default FindCard;