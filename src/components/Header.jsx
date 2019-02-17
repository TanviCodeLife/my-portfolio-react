import React from 'react';
import HomeNav from './HomeNav';
import AboutNav from './AboutNav';
import PortfolioNav from './PortfolioNav';
import styled from 'styled-components';
import ContactNav from './ContactNav';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 10% 10% 10% auto;
    overflow: hidden;
    `;

function Header() {
    return (
    <Wrapper>
        <HomeNav />
        <AboutNav />
        <PortfolioNav/>
        <ContactNav/>
    </Wrapper>
    );
}

export default Header;