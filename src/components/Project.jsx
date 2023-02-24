import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Project.css';

const Project = ({ children }) => (
  <article className="modal is-open">
    <div className="modal-container">
      <button type="button" className="modal-close">
        x
      </button>
      {' '}
      {children}
    </div>
  </article>
);

Project.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Project;
