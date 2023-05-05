import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const ProjectModal = ({ open, setOpen, project }) => (
  <ProjectModalContainer>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent>
        <img src={project.image} alt="project-preview" />
        <p>{project.description}</p>
      </DialogContent>
      <DialogActions>
        <Link href={project.live} target="_blank">
          Live
        </Link>
        <Link href={project.source} target="_blank">
          Source Code
        </Link>
      </DialogActions>
    </Dialog>
  </ProjectModalContainer>
);

ProjectModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string,
    live: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
};

const ProjectModalContainer = styled.div``;

export default ProjectModal;
