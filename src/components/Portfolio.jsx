import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ProjectModal from './ProjectModal';

// import Project from './Project';

const Portfolio = () => {
  const { portfolio } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  return (
    <PortfolioContainer id="portfolio">
      <div className="title">
        <h2>My Portfolio</h2>
      </div>
      <div className="projects-container">
        {portfolio.map((project) => (
          <article key={project.id}>
            <Button
              onClick={() => {
                setOpen(true);
                setCurrentProject({
                  id: project.id,
                  title: project.title,
                  description: project.description,
                  image: project.image,
                  source: project.source,
                  live: project.live,
                  languages: project.languages,
                });
              }}
              className="bg-container"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            />

            <ProjectModal
              open={open}
              setOpen={setOpen}
              project={currentProject}
            />
          </article>
        ))}
      </div>
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

  .projects-container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: 9.5rem;
    place-content: center;

    article {
      display: flex;
      justify-content: center;
      padding: 0 1rem;
      margin-bottom: 1.5rem;

      .bg-container {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        border-radius: 4px;
      }
    }
  }

  @media only screen and (min-width: 641px) {
    padding: 6rem 1rem;
    margin: 0 3rem;

    .title {
      padding-bottom: 3rem;
    }

    .projects-container {
      grid-auto-rows: 19rem;
    }
  }

  @media only screen and (min-width: 1008px) {
    padding: 7rem 1rem;
    margin: 0 6.5rem;
    min-height: 100vh;

    .projects-container {
      grid-auto-rows: 17rem;
      grid-template-columns: 33% 33% 33%;
    }
  }
`;

export default Portfolio;
