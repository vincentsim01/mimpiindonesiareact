import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MoneyDetailNameDisplay from './MoneyDetailNameDisplay';
import './MoneyDetailName.css';
const baseUrl = "http://localhost:9120";

const MoneyDetailName = () =>{
    let navigate = useNavigate();
    let params = useParams();
    let cardnameid = params.moneyname;
    const [Moneycardname,setMoneycardname]= useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/money?name=${cardnameid}`)
       .then((response) => (response).json())
       .then((data) => setMoneycardname(data));
    },[]);

    const Previousbutton = () =>{


        function previousevent(){ 
                sessionStorage.setItem('cardmoneydetail',JSON.stringify(1));
                navigate(`/moneydetail/1`);
        }

        return(
            <>
            <div className="previousbuttoncontainermoney" onClick={previousevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="previouschevronimg" src="https://i.ibb.co/j3vDCBq/chevron2.png"></img>
                </div>
            </>
        )
    }

    const Nextbutton = () =>{
        let navigate = useNavigate();
        function nextevent(){
                sessionStorage.setItem('cardmoneydetail',JSON.stringify(3));
                navigate(`/moneydetail/${Number(3)}`);
        }
        return(
            <>
            <div className="nextbuttoncontainermoney" onClick={nextevent}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className="nextchevronimg" src="https://i.ibb.co/sK4qSHC/chevron.png"></img>
            </div>
            </>
        )
        }


    return(<>
            <div className="moneydetailcontainer container-fluid">
            <MoneyDetailNameDisplay listData={Moneycardname}/>
            <div className="previousbuttoncontainer">
                <div>{Previousbutton()}</div>
            </div>
            <div className="nextbuttoncontainer">
                <div>{Nextbutton()}</div>
            </div>
        </div>
    
    
    </>)
}

export default MoneyDetailName;