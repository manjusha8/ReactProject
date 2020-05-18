import React, { Component } from "react";
import { Forms, Input, Text, Error, Toggle } from "./LoginStyle";
import { withRouter } from "react-router-dom";
import formpage from "../../assests/images/formpage.jpeg";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  ImageWrapper,
  SignUpButton,
  LoginButton,
} from "./UserFormsStyle";

class Login extends Component {
  state = {
    email: "",
    password: "",

    loginError: "",
    // passwordError: ''
    login: true,
    signUp: false,
    type: 'password'
  };

  validate = () => {
    if (
      this.state.email === sessionStorage.getItem("email") &&
      this.state.password === sessionStorage.getItem("password")
    ) {
      this.setState({
        loginError: "",
      });
      return true;
    } else {
      this.setState({
        loginError: "invalid email or password",
      });
    }

    return false;
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    console.log("validate :", isValid);
    if (isValid) {
      console.log("newusers :", this.state.name);
      this.props.history.push("/home");
    } else {
      console.log("validate is false s");
    }
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  loginHandler = () => {
    this.setState({
      login: true,
      signUp: false,
    });
    this.props.history.push("/login");
  };

  signUpHandler = () => {
    this.setState({
      signUp: true,
      login: false,
    });
    this.props.history.push("/");
  };

  showHide= ()=> {
    
    this.setState(({type}) => ({
        type: this.state.type === 'password' ? 'text' : 'password'
    }))

  }

  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <ImageWrapper>
            <img src={formpage} alt="image" />
          </ImageWrapper>
        </LeftWrapper>
        <RightWrapper>
          <Forms onSubmit={this.onSubmitHandler}>
            <div>
              <Text>Email:</Text>
              <Input
                type="email"
                placeholder="enter your mail id"
                name="email"
                onChange={this.handleChange}
                required
              />
              {this.state.loginError !== null ? (
                <Error>{this.state.loginError}</Error>
              ) : null}
            </div>
            <div>
              <Text>Password</Text>
              <div style= {{position: "relative"}}><Input
                type={this.state.type}
                placeholder="enter your password"
                name="password"
                onChange={this.handleChange}
                required
              />
              <Toggle onClick={this.showHide}>{this.state.type === 'password' ? 'show' : 'hide'}</Toggle>
              </div>
              {/* {this.state.passwordError ? <Error>{this.state.passwordError}</Error> : null} */}
            </div>
            <div>
              <SignUpButton 
                onClick={this.signUpHandler}
                clicked={this.state.signUp}
              >
                Sign Up
              </SignUpButton>
              <LoginButton type= " submit"
                onClick={this.loginHandler}
                clicked={this.state.login}
              >
                Login
              </LoginButton>
            </div>
          </Forms>
          
        </RightWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(Login);
