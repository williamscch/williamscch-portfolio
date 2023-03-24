import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Burger = (props) => {
  const { handleClick, clicked } = props;

  return (
    <BurgerContainer>
      <button
        onClick={handleClick}
        onKeyDown={handleClick}
        className={`icon ${clicked ? 'open' : ''}`}
        type="button"
      >
        <i className="fa-sharp fa-regular fa-bars" />
      </button>
    </BurgerContainer>
  );
};

Burger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default Burger;

const BurgerContainer = styled.div`
  .icon {
    /* background-color: transparent; */
    border: none;
    height: 2rem;
    width: 90%;
    padding: 0;
    margin: 0;
    position: relative;
    cursor: pointer;
    display: inline-block;
    align-self: center;

    span {
      /* background-color: var(--title); */
      background-color: red;
      position: absolute;
      border-radius: 2px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      width: 100%;
      height: 4px;
      transition-duration: 500ms;
    }

    span:nth-child(1) {
      top: 0px;
      left: 0px;
    }

    span:nth-child(2) {
      top: 13px;
      left: 0px;
      opacity: 1;
    }

    span:nth-child(3) {
      bottom: 0px;
      left: 0px;
    }
  }

  .icon.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .icon.open span:nth-child(2) {
    opacity: 0;
  }
  .icon.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;
