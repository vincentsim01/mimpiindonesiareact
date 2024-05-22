import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Main from './Main';
import About from './About/About';
import Character from './Character/Character';

const Routing = ()=>{

    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Character" element={<Character/>}/>
        </Route>

        </Routes>



        </BrowserRouter>


        </>
    )

};

export default Routing;