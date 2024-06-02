import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Main from './Main';
import About from './About/About';
import Character from './Character/Character';
import Dream from './Dream/Dream';
import Event from './Event/Event';
import Header from './Header';
import Footer from './Footer';
import Actions from './Action/Action';
import Money from '../Component/Money/Money';
import Listing from '../Component/Listing/Listing';

const Routing = ()=>{

    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>

        <Route path="/" element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Character" element={<Character/>}/>
            <Route path="Dream" element={<Dream/>}/>
            <Route path="Event" element={<Event/>}/>
            <Route path="Actions" element={<Actions/>}/>
            <Route path="Money" element={<Money/>}/>
            <Route path="ActionListing" element={<Listing/>}/>
        </Route>

        </Routes>

        <Footer/>



        </BrowserRouter>


        </>
    )

};

export default Routing;