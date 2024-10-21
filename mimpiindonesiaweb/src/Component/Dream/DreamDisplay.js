import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DreamDisplay = (props) => {
    let navigate = useNavigate();

    console.log(">>>",props);
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
                    <Link to={`/DreamDetail/${item.id2}`}>
                        <div className="dreamName" onClick={savedreamdetail}>{item.name} </div><br></br>                  
                        <div className="imageContainer" onClick={savedreamdetail}><img src={item.image} className="dreamImage" alt="1"/></div><br></br>
                        <div className="dreamCharacter" onClick={savedreamdetail}>Karakter: {item.character}</div><br></br>
                    </Link>

                        <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   
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