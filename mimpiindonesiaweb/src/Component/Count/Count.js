import React, { useState,useEffect } from 'react';


const Count = () => {

    const [count,setcount]=useState(0);

    function pluscount(){
        setcount(count+1);
    };

    function minuscount(){
        setcount(count-1);
    };

    return(
        <>

            <button className="btn btn-primary" onClick={pluscount}>Plus</button> &nbsp;
            <button className="btn btn-primary" onClick={minuscount}>Minus</button>
            <br></br>
            This is the: {count}
        </>
    )
}

export default Count;