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
    login: true,
    signUp: false,
    type: "password",
  };

  validate = () => {
    let loginError = "";
    let users = JSON.parse(sessionStorage.getItem("users"));
    let validUser = false;
    for (let i = 0; i < users.length; i++) {
      console.log("users:", users[users.length - 1]);
      if (this.state.email === users[i].email) {
        if (users[i].password === this.state.password) {
          loginError = "";
          return true;
        } else {
          validUser = true;
          loginError= "email or password is incorrect"
        }
      } else {
        validUser = true;
        loginError= "new user please SignUp!! "
      }
    }

    if (validUser) {
      this.setState({
        loginError: loginError
      });
    }
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
