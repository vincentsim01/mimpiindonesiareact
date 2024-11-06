import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmitCardReview.css';
import {Link} from 'react-router-dom';

const baseUrl = "http://localhost:9120";


const SubmitCardReview = (props) =>{

    let navigate = useNavigate();

    console.log(props.zacardname);

    const thezacardname = props.zacardname;

    const initialvalues = {
        cardname: thezacardname,
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


            <div className="submitreviewcontainer">
                <div className="submitreviewcontainer2">

                    <div className="submitreviewtitle">
                        <h2>Submit Your Card Review</h2>

                    </div>
                    <div className="submitreview">
                        <label className="reviewlabel">Card Name</label>
                        <input className="reviewform" type="text" name="cardname" value={thecardreview.cardname} onChange={handleInputChange} required/>
                        
                    </div>
                    <div className="submitreview">
                        <label className="reviewlabel">Name</label>
                        <input className="reviewform" type="text" name="name" value={thecardreview.name} onChange={handleInputChange} required/>
                        
                    </div>
                    <div className="submitreview">
                        <label className="reviewlabel">Rating</label>
                        {/* <input className="reviewform" type="text" name="rating" value={thecardreview.rating} onChange={handleInputChange} required/> */}
                        <select className="reviewform" name="rating" onChange={handleInputChange} required>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </select>
                        
                    </div>
                    <div className="submitreview">
                        <label className="reviewlabel">Testimonial</label>
                        <input className="reviewform" type="text" name="testimonial" value={thecardreview.testimonial} onChange={handleInputChange} required/>
                        
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