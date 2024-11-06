import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";


const SubmitCardReview = () =>{

    let navigate = useNavigate();

    const initialvalues = {
        cardname:"Bansos",
        name:"Arthur",
        rating:"Excellent",
        testimonial:"Mimpi Indonesia is the best card game ever"
    };

    const [thecardreview, setthecardreview] = useState(initialvalues);

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setthecardreview({
            ...thecardreview,
            [name]:value
        });
    };

    const checkout = () =>{
        fetch(`${baseUrl}/submitcardreview`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(thecardreview)
        })
       .then(alert('You have submitted your card review'))

    };



    return(

        <>
            <div>
                <div>
                    <div>
                        <h2>Submit Your Card Review</h2>

                    </div>
                    <div>
                        <label>Card Name</label>
                        <input type="text" name="cardname" value={thecardreview.cardname} onChange={handleInputChange} required/>
                        
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={thecardreview.name} onChange={handleInputChange} required/>
                        
                    </div>
                    <div>
                        <label>Rating</label>
                        <input type="text" name="rating" value={thecardreview.rating} onChange={handleInputChange} required/>
                        
                    </div>
                    <div>
                        <label>Testimonial</label>
                        <input type="text" name="testimonial" value={thecardreview.testimonial} onChange={handleInputChange} required/>
                        
                    </div>

                    <button className='btn btn-success' onClick={checkout}>
                                Submit
                        </button>



                </div>


            </div>
        
        
        </>
    )
}

export default SubmitCardReview;