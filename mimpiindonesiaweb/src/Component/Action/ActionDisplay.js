import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const ActionDisplay = (props) =>{
    let navigate = useNavigate();

    //attribute from parent function theAction
    const actionsList = ({theAction})=>{
        if (theAction){
           return theAction.map((item) =>{
            const savesession = () => {
                sessionStorage.setItem('cardname',JSON.stringify(item.name));
                navigate('/pickfavcard');

        
            }
                return(
                    <>                    {/* <div className="container-fluid rowi"> */}
                    <div className="row rowi">
                        <div className="actioncontent">
                            <span className="nameAction">{item.name}</span><br></br>
                            <span><img className="imageAction" src={item.image}/></span><br></br>
                            <div className="effectAction">{item.effect}</div><br></br>
                            <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
                        </div>
                    </div>
                    {/* </div> */}
                    </>
                )
            })
        }
    }
    

    return(

        <>

        {actionsList(props)}
        </>
    )
};

export default ActionDisplay;