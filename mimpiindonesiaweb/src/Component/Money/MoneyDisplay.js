import React from 'react';
import {Link} from 'react-router-dom';


const MoneyDisplay = (props) =>{
    const MoneyList = ({themoney}) =>{

        if (themoney){
            return themoney.map((item) => {
                return (
                    <div className="moneycontainer">
                        <div className="moneyindividual">
                        <div className="moneyname">{item.id}<br></br></div>
                        <img className="imagemoney" src={item.image}/>
                    </div>
                    
                    </div>
                )
            })
        }
    }

    return(

        <>
        This is MoneyDisplay
        {MoneyList(props)}
        
        
        </>
    )




}

export default MoneyDisplay;