import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const baseUrl = "http://localhost:9120";


const Subscriber = () =>{

    let navigate = useNavigate();

    const initialvalues = {
        name:"Arthur",
        email:"arthur@gmail.com"
    };

    const [thesubscriber, setthesubscriber] = useState(initialvalues);

    const handleInputChange = (e) =>{
        const{name,value} = e.target;
        setthesubscriber({
            ...thesubscriber,
            [name]:value
        })
    }

    const checkout = () =>{
        fetch(`${baseUrl}/subscriber`,{method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(thesubscriber)
        })
        .then(alert('You are now subscribed'))


    }



    return(
        <>

            <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Subscribe</h3>
                    </div>
                    <div className='panel-body'>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="name" className="control-label">Name</label>
                                <input className="form-control" id="name"
                                name="name" value={thesubscriber.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={thesubscriber.email} onChange={handleInputChange}/>
                            </div>

                        </div>
                        <button className='btn btn-success' onClick={checkout}>
                                Submit
                        </button>
                    </div>
                </div>
       
        
        </>
    )
}

export default Subscriber;