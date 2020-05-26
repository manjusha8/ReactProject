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
import fire from "../../Config/Fire";

class Login extends Component {
  state = {
    email: "",
    password: "",

    loginError: "",
    login: true,
    signUp: false,
    type: "password",
  };


  onSubmitHandler = (event) => {
    event.preventDefault();
    
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
      this.props.history.push("/home");

    })
    .catch((err)=>
    {
      let loginError= ""
      if(err.code=== 'auth/user-not-found')
      {
        loginError= "new user please signup!!"
      }
      if(err.code=== 'auth/wrong-password'){
        loginError= "password incorect"
      }
      this.setState({
        loginError: loginError
      })
    console.log("login error: ",err)
    });


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

  showHide = () => {
    this.setState(({ type }) => ({
      type: this.state.type === "password" ? "text" : "password",
    }));
  };

  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <ImageWrapper>
            <img src={formpage} alt="formpage" />
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
              <div style={{ position: "relative" }}>
                <Input
                  type={this.state.type}
                  placeholder="enter your password"
                  name="password"
                  onChange={this.handleChange}
                  required
                />
                <Toggle onClick={this.showHide}>
                  {this.state.type === "password" ? "show" : "hide"}
                </Toggle>
              </div>
            </div>
            <div>
              <SignUpButton
                onClick={this.signUpHandler}
                clicked={this.state.signUp}
              >
                Sign Up
              </SignUpButton>
              <LoginButton
                type=" submit"
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
