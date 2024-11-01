import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MoneyDetailDisplay from './MoneyDetailDisplay';
import './MoneyDetail.css';
const baseUrl = "http://localhost:9120";



const MoneyDetail = () =>{

    const [moneydetail,setmoneyDetail] = useState([]);
    let sessionData = Number(sessionStorage.getItem('cardmoneydetail'));

    console.log(sessionData);

    useEffect(() => {
        fetch(`${baseUrl}/moneydetail/${sessionData}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setmoneyDetail(data)
            console.log(moneydetail);

        })
    },[])


    const Previousbutton = () =>{

        let navigate = useNavigate();
        function previousevent(){ 
            fetch(`${baseUrl}/moneydetail/${Number(sessionData)-1}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) => setmoneyDetail(data));
            sessionStorage.setItem('cardmoneydetail',JSON.stringify(sessionData-1));

            navigate(`/moneydetail/${sessionData-1}`);
        }

        return(
            <>
            <button onClick={previousevent} className="btn btn-primary">Previous</button>
            </>
        )
        




    }

    const Nextbutton = () =>{

        let navigate = useNavigate();
        function nextevent(){
        fetch(`${baseUrl}/moneydetail/${Number(sessionData)+1}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => setmoneyDetail(data));
        sessionStorage.setItem('cardmoneydetail',JSON.stringify(sessionData+1));
       

        navigate(`/moneydetail/${Number(sessionData)+1}`);
        }

        return(
            <>
            <button onClick={nextevent} className="btn btn-primary">Next</button>
            </>
        )
        }


    




    return(
       
        <div className="moneydetailcontainer container-fluid">


            <div className="previousbuttoncontainer">
                <div>{Previousbutton()}</div>
            </div>

            <div className="moneyDetailDisplayContainer">
                <MoneyDetailDisplay listData={moneydetail}/>
            </div>

            <div className="nextbuttoncontainer">
                <div>{Nextbutton()}</div>
            </div>







        </div>



    
    )
}


export default MoneyDetail;