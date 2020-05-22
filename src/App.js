import React from 'react';

import ChangeBannerItem from './CommonComponents/ChangeBannerComponent/ChangeBannerItem';
import {Route,Switch} from 'react-router-dom';
import CheckOutSummary from './Pages/CheckOutComponent/CheckOutSummary';
import Shop from './Pages/ShopComponent/Shop';
import NoPageFound from './Pages/NoPageFoundComponent/NoPageFound';
import {ThemeProvider} from 'styled-components';
import CheckOutPage from './Pages/ShopComponent/CheckOutPage';
import Login from './Pages/UserAuthentication/Login';
import SignUp from './Pages/UserAuthentication/SignUp';
import Logout from './Pages/LogoutComponent/Logout';
import SubmitRecipe from './Pages/SubmitRecipeComponent/SubmitRecipe';



function App(props) {

  const theme= {
    backgroundColor: '#8DC63F',
    color: 'white',
    fontSize: '14px',
    primaryColor: '#a0a0a0'
  }
  
  return (
      <div >
        <ThemeProvider theme= {theme} primaryColor= {'red'}>
        <Switch>
            <Route path= '/' exact component= {SignUp}/>
            <Route path= '/login' exact component= {Login}/>
            <Route path = "/home" exact component = {ChangeBannerItem}/>
            <Route path = "/viewrecipe" exact component ={CheckOutSummary} />
            <Route path = "/logout" exact component = {Logout}/>
            <Route path= '/shop' exact component= {Shop}/>
            <Route path= '/checkoutpage' exact component= {CheckOutPage}/>
            <Route path= '/submitrecipe' exact component= {SubmitRecipe}/>
            <Route path='*' component={NoPageFound} />
        </Switch>
        </ThemeProvider>
      </div>

  );
}

export default App;
