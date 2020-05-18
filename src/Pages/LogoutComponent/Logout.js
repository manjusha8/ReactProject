import React, {Component} from "react";
import {HeaderWrapper, Header, ShopLeft, ShopRight, Button} from './LogoutStyle';
import HeaderComponent from "../../CommonComponents/HeaderComponent/HeaderComponent";
import {withRouter} from 'react-router-dom';

class Logout extends Component {

    logout= ()=> {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('password');
        this.props.history.push("/")
    }

  render() {
    return (
      <div>
        <HeaderComponent />
        <HeaderWrapper>
          <Header>
            <ShopLeft>Are you sure you want to logout :</ShopLeft>
            <ShopRight>
                <Button onClick= {this.logout}>Logout</Button>
            </ShopRight>
          </Header>
        </HeaderWrapper>
      </div>
    );
  }
}

export default withRouter(Logout);
