import React from 'react';
import styled from 'styled-components';
import jsSquare from '../assets/img/1.svg';
import reactSquare from '../assets/img/2.svg';
import reduxSquare from '../assets/img/3.svg';
import rubySquare from '../assets/img/4.svg';
import railsSquare from '../assets/img/5.svg';
import vscodeSquare from '../assets/img/6.svg';
import psqlSquare from '../assets/img/7.svg';
import netlifySquare from '../assets/img/8.svg';
import webpackSquare from '../assets/img/9.svg';
import bootstrapSquare from '../assets/img/10.svg';
import githubSquare from '../assets/img/11.svg';
import gitSquare from '../assets/img/12.svg';
import nodejsSquare from '../assets/img/13.svg';
import htmlSquare from '../assets/img/14.svg';
import cssSquare from '../assets/img/15.svg';
import scrumSquare from '../assets/img/16.svg';
import capybaraSquare from '../assets/img/17.svg';
import codepenSquare from '../assets/img/18.svg';
import jestSquare from '../assets/img/19.svg';
import rspecSquare from '../assets/img/20.svg';

const Skills = () => (
  <SkillsContainer id="skills">
    <div className="title">
      <h2>My Skills</h2>
    </div>

    <div className="container">
      <div className="square">
        <img src={jsSquare} alt="skill" />
      </div>

      <div className="square">
        <img src={reactSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={reduxSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={rubySquare} alt="skill" />
      </div>
      <div className="square">
        <img src={railsSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={vscodeSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={psqlSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={netlifySquare} alt="skill" />
      </div>
      <div className="square">
        <img src={webpackSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={bootstrapSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={githubSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={gitSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={nodejsSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={htmlSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={cssSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={scrumSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={capybaraSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={codepenSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={jestSquare} alt="skill" />
      </div>
      <div className="square">
        <img src={rspecSquare} alt="skill" />
      </div>
    </div>
  </SkillsContainer>
);

const SkillsContainer = styled.section`
  padding: 2.5rem 0;

  .title {
    width: 100%;
    display: grid;
    place-items: center;
    padding: 0 1rem 1rem 1rem;
    margin-bottom: 3rem;

    h2 {
      font-size: var(--fs-title);
    }
  }

  .container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: auto;

    .square {
      padding: 0 1rem;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;

export default Skills;
