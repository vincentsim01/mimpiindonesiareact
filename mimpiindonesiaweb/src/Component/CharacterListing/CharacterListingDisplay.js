import React from 'react';

const CharacterListingDisplay = (props) => {
    const CharacterDisplayListing = ({cardname}) =>{
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

        <div>

            This is CharacterListingDisplay
            {CharacterDisplayListing (props)}
        </div>
        
        
        </>
    )
}


export default CharacterListingDisplay;