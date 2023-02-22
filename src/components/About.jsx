import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import meImg from '../assets/hero-img.png';

const About = () => {
  const { about } = useSelector((state) => state);
  return (
    <AboutContainer id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="content">
        <p>{about.column1}</p>
        <img src={meImg} alt="img" />
        <p className="last-column">
          {about.column2}
          <button type="button"> Contact me</button>
        </p>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  min-height: 100vh;
  max-height: 100vh;
  padding: 90px 6rem;
  display: none;

  .title {
    text-align: start;
    width: 20%;
    border-bottom: 2px solid var(--green);
    margin-bottom: 2rem;
  }
  .content {
    display: grid;
    grid-template-columns: 30% 40% 30%;

    img {
      width: 55%;
      align-self: flex-end;
      justify-self: center;
    }
    .last-column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        width: 10rem;
      }
    }
  }
`;

export default About;
