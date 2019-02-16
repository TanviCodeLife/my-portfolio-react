import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import splash from '../assets/images/splash.jpg';

const Wrapper = styled.section`
  padding: 2em;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;



const TestButton = styled(Link)`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 3px;
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
  `;


function Splash() {
    return (
        <Wrapper>
            <Image src={splash} />

            {/* <div>
                <h4>Have an account?</h4>
                <TestButton to="/">Home</TestButton>  <TestButton to="/signin">Sign In</TestButton>
            </div> */}

        </Wrapper>
    );
}

export default Splash;