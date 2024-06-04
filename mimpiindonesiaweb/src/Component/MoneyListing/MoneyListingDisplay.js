import React from 'react';



const MoneyListingDisplay = (props) =>{
    const MoneyListingList = ({cardname}) => {
        if(cardname){
            return cardname.map((item)=>{
                return(
                    <>
                    {item.name}
                    <br></br>
                    <img src={item.image}/>
                    
                    
                    
                    </>
                )
            })
        }

    }

    




    return(
        <>

        {MoneyListingList(props)}
        
        
        </>
    )
}

export default MoneyListingDisplay;