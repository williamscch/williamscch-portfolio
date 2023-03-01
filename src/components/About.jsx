import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import meImg from '../assets/img/blue-pic.png';

const About = () => {
  const { about } = useSelector((state) => state);
  return (
    <AboutContainer id="about">
      <div className="title">
        <h2>About Me</h2>
        <hr />
      </div>
      <div className="content">
        <img src={meImg} alt="img" />
        <p>{about.column1}</p>
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
    }

    hr {
      background-color: var(--green);
      width: 3rem;
      margin: 0;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40% 30% 30%;
    min-height: 92vh;
    padding: 0 1rem;

    img {
      width: 100%;
      background-color: var(--third-bg);
    }

    p {
      font-size: 0.8rem;
      margin-top: 0;
      margin-bottom: 0.7rem;
    }

    .last-column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
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
  }

  @media only screen and (min-width: 1008px) {
    padding: 7rem 0;
    min-height: 100vh;
  }
`;

export default About;

// min-height: 100vh;
// max-height: 100vh;
// padding: 90px 6rem;
// display: none;

// .title {
//   text-align: start;
//   width: 20%;
//   border-bottom: 2px solid var(--green);
//   margin-bottom: 2rem;
// }
// .content {
//   display: grid;
//   grid-template-columns: 30% 40% 30%;

//   img {
//     width: 55%;
//     align-self: flex-end;
//     justify-self: center;
//   }
//   .last-column {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     button {
//       width: 10rem;
//     }
//   }
// }
