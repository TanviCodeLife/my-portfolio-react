import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
      <GlobalStyles />
    </div>
  );
}

export default App;