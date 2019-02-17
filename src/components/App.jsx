import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Splash from './Splash';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  }
`;



function App() {
    return (
        <div>
            <h1>App Works</h1>
            <Splash>
            </Splash>
        </div>
    );
}

export default App;