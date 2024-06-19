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
import ActionListing from './ActionListing/Listing';
import DreamListing from './DreamListing/DreamListing';
import EventListing from './EventListing/EventListing';
import CharacterListing from './CharacterListing/CharacterListing';
import Charlist from './CharList/charlist';
import MoneyListing from './MoneyListing/MoneyListing';
import Register from './Register/registercomponent';

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
            <Route path="Actioning" element={<Actions/>}/>
            <Route path="Money" element={<Money/>}/>
            <Route path="ActioningListing" element={<ActionListing/>}/>
            <Route path="DreamListing" element={<DreamListing/>}/>
            {/* <Route Path="CharList" element={<CharacterListing/>}/> */}
            <Route path="EventListing" element={<EventListing/>}/>
            <Route path="CharacterListing" element={<Charlist/>}/>
            <Route path="MoneyListing" element={<MoneyListing/>}/>
            <Route path="register" element={<Register/>}/>

        </Route>

        </Routes>

        <Footer/>



        </BrowserRouter>


        </>
    )

};

export default Routing;