import React, { Component } from 'react';

import ChangeBannerItem from '../CommonComponents/ChangeBannerComponent/ChangeBannerItem';
import {Route,Switch} from 'react-router-dom';
import CheckOutSummary from '../Pages/CheckOutComponent/CheckOutSummary';
import Shop from '../Pages/ShopComponent/Shop';
import NoPageFound from '../Pages/NoPageFoundComponent/NoPageFound';
import CheckOutPage from '../Pages/ShopComponent/CheckOutPage';
import SubmitRecipe from '../Pages/SubmitRecipeComponent/SubmitRecipe';
import Logout from '../Pages/LogoutComponent/Logout';



class MainPageRouting extends Component{

    render()
    {
        return(
            <div>
                <Switch>
                    <Route path = "/home" exact component = {ChangeBannerItem}/>
                    <Route path = "/viewrecipe" exact component ={CheckOutSummary} />
                    <Route path = "/logout" exact component = {Logout}/>
                    <Route path= '/shop' exact component= {Shop}/>
                    <Route path= '/checkoutpage' exact component= {CheckOutPage}/>
                    <Route path= '/submitrecipe' exact component= {SubmitRecipe}/>
                    <Route path='*' component={NoPageFound} />
                </Switch>
            </div>
        );
    }
}

export default MainPageRouting;