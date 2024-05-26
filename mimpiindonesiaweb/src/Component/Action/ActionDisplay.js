import React from 'react';
import {Link} from 'react-router-dom';



const ActionDisplay = (props) =>{
    const actionsList = ({theAction})=>{
        if (theAction){
           return theAction.map((item) =>{
                return(
                    <>
                    <br></br>
                    <div className="container-fluid">
                    <div class="row">

                
                    <div className="actioncontent col-md-7">{item.name}<br></br>
                    <span ><img className="imageAction" src={item.image}/></span><br></br>
                    {item.effect}
                    </div>
                    </div>
                    </div>
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