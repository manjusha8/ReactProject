import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponents from './HeaderComponent/HeaderComponent';
import BannerComponent from './BannerComponent/BannerComponent';
import Dummy from './DummyComponent/Dummy';
// import { OuterWrapper } from './Style';

function App() {
  return (
    <div className="App">
      
      <div style = {{maxWidth : '960px' , margin : '0 auto'}}>
        <HeaderComponents />
        <BannerComponent />
        {/* <Dummy/> */}
      </div>

    </div>
  );
}

export default App;
