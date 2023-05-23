import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Link,
  Dialog,
  // DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const ProjectModal = ({ open, setOpen, project }) => (
  <ProjectModalContainer>
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
      <h2 style={{ fontFamily: 'Arbutus Slab", serif', textAlign: 'center', margin: '1rem 0 0' }}>{project.title}</h2>
      <DialogContent>
        <img
          src={project.image}
          alt="project-preview"
          style={{ width: '100%' }}
        />
        <p style={{ margin: '0' }}>{project.description}</p>
        <div style={{ padding: '1rem 0 0' }}>
          <h4 style={{ margin: '0', textAlign: 'center' }}>
            Tech Stack 🛠️
          </h4>
          <ul style={{
            display: 'flex', flexWrap: 'wrap', gap: '4px', padding: '0',
          }}
          >
            {project.languages !== undefined && project.languages.map((l) => (
              <li
                key={l}
                style={{
                  background: 'var(--secondary-bg)', color: 'var(--white)', listStyle: 'none', padding: '5px', borderRadius: '5px',
                }}
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
      <DialogActions sx={{ gap: '3rem', alignSelf: 'center' }}>
        <Link href={project.source} target="_blank" sx={{ color: 'var(--green)', fontSize: '1.1rem' }}>
          Source Code
        </Link>
        {project.live !== '/' && (
          <Link href={project.live} target="_blank" sx={{ color: 'var(--green)', fontSize: '1.1rem' }}>
            Live
          </Link>
        )}
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
