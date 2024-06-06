import React, {useState, useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import axios from 'axios';

import DreamFilterDisplay from './DreamFilterDisplay';


const baseUrl = "http://localhost:9120";


const DreamFilter = (props) =>{
    let dreamUrl = "";
    const [dreamcharacter,setdreamcharacter] = useState([]);
    const [dreamcharacter2,setdreamcharacter2] = useState([]);
    let dreamarray = [];

    useEffect(() =>{




        fetch(`${baseUrl}/dream`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> setdreamcharacter2(data))


        console.log(dreamcharacter2);

    


    },[])

    const handlefilter = (event) =>{
            dreamUrl = `${baseUrl}/dreamfilter?character=${event.target.value}`;
            fetch(dreamUrl, {method: 'GET'})
            .then((data)=>data.json())
            .then((res)=> {props.dreamfiltering(res)})


            // axios.get(dreamUrl)
            // .then((res) => {props.dreamfiltering(res.data)})
    }

    const DreamDropdown2 = () =>{

        // function removeDuplicates(a) {
        //     return a.filter((item,
        //         index) => a.indexOf(item.character) === index.character);
        //         console.log(a);
        // }





        
        // for (let i = 0; i < dreamcharacter2.length; i++){
        //     thecharacter.push(dreamcharacter2[i].character);
        //     return thecharacter;
        // }

        console.log(dreamcharacter2);
        // thecharacter=(dreamcharacter2);

        



        // function removeDuplicates() {



        //     // for (let i = 0; i < dreamcharacter2.length; i++){
        //     //     thecharacter.push(dreamcharacter2[i].character);
        //     //     return thecharacter;
        //     // }



        
        //     let jsonObject = thecharacter.map(JSON.stringify);
        //     let uniqueSet = new Set(jsonObject);
        //     let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
        
        //     console.log(uniqueArray);

        //     return thecharacter.push(uniqueArray);
        // }
        // // removeDuplicates();

        // console.log(thecharacter);


    






        return dreamcharacter2.map((data)=>{
            return(<>
                <option value={data.character}>{data.character}</option>
                </>

            )
        })
    }


    const DreamDropdown3 = () =>{

        let thecharacter = {};
        let thecharacter3=[];

        fetch(`${baseUrl}/dream`,{method: 'GET'})
        .then((res)=>res.json())
        .then((data)=> thecharacter=data)

        console.log(thecharacter);

        for (let i = 0; i < thecharacter.length; i++){
            thecharacter3.push(thecharacter[i].character);
            return thecharacter3;
        }

        console.log(thecharacter3);


        return thecharacter3.map((data)=>{
            return(
                <>
                <option value={data.character}>{data.character}</option>
                
                
                </>
            )
        })


    }

    return (

        <>
        <div>Dream Filter Based On Character</div>

        <select onChange={handlefilter}>
            <option value="">Select All</option>
            {DreamDropdown2(props)}

        </select>

        <select onChange={handlefilter}>
        {DreamDropdown3(props)}

        </select>
        </>
    )
}

export default DreamFilter;