import React from 'react';
import styled from 'styled-components';
import heroImg from '../assets/bg-hero.png';

const Hero = () => (
  <HeroContainer>
    <div>
      <h1>I&apos;m Williams Colmenares</h1>
      <h2>I&apos;m a Remote Full-Stack Developer Based on Venezuela</h2>
      <button type="button">Portfolio</button>
    </div>
  </HeroContainer>
);

const HeroContainer = styled.section`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 90%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  div {
   padding: 5rem;
  }
`;

export default Hero;
