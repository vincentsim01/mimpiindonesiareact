import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MoneyDetailDisplay from './MoneyDetailDisplay';
import './MoneyDetail.css';
const baseUrl = "http://localhost:9120";



const MoneyDetail = () =>{

    const [moneydetail,setmoneyDetail] = useState([]);
    let sessionData = Number(sessionStorage.getItem('cardmoneydetail'));
    const [moneyobject, setmoneyobject] = useState([]);

    let moneyobjectlength;

    (function(){
        fetch (`${baseUrl}/money`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>setmoneyobject(data))
        moneyobjectlength = moneyobject.length;

    })();

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
            if(sessionData>1){
                fetch(`${baseUrl}/moneydetail/${Number(sessionData)-1}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) => setmoneyDetail(data));
                sessionStorage.setItem('cardmoneydetail',JSON.stringify(sessionData-1));

                navigate(`/moneydetail/${sessionData-1}`);
            }else if(sessionData<1){
                fetch(`${baseUrl}/moneydetail/1`,{method:'GET'})
                .then((res) => res.json())
                .then((data) => setmoneyDetail(data));
                sessionStorage.setItem('cardmoneydetail',JSON.stringify(1));

                navigate(`/moneydetail/1`);

            }
        }

        return(
            <>
            {/* <div className="previousbuttoncontainermoney" onClick={previousevent}>   */}
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
            if(sessionData<moneyobjectlength){
                fetch(`${baseUrl}/moneydetail/${Number(sessionData)+1}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) => setmoneyDetail(data));
                sessionStorage.setItem('cardmoneydetail',JSON.stringify(sessionData+1));
            

                navigate(`/moneydetail/${Number(sessionData)+1}`);
            }else if(sessionData>moneyobjectlength){

                fetch(`${baseUrl}/moneydetail/${moneyobjectlength}`,{method:'GET'})
                .then((res) => res.json())
                .then((data) => setmoneyDetail(data));
                sessionStorage.setItem('cardmoneydetail',JSON.stringify(moneyobjectlength));
            

                navigate(`/moneydetail/${moneyobjectlength}`);


            }
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


    




    return(
       
        <div className="moneydetailcontainer">


            <div className="previousbuttoncontainer">
                {Previousbutton()}
            </div>
            <div className="nextbuttoncontainer">
                {Nextbutton()}
            </div>

            <div className="moneyDetailDisplayContainer1">
                <MoneyDetailDisplay listData={moneydetail}/>
            </div>









        </div>



    
    )
}


export default MoneyDetail;