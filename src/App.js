import React, { useState, useEffect } from 'react';
import {ThemeProvider} from 'styled-components';
import Theme from './Styles/Theme';
import Routes from './RoutingComponent/Route';

function App(props) {

  
  return (
      <div >
        <ThemeProvider theme= {Theme}>
          <Routes/>
        </ThemeProvider>
      </div>

  );
}

export default App;
