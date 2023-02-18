import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Project = ({ children }) => (
  <ProjectContainer className="modal is-open">
    <div className="modal-container">
      <button type="button" className="modal-close">
        x
      </button>
      {' '}
      {children}
      <div className="hola is-open">
        <h1>hola</h1>
      </div>
    </div>
  </ProjectContainer>
);

const ProjectContainer = styled.article`
  .modal {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.705);
    display: none;
  }

  .hola {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.705);
    display: none;
  }

  .hola.is-open {
    display: flex;
  }
`;

Project.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Project;
