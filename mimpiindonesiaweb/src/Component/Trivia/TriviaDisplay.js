import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const TriviaDisplay = (props) =>{
    let navigate = useNavigate();

    const TriviaListing =({thetrivias})=>{

        if (thetrivias){
            return thetrivias.map((item) =>{
                const savesession = () => {
                    sessionStorage.setItem('cardname',JSON.stringify(item.name));
                    navigate('/pickfavcard');
    
            
                }


                const savetriviadetail = () =>{
                    sessionStorage.setItem('cardtriviadetail',JSON.stringify(item.id2));

                }
                 return(
                     <>                    {/* <div className="container-fluid rowi"> */}
                     <div className="row triviamaincontainer">
                         <div className="triviacontent">
                            <Link to={`/triviadetail/${item.id2}`}>
                             <span className="nameTrivia" onClick={savetriviadetail}><h5>{item.name}</h5></span><br></br>
                             <span><img className="imageTrivia" src={item.image} onClick={savetriviadetail}/></span><br></br>
                             <div className="kategoriTrivia" onClick={savetriviadetail}>{item.kategori}</div><br></br>
                             <div className="hargaTrivia" onClick={savetriviadetail}>{item.Harga}</div>
                             </Link>
                             <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
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