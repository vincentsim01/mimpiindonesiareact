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
import Login from './Register/logincomponent';
import Test from './Test/test';
import PlaceOrder from './Order/placeOrder';
import ViewOrder from './Order/viewOrder';
import Viewfavcard from './FavCard/viewfavcard';
import Pickfavcard from './FavCard/pickfavcard';
import Trivia from './Trivia/Trivia';
import EventDetail from './EventDetail/EventDetail';
import MoneyDetail from './MoneyDetail/MoneyDetail';
import DreamDetail from './DreamDetail/DreamDetail';
import TriviaDetail from './TriviaDetail/TriviaDetail';
import ActionDetail from './ActionDetail/ActionDetail';
import CharacterDetail from './CharacterDetail/CharacterDetail';
import ContactUs from './ContactUs/ContactUs';
import ThankYou from './ContactUs/ThankYou';
import Subscriber from './Subscriber/Subscriber';
import Fanletter from './Fanletter/Fanletter';
import Blog from './Blogs/blogs';
import Wordofwisdom from './Wordofwisdom/Wordofwisdom';
import EventDetailName from './EventDetailName/EventDetailName';
import DreamDetailName from './DreamDetailName/DreamDetailName';
import CharacterDetailName from './CharacterDetailName/CharacterDetailName';
import ActionDetailName from './ActionDetailName/ActionDetailName';
import TriviaDetailName from './TriviaDetailName/TriviaDetailName';
import MoneyDetailName from './MoneyDetailName/MoneyDetailName';


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
            <Route path="Trivia" element={<Trivia/>}/>
            <Route path="Money" element={<Money/>}/>
            <Route path="actioningListing" element={<ActionListing/>}/>
            <Route path="dreamListing" element={<DreamListing/>}/>
            {/* <Route Path="CharList" element={<CharacterListing/>}/> */}
            <Route path="eventListing" element={<EventListing/>}/>
            <Route path="characterListing" element={<Charlist/>}/>
            <Route path="moneyListing" element={<MoneyListing/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="test" element={<Test/>}/>
            <Route path="ViewOrder" element={<ViewOrder/>}/>
            <Route path="placeOrder" element={<PlaceOrder/>}/>
            <Route path="viewfavcard" element={<Viewfavcard/>}/>
            <Route path="pickfavcard" element={<Pickfavcard/>}/>
            <Route path="eventdetail/:cardId" element={<EventDetail/>}/>
            <Route path="moneydetail/:cardId" element={<MoneyDetail/>}/>
            <Route path="dreamdetail/:cardId" element={<DreamDetail/>}/>
            <Route path="triviadetail/:cardId" element={<TriviaDetail/>}/>
            <Route path="actiondetail/:cardId" element={<ActionDetail/>}/>
            <Route path="characterdetail/:cardId" element={<CharacterDetail/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
            <Route path="thankyou" element={<ThankYou/>}/>
            <Route path="subscriber" element={<Subscriber/>}/>
            <Route path="fanletter" element={<Fanletter/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="wordofwisdom" element={<Wordofwisdom/>}/>
            <Route path="eventdetailname/:eventname" element={<EventDetailName/>}/>
            <Route path="dreamdetailname/:dreamname" element={<DreamDetailName/>}/>
            <Route path="characterdetailname/:charactername" element={<CharacterDetailName/>}/>
            <Route path="actioningdetailname/:actionname" element={<ActionDetailName/>}/>
            <Route path='triviadetailname/:trivianame' element={<TriviaDetailName/>}/>
            <Route path="moneydetailname/:moneyname" element={<MoneyDetailName/>}/>


            

        </Route>

        </Routes>

        <Footer/>



        </BrowserRouter>


        </>
    )

};

export default Routing;