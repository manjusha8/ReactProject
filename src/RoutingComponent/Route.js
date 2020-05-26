import React, { Component } from "react";
import Login from '../Pages/UserAuthentication/Login';
import SignUp from '../Pages/UserAuthentication/SignUp';
import {Route, Switch, Redirect} from 'react-router-dom';
import fire from '../Config/Fire';
import MainPageRouting from "./MainPageRouting";



class Routes extends Component{

state= {
    users: {}
}

  
componentDidMount()
{
    this.authListener();
}

  authListener () {
    fire.auth().onAuthStateChanged((users)=> {
      if(users){
        this.setState({
          users: users
        });
      }
      else{
        this.setState({
          users: null
        });
      }
    })
  };

    render()
    {
        return(
            <div>
                <Switch>
                    <Route path= "/" exact component= {SignUp} />
                    <Route path= '/login' exact component= {Login}/>
                    <Route path= {["/home","/viewrecipe","/logout" ,'/shop','/checkoutpage', '/submitrecipe','*']}
                    exact
                    render= {()=> 
                        this.state.users ? (
                            <MainPageRouting/>
                        )
                        :
                        (
                        <Redirect from= "/" to= "/" />
                        )
                    }

                    />
                </Switch>
            </div>
        );
    }
}

export default Routes;