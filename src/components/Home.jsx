import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import heroImg from '../assets/img/gris.svg';

const Home = () => (
  <HomeContainer id="home">
    <div className="bg">
      <img src={heroImg} alt="hero-williams" />
    </div>
    <div className="content">
      <h1>I&apos;m Williams Colmenares</h1>
      <p>A Full-Stack Web Developer Based on Venezuela</p>
      <button type="button">
        <Link
          to="portfolio"
          spy
          smooth
          hashSpy
          offset={-80}
          delay={200}
          duration={600}
        >
          Portfolio
        </Link>
      </button>
    </div>
  </HomeContainer>
);

const HomeContainer = styled.section`
  min-height: 100vh;

  h1 {
    font-size: 2.5rem;
  }

  p {
    color: var(--title);
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }

  .bg {
    width: 100%;
    height: 100vh;
    background-color: var(--third-bg);
    position: absolute;

    img {
      object-fit: scale-down;
      width: 100%;
    }
  }

  .content {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
`;

export default Home;
