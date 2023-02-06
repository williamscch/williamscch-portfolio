import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const Portfolio = () => (
  <PortfolioContainer id="portfolio">
    <div className="title">
      <h2>My Portfolio</h2>
      <div>
        <button type="button">Modal 1</button>
        <Project>
          <h3>Project 1</h3>
          <p>Hola soy un parrafo</p>
        </Project>
      </div>
    </div>
  </PortfolioContainer>
);

const PortfolioContainer = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

export default Portfolio;
