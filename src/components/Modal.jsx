import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <ModalContainer>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    </ModalContainer>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const ModalContainer = styled.div`
  .modal.display-none {
    display: none;
  }

  .modal.display-block {
    display: block;
  }
`;

export default Modal;
