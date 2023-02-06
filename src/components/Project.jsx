import React from 'react';
import PropTypes from 'prop-types';

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
  children: PropTypes.string.isRequired,
};

export default Project;
