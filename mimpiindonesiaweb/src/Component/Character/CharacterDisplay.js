import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CharacterDisplay = (props) => {
    let navigate = useNavigate();

    console.log(">>>",props);
    const characterList=({thecharacter})=>{
        if(thecharacter){
            return thecharacter.map((item)=>{

                const savesession = () => {
                    sessionStorage.setItem('cardname',JSON.stringify(item.name));
                    navigate('/pickfavcard');
    
            
                }

                const savecharacterdetail = () =>{

                    sessionStorage.setItem('cardcharacterdetail',JSON.stringify(item.id2));
                }
                return(
                    <div className="charactercontainer">                    
                        <div className="characterindividual">
                            <Link to={`/characterdetail/${item.id2}`}>
                            <img src={item.image} onClick={savecharacterdetail} className="imagecharacter" alt="1"/><br></br>
                            <span className="charactername" onClick={savecharacterdetail}><h5>{item.name}</h5><br></br></span>
                            <span className="characterprovince" onClick={savecharacterdetail}>{item.provinsi}<br></br></span>
                            <br></br>
                            </Link>
                            <button className="btn btn-primary" onClick={savesession}>Add as Favorite</button>   

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

        <br>
        </br>
        {characterList(props)}
        
        </>
    )
}


export default CharacterDisplay;