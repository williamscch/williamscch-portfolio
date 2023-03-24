import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import meImg from '../assets/img/about-img.svg';

const About = () => {
  const { about } = useSelector((state) => state);
  return (
    <AboutContainer id="about">
      <div className="title">
        <h2>About Me</h2>
        <hr />
      </div>

      <div className="content">
        <div className="image">
          <img src={meImg} alt="img" />
        </div>

        <div className="first-column">
          <p>{about.column1}</p>
        </div>

        <div className="last-column">
          <p>{about.column2}</p>
          <button type="button">
            <a
              href="https://docs.google.com/document/d/13xXTFPHTSBDO_Et2TzIzYGzJufeC6oMbC6esMc0K_8Y/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Get my CV
            </a>
          </button>
        </div>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  padding: 2.5rem 0;

  .title {
    padding: 0 1rem;
    text-align: start;
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 1.25rem;
      font-size: var(--fs-title);
    }

    hr {
      background-color: var(--green);
      width: 4rem;
      margin: 0;
      height: 3px;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40% 30% 30%;
    min-height: 92vh;

    .image {
      padding: 0 1rem;
      background-color: var(--third-bg);
      display: flex;
      justify-content: center;

      img {
        width: 80%;
        object-fit: cover;
      }
    }

    p {
      font-size: 0.8rem;
      margin-top: 0;
      margin-bottom: 0.7rem;
      align-self: center;
      line-height: 1.4;
    }

    .first-column {
      padding: 0 1rem;
    }

    .last-column {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;

      button {
        margin-top: auto;
        width: 10rem;

        a {
          text-decoration: none;
          color: var(--white);
        }
      }
    }
  }

  @media only screen and (min-width: 641px) {
    padding: 6rem 0;

    .content {
      margin: 0 1.5rem;
      grid-template-rows: 45% 25% 30%;
      min-height: 90vh;
      p {
        font-size: 1rem;
        line-height: 1.7;
      }
    }
  }

  @media only screen and (min-width: 1008px) {
    padding: 7rem 0;
    margin: 0 6rem;
    min-height: 100vh;

    .content {
      grid-template-columns: 35% 30% 35%;
      grid-template-rows: 100%;
      min-height: auto;
      margin: 0;

      .first-column {
        order: -1;
      }

      .image {
        padding: 0;
        img {
          width: 100%;
          object-fit: scale-down;
        }
      }

      p {
        font-size: 1.1rem;
        line-height: 1.8;
      }
    }
  }
`;

export default About;
