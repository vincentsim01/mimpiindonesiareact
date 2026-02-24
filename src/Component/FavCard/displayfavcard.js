import React from 'react';


const Displayfavcard = (props) => {

    const renderData = ({FavcardData}) => {
        if(FavcardData){
            return FavcardData.map((item) => {

                return(

                    <>

                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.date}</td>
                        <td>{item.favcard}</td>
        

                    </tr>

                    </>
                )
            })
        }


    }



    return(
        <div className="container">

        <center><h2>Favorite Card</h2></center>
        <table className='table'>
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Email</th>
                    <th>Adress</th>
                    <th>Date</th>
                    <th>favcard</th>
                </tr>
            </thead>
            <tbody>
                {renderData(props)}
            </tbody>
        </table>
    </div>
    )

}

export default Displayfavcard;