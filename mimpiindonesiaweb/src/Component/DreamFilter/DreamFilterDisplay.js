import React from 'react';


const DreamFilterDisplay = (props) => {
    const DreamFilterDisplayList = ({filtereddream}) =>{
        if(filtereddream){
            return filtereddream.map((item)=>{
                return(
                    <>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    {item.name}
                    <br></br>
                    {item.character}
                    <br></br>
                    <img src={item.image}/>
                    
                    
                    
                    </>
                )
            })
        }
    }



    return(
        <>
        {DreamFilterDisplayList(props)}
        </>
    )
}

export default DreamFilterDisplay;