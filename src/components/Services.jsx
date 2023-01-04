import React from 'react';
import styled from 'styled-components';

const Services = () => (
  <ServicesContainer id="services">
    <div className="title">
      <h2>My Services</h2>
    </div>
  </ServicesContainer>
);

const ServicesContainer = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

export default Services;
