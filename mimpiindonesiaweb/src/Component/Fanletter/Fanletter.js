import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const baseUrl = "http://localhost:9120";

const Fanletter = () =>{

    let navigate = useNavigate();

    const initialvalues = {
        name:"Arthur",
        email:"arthur@gmail.com",
        message:"Mimpi Indonesia is the best"

    };

    const [thefanletter, setthefanletter] = useState(initialvalues);

    const checkout = () =>{

        fetch(`${baseUrl}/fanletter`,{method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(thefanletter)
        })
        .then(alert('You are now fanlettered'))

    }



    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setthefanletter({
            ...initialvalues,
            [name]:value
        })
    }



    return(
        <>

        <div className="container-fluid">
            <div className="row">
                <div>
                    <label for="name">Name</label>
                    <input name="name" value={thefanletter.name} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label for="name">Email</label>
                    <input name="email" value={thefanletter.email} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label for="name">Message</label>
                    <input name="message" value={thefanletter.message} onChange={handleInputChange}></input>
                </div>
                <div>
                <button className='btn btn-success' onClick={checkout}>
                                Submit
                        </button>

                </div>


            </div>


        </div>
        
        </>

    )
}

export default Fanletter;