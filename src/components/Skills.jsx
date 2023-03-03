import React from 'react';
import styled from 'styled-components';

const Skills = () => (
  <SkillsContainer id="skills">
    <div className="title">
      <h2>My Skills</h2>
    </div>
  </SkillsContainer>
);

const SkillsContainer = styled.section`
  min-height: 100vh;
  padding: 2.5rem 1rem;

  .title {
    width: 100%;
    display: grid;
    place-items: center;

    h2 {
      font-size: var(--fs-title);
    }
  }
`;

export default Skills;
