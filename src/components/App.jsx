import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Splash from './Splash';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    font-family: 'Montserrat', sans-serif;
  }
`;



function App() {
    return (
        <div>
        <GlobalStyles />
          <Header />
          <Splash/>
        </div>
    );
}

export default App;