import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
// import Project from './Project';

const Portfolio = () => {
  const { portfolio } = useSelector((state) => state);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <PortfolioContainer id="portfolio">
      <div className="title">
        <h2>My Portfolio</h2>
      </div>
      <Carousel
        autoPlay
        keyBoardControl
        responsive={responsive}
        showDots
        infinite
        arrows={false}
      >
        {portfolio.map((project) => (
          <article key={project.id}>
            <div
              className="bg-container"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="info-container">
                <h2>{project.title}</h2>
                <div className="languages">
                  {project.languages.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
                <button type="button">See more</button>
              </div>
            </div>
            {/* <Project id={project.id}>
              <img src={project.image} alt="project-screenshot" width="200" />
              <div className="info-container">
                <h2>{project.title}</h2>
                <div className="languages">
                  {project.languages.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
                <button type="button">See more</button>
              </div>
            </Project> */}
          </article>
        ))}
      </Carousel>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.section`
  min-height: 80vh;
  padding: 2.5rem 0;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 4rem;

    h2 {
      font-size: var(--fs-title);
    }
  }

  .react-multi-carousel-list {
    cursor: grab;
  }

  article {
    min-height: 30rem;
    display: flex;
    justify-content: center;

    .bg-container {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 95%;
      height: 90%;
      border-radius: 5px;
      position: absolute;

      .info-container {
        background-color: #343a40c7;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 5px;
        display: grid;
        grid-template-rows: 70% 20% 10%;
        grid-template-columns: 100%;
        padding: 1rem;

        h2 {
          color: white;
          font-weight: 500;
          font-size: 1.5rem;
          align-self: end;
        }

        .languages {
          display: flex;
          gap: 0.5rem;
          align-self: center;

          span {
            color: white;
            font-size: 0.8rem;
          }
        }

        button {
          padding: 0;
          max-width: 100%;
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

export default Portfolio;
