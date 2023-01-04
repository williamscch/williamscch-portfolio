import React from 'react';
import styled from 'styled-components';

const Portfolio = () => (
  <PortfolioContainer id="portfolio">
    <div className="title">
      <h2>My Portfolio</h2>
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
