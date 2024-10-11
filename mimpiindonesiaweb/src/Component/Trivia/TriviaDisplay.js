import React from 'react';
import {Link} from 'react-router-dom';



const TriviaDisplay = (props) =>{
    const TriviaListing =({thetrivias})=>{

        if (thetrivias){
            return thetrivias.map((item) =>{
                 return(
                     <>                    {/* <div className="container-fluid rowi"> */}
                     <div className="row rowi">
                         <div className="triviacontent">
                             <span className="nameTrivia">{item.name}</span><br></br>
                             <span><img className="imageTrivia" src={item.image}/></span><br></br>
                             <div className="kategoriTrivia">{item.kategori}</div><br></br>
                             <div className="hargaTrivia">{item.Harga}</div>
                         </div>
                     </div>
                     {/* </div> */}
                     </>
                 )
             })
         }

    }






        return(
        <>
        
        
  
        {TriviaListing (props)}
        
        </>
    )

};

export default TriviaDisplay;