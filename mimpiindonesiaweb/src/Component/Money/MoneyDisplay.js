import React from 'react';
import {Link} from 'react-router-dom';


const MoneyDisplay = (props) =>{
    const MoneyList = ({themoney}) =>{



        if (themoney){
            return themoney.map((item) => {

                const savemoneydetail= () => {
                    sessionStorage.setItem('cardmoneydetail',JSON.stringify(item.id2));
                    console.log(sessionStorage.getItem('cardmoneydetail'));
        
            
                }
                return (
                    <Link to={`/moneydetail/${item.id2}`} key={item.id2}>
                    <div className="moneycontainer" onClick={savemoneydetail}>
                        <div className="moneyindividual" onClick={savemoneydetail}>
                        <div className="moneyname" onClick={savemoneydetail}>{item.id}<br></br></div>
                        <img className="imagemoney" onClick={savemoneydetail} src={item.image}/>
                    </div>
                    
                    </div>
                    </Link>
                )
            })
        }
    }

    return(

        <>
        
        {MoneyList(props)}
        
        
        </>
    )




}

export default MoneyDisplay;