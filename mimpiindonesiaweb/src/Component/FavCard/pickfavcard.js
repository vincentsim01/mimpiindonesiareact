import React,{useState, useEffect} from 'react';
import { useParams,useNavigate} from 'react-router-dom';


const baseUrl = "http://localhost:9120";

const Pickfavcard = () => {

    if (!sessionStorage.getItem('userInfo')) {
        window.location.href = '/login'; // Redirect to the login page
      }
      
    let params = useParams();
    let navigate = useNavigate();

    

    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)

    // try {
    //     if (!sessionData) {
    //       throw new Error('User is not logged in');
    //     }
    //     // If the user is logged in, proceed to the dashboard
    //     console.log('Welcome to the dashboard!');
    //     // Render your dashboard page or perform other actions
    //   } catch (error) {
    //     // If the variable is null or user is not logged in, catch the error
    //     console.error(error.message);
    //     navigate('/login'); // Redirect to login page
    //   }

    // navigate("/login");






    // console.log("this is sessiondata from placeorder.js"+sessionData);

    const initialValues = {
        id:Math.floor(Math.random() * 1000000),
        rest_name: params.restName,
        name:data.name,
        email:data.email,
        // name:"Bob",
        // email:"Bob@gmail.com",
        // cost:Math.floor(Math.random()*1000),
        // phone:data.phone,

        address:"Hon 12 sec 34",
        date:"1 January 1970",
        favcard: "Janji Manis"
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
        console.log(values)
        fetch(`${baseUrl}/pickfavcard`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/favcardr'))
    }

    return(
        <>

            <div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order For {params.restName}</h3>
                    </div>
                    <div className='panel-body'>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="phone" className="control-label">Adress</label>
                                <input className="form-control" id="Address"
                                name="address" value={values.address} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="address" className="control-label">Date</label>
                                <input className="form-control" id="date"
                                name="date" value={values.date} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="address" className="control-label">Favcard</label>
                                <input className="form-control" id="favcard"
                                name="favcard" value={values.favcard} onChange={handleInputChange}/>
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


export default Pickfavcard;