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
  padding: 100px 0;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

export default Skills;
