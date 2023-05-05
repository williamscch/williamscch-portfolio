import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ProjectModal from './ProjectModal';

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
            key={project.id}
            className="parent"
          >
            <div
              className="child"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <span>
                <SearchIcon />
                {/* {project.title} */}
              </span>
            </div>
          </Button>
        ))}
      </div>
      <ProjectModal open={open} setOpen={setOpen} project={currentProject} />
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

    .parent {
      padding: 0;
      margin: 0 1rem 1.5rem;
      overflow: hidden;

      .child {
        border-radius: 4px;
        width: 100%;
        height: 100%;
        background-color: black;
        background-position: top;
        background-size: cover;
        transition: all 0.5s;
      }
    }

    .parent:hover .child {
      transform: scale(1.1);
    }

    .child::before {
      content: "";
      display: none;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .parent:hover .child:before,
    .parent:focus .child:before {
      display: block;
    }

    span {
      color: white;
      font-family: "Arbutus Slab", serif;
      display: none;
      position: absolute;
      text-align: center;
      width: 100%;
      height: 100%;
    }

    .parent:hover span,
    .parent:focus span {
      display: grid;
      place-items: center;
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
