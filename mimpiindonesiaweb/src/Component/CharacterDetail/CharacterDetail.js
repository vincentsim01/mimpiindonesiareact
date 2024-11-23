import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CharacterDetailDisplay from './CharacterDetailDisplay';
import './CharacterDetail.css';
const baseUrl = "http://localhost:9120";



const CharacterDetail = () =>{
    let navigate = useNavigate();

    const [characterdetail, setcharacterdetail] = useState([]);
    const [characterobject,setcharacterobject] = useState([]);

    var characterobjectlength;

    (function(){
        fetch(`${baseUrl}/character`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>setcharacterobject(data))
        characterobjectlength=characterobject.length;
    })();

    const sessionData = sessionStorage.getItem('cardcharacterdetail');

    useEffect(()=>{
        fetch(`${baseUrl}/characterdetail/${sessionData}`)
        .then((res) => res.json())
        .then((data) =>{
            setcharacterdetail(data);
        })

    },[])

    const previousbutton = () =>{



        function previousevent(){
            if(Number(sessionData)>1){
                fetch(`${baseUrl}/characterdetail/${sessionData-1}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>setcharacterdetail(data));
                sessionStorage.setItem('cardcharacterdetail',JSON.stringify(sessionData-1));

                navigate(`/characterdetail/${sessionData-1}`)
            }else if(Number(sessionData)<=1){
                fetch(`${baseUrl}/characterdetail/1`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>setcharacterdetail(data));
                sessionStorage.setItem('cardcharacterdetail',JSON.stringify(1));

                navigate(`/characterdetail/1`)

            }
        }


        
        return(   
            <>

            {/* <button className="btn btn-primary" onClick={previousevent}>Previous</button> */}
            <div className="previousbuttonins" onClick={previousevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="previouschevronimg" src="https://i.ibb.co/j3vDCBq/chevron2.png"></img>
            </div>







 

             </>    


        )

    }


        
    const nextbutton = () =>{



        function nextevent(){
            if(Number(sessionData)<characterobjectlength){
                fetch(`${baseUrl}/characterdetail/${Number(sessionData)+1}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>setcharacterdetail(data));
                sessionStorage.setItem('cardcharacterdetail',JSON.stringify(Number(sessionData)+1));

                navigate(`/characterdetail/${Number(sessionData)+1}`)
            }else if(Number(sessionData)>characterobjectlength){
                fetch(`${baseUrl}/characterdetail/${characterobjectlength}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) =>setcharacterdetail(data));
                sessionStorage.setItem('cardcharacterdetail',JSON.stringify(Number(characterobjectlength)));

                navigate(`/characterdetail/${characterobjectlength}`)

            }

            
        }

        
        return(   
            <>



            {/* <button className="btn btn-primary" onClick={nextevent}>Next</button> */}
            <div className="nextbuttonins" onClick={nextevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img>
                </div>






 

             </>    


        )

    }






    return(
        <>
        <div className="characterdetailcontainer">
            <div className="twoButtons">

                <div className="characterdetaildisplay"><CharacterDetailDisplay listData={characterdetail}/></div>
                <div className="previousbutton">{previousbutton()}</div>
                <div className="nextbutton"><br></br>{nextbutton()}</div>
            </div>
        </div>
        
        </>
    )
}

export default CharacterDetail;