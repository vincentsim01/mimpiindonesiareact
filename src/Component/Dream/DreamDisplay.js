import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DreamDisplay = (props) => {
    let navigate = useNavigate();

    // console.log(">>>",props);
    const dreamList=({thedream})=>{
        if(thedream){
            return thedream.map((item)=>{
                const savesession = () => {
                    sessionStorage.setItem('cardname',JSON.stringify(item.name));
                    navigate('/pickfavcard');
    
            
                }


                const savedreamdetail = () =>{
                    sessionStorage.setItem('carddreamdetail', JSON.stringify(item.id2));


                }
                return(
                    <div className="dreamContentContainer">  
                    <div className="dreamindividual">
                    <Link to={`/dreamdetail/${item.id2}`}>
                        {/* <div className="imageContainer" onClick={savedreamdetail}><img src={item.image} className="dreamImage" alt="1"/></div><br></br> */}
                        <img src={item.image} onClick={savedreamdetail} className="dreamImage" alt="1"/>
                        <div className="dreamName" onClick={savedreamdetail}><h5>{item.name} </h5></div><br></br>       <br></br>           
                        
                        <div className="dreamCharacter" onClick={savedreamdetail}>Karakter: {item.character}</div><br></br><br></br>
                    </Link>

                        <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>
                        <br></br>   <br></br>
                    </div>
                    </div>

                )
            }
        
        
        
        )
        } else {
        return(
        <>There is nothing to return</>)
        }
    }


    return(
        <>
   
        {dreamList(props)}
        
        </>
    )
}


export default DreamDisplay;