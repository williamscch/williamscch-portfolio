import React from 'react';
import styled from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const MobileMenu = ({ clicked, handleClick }) => (
  <MobileMenuContainer>
    <ul className={`links ${clicked ? 'active' : ''}`}>
      <li className="nav-item close">
        <button type="button" onClick={handleClick} onKeyDown={handleClick}>
          <FontAwesomeIcon icon={faXmark} className="x-mark" />
        </button>
      </li>
      <li className="nav-item">
        <Link
          to="home"
          onClick={handleClick}
          spy
          hashSpy
          smooth
          delay={200}
          duration={600}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleClick}
          to="services"
          spy
          hashSpy
          smooth
          delay={200}
          duration={600}
        >
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleClick}
          to="about"
          spy
          hashSpy
          smooth
          delay={200}
          duration={600}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleClick}
          to="portfolio"
          spy
          smooth
          hashSpy
          delay={200}
          duration={600}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleClick}
          to="skills"
          spy
          hashSpy
          smooth
          delay={200}
          duration={600}
        >
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleClick}
          to="contact"
          spy
          hashSpy
          smooth
          delay={200}
          duration={600}
        >
          Contact
        </Link>
      </li>
    </ul>
  </MobileMenuContainer>
);

MobileMenu.propTypes = {
  clicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const MobileMenuContainer = styled.div`
  .links {
    position: fixed;
    top: 0;
    right: -2000px;
    display: flex;
    flex-direction: column;
    width: 19rem;
    background-color: var(--white);
    min-height: 100vh;
    margin: 0;
    padding: 2rem 1.5rem 9.5rem;
    transition: 0.5s all ease-in-out;
    z-index: 2000;
    box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);

    .nav-item {
      list-style: none;
      font-size: 1.25rem;
      padding: 0.625rem 1.25rem;
      color: var(--btn-hover);
    }

    .nav-item .active {
      color: var(--green);
    }

    .nav-item.close {
      display: flex;
      align-items: center;
      justify-content: end;

      button {
        background-color: transparent;
        border: none;
        padding: 0;
        .x-mark {
          color: var(--title);
          font-size: var(--fs-title);
        }
      }
    }
  }

  .links.active {
    right: 0;
    transition: 0.5s all ease-in-out;
  }
`;

export default MobileMenu;
