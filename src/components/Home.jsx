import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import heroImg from '../assets/banner-bg.png';

const Home = () => (
  <HomeContainer id="home">
    <div>
      <h1>I&apos;m Williams Colmenares</h1>
      <p>I&apos;m a Full-Stack Developer Based on Venezuela</p>
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
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 87%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  /* padding: 100px 0; */

  h1 {
    font-size: 2.5rem;
  }

  p {
    color: var(--title);
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }

  div {
    padding: 5rem;
  }
`;

export default Home;
