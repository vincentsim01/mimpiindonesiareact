import React,{useState, useEffect} from 'react';
import { useParams,useNavigate} from 'react-router-dom';
const baseUrl = "http://localhost:9120";



const ContactUs = () =>{

    let navigate = useNavigate();

    const initialValues = {
        id:Math.floor(Math.random() * 1000000),

        name:"Arthur",
        email:"arthur@gmail.com",
        message:"I love Mimpi Indonesia"
    }

    const [values,setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }



    const checkout = () => {




        fetch(`${baseUrl}/contactus`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/thankyou'))
    }


    return(
        <>

<div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Contact Us</h3>
                    </div>
                    <div className='panel-body'>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="name" className="control-label">Name</label>
                                <input className="form-control" id="name"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="message" className="control-label">Message</label>
                                <input className="form-control" id="Address"
                                name="message" value={values.message} onChange={handleInputChange}/>
                            </div>

                        </div>
                        <button className='btn btn-success' onClick={checkout}>
                                Submit
                        </button>
                    </div>
                </div>
            </div>


        
        </>
    )
}

export default ContactUs;