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

            const saveactiondetail= () => {
                sessionStorage.setItem('cardactiondetail',JSON.stringify(item.id2));
    

        
            }
                return(
                    <>                    {/* <div className="container-fluid rowi"> */}
                    <div className="row rowi">
                        <div className="actioncontent">
                            <Link to={`/actiondetail/${item.id2}`}>
                            <span className="nameAction" onClick={saveactiondetail}>{item.name}</span><br></br>
                            <span><img className="imageAction" onClick={saveactiondetail} src={item.image}/></span><br></br>
                            <div className="effectAction" onClick={saveactiondetail}>{item.effect}</div><br></br>
                            </Link>
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