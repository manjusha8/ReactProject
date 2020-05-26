import React, {Component} from "react";
import {HeaderWrapper, Header, ShopLeft, ShopRight, Button} from './LogoutStyle';
import HeaderComponent from "../../CommonComponents/HeaderComponent/HeaderComponent";
import {withRouter} from 'react-router-dom';
import fire from "../../Config/Fire";

class Logout extends Component {

    logout= ()=> {

      fire.auth().signOut();
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
