import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import Project from './Project';

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
        autoPlay
        keyBoardControl
        responsive={responsive}
        showDots
        infinite
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {portfolio.map((project) => (
          <Project
            className="project"
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            source={project.source}
            live={project.live}
            img={project.image}
            languages={project.languages}
          >
            <article>
              <h2>{project.title}</h2>
              <img src={project.image} alt="project-screenshot" width="200" />
              <div>
                {project.languages.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </article>
          </Project>
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
/* z-index: -999; */
  }
  .project {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.705);
  }
`;

export default Portfolio;
