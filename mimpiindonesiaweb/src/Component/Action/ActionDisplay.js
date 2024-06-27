import React from 'react';
import {Link} from 'react-router-dom';



const ActionDisplay = (props) =>{
    //attribute from parent function theAction
    const actionsList = ({theAction})=>{
        if (theAction){
           return theAction.map((item) =>{
                return(
                    <>                    {/* <div className="container-fluid rowi"> */}
                    <div className="row rowi">
                        <div className="actioncontent">
                            <span className="nameAction">{item.name}</span><br></br>
                            <span><img className="imageAction" src={item.image}/></span><br></br>
                            <div className="effectAction">{item.effect}</div>
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