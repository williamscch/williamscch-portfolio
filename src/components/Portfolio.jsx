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
        className="carousel"
        // autoPlay
        keyBoardControl
        responsive={responsive}
        showDots
        infinite
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {portfolio.map((project) => (
          <article
            key={project.id}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="info-container">
              <h2>{project.title}</h2>
              <div className="languages">
                {project.languages.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
              <button type="button">See more</button>
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
  min-height: 100vh;
  padding: 100px 6rem;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
  }

  .carousel {
    cursor: grab;
    click

    ul {
      gap: 5rem;
    }
  }

  article {
    min-height: 30rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: antiquewhite;
    border-radius: 1.5rem;

    .info-container {
      background-color: #343a40ae;
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        color: white;
        text-shadow: 1px 1px 2px var(--green);
      }

      p {
        color: white;
      }
      
    }
    .languages {
      display: flex;
    }
  }
`;

export default Portfolio;
