import React from 'react';
import {Link} from 'react-router-dom';


const MoneyDisplay = (props) =>{
    const MoneyList = ({themoney}) =>{

        if (themoney){
            return themoney.map((item) => {
                return (
                    <>
                    {item.id}<br></br>
                    <img src={item.image}/>
                    
                    </>
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