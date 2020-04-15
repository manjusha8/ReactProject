import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Dummy from './DummyComponent/Dummy';
import HeaderComponent from './CommonComponents/HeaderComponent/HeaderComponent';
// import  BannerImage from './CommonComponents/BannerImageComponent/BannerImage';
// import BannerButtons from './CommonComponents/ReceipeButtons/BannerButtons';
import MainContent from './Pages/MainComponent/MainContent';
import StarComponent from './Pages/StarComponent/StarComponent';
import ChangeBannerItem from './CommonComponents/ChangeBannerComponent/ChangeBannerItem';
// import '../node_modules/@fortawesome/fontawesome-free/js/all';
// import '../node_modules/@fortawesome/react-fontawesome';



function App() {
  return (
    <div className="App">
      
      <div >
        <HeaderComponent />
        <ChangeBannerItem />
        {/* <BannerImage />
        <BannerButtons/> */}
        <MainContent/>
        {/* <StarComponent/> */}
      </div>

    </div>
  );
}

export default App;
