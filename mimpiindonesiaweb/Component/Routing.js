import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';

const Routing = ()=>{

    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main/>}>
            <Route index element={<Home/>}/>

        </Routes>



        </BrowserRouter>


        </>
    )

};

export default Routing;