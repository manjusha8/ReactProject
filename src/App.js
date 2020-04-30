import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './CommonComponents/HeaderComponent/HeaderComponent';
import  BannerImage from './CommonComponents/BannerImageComponent/BannerImage';
import BannerButtons from './CommonComponents/ReceipeButtons/BannerButtons';
import MainContent from './Pages/MainComponent/MainContent';
import CheckOut from './Pages/CheckOutComponent/CheckOut'
import StarComponent from './Pages/StarComponent/StarComponent';
import ChangeBannerItem from './CommonComponents/ChangeBannerComponent/ChangeBannerItem';
// import '../node_modules/@fortawesome/fontawesome-free/js/all';
// import '../node_modules/@fortawesome/react-fontawesome';
import {Route,Switch} from 'react-router-dom';
import CheckOutSummary from './Pages/CheckOutComponent/CheckOutSummary';
import SignUp from './Pages/UserAuthentication/SignUp';
import UserForms from './Pages/UserAuthentication/UserForms';



function App(props) {
  return (
      
      <div >
        {/* <HeaderComponent /> */}
        <Switch>
            <Route path= '/' exact component= {UserForms}/>
            <Route path = "/home" exact component = {ChangeBannerItem}/>
            <Route path = "/viewrecipe" exact component ={CheckOutSummary}  />
        </Switch>
        
      </div>

  );
}

export default App;
