import React, { Component } from 'react';
import {Forms , Input,Text,Error} from './LoginStyle';
import {withRouter} from 'react-router-dom';

class Login extends Component{

    state= {
        email: '',
        password: '',

        loginError: '',
        // passwordError: ''
    }


    validate= () =>{

        if(this.state.email === sessionStorage.getItem('email') && this.state.password === sessionStorage.getItem('password'))
        {
            this.setState({
                loginError: ''
            })
            return true
        }
        else{
            this.setState({
                loginError: 'invalid email or password'
            })
        }
        
        return false
    }


    onSubmitHandler = (event) =>{
        event.preventDefault();
        const isValid = this.validate()
        console.log("validate :",isValid);
        if(isValid)
        {
            console.log("newusers :",this.state.name)
            this.props.history.push('/home')

        }
        else{
            console.log("validate is false s")
        }
    }

    handleChange = (event) => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name]: isCheckbox 
            ? event.target.checked 
            : event.target.value
        });
    }

    render()
    {
        return(
            <Forms onSubmit= {this.onSubmitHandler}>
                <div>
                <Text>Email:</Text><Input type= "email" placeholder= "enter your mail id" name= "email" onChange= {this.handleChange} required/>
                {this.state.loginError!== null ? <Error>{this.state.loginError}</Error> : null}
                </div>
                <div>
                <Text>Password</Text>:<Input type= "password" placeholder= "enter your password" name= "password" onChange= {this.handleChange}required/>
                {/* {this.state.passwordError ? <Error>{this.state.passwordError}</Error> : null} */}
                </div>
                <Input type="submit" value="Login"/>
            </Forms>
        );
    }
}

export default withRouter(Login);