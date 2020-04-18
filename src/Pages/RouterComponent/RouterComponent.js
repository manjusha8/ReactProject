import React from 'react';
import ChangeBannerItem from '../../CommonComponents/ChangeBannerComponent/ChangeBannerItem';
import CheckOut from '../CheckOutComponent/CheckOut';
import {BrowserRouter as Router , Route , Link ,Switch} from 'react-router-dom';
// import CheckOut from '../CheckOutComponent/CheckOut';

function RouterComponent ()
{
    return(

        <Router>
            <Switch>
                <Route path = "/" component exact = {ChangeBannerItem}/>
                <Route path = "/viewrecipe" exact component ={CheckOut}/>
            </Switch>
        </Router>
    );
}

export default RouterComponent;