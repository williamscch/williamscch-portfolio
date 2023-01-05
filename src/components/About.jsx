import React from 'react';
import styled from 'styled-components';

const About = () => (
  <AboutContainer id="about">
    <div className="title">
      <h2>About Me</h2>
    </div>
  </AboutContainer>
);

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

export default About;
