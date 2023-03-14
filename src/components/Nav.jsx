import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const [scrolled, setScrolled] = useState(false);

  const { handleClick, clicked } = props;

  const handleScroll = () => {
    if (window.scrollY >= 64) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <NavContainer>
      <nav className={scrolled ? 'nav scroll' : 'nav'}>
        <ul
          className={`links ${clicked ? 'active' : ''}`}
          onScroll={handleScroll}
        >
          <li className="nav-item close">
            <button type="button" onClick={handleClick} onKeyDown={handleClick}>
              <FontAwesomeIcon icon={faXmark} className="x-mark" />
            </button>
          </li>
          <li className="nav-item">
            <Link to="home" spy hashSpy smooth delay={200} duration={600}>
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
              offset={40}
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
              offset={10}
              delay={200}
              duration={600}
            >
              About
            </Link>
          </li>
          <li className="nav-item me">
            <a href="/" className="me">
              Me.
            </a>
          </li>
          <li className="nav-item">
            <Link
              onClick={handleClick}
              to="portfolio"
              spy
              smooth
              hashSpy
              offset={40}
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
              offset={-40}
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
              offset={20}
              delay={200}
              duration={600}
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className="burger">
          <li className="burger-item">
            <a href="/">Me.</a>
          </li>
          <li className="burger-item">
            <button onClick={handleClick} onKeyDown={handleClick} type="button">
              <FontAwesomeIcon icon={faBars} className="burger-bars" />
            </button>
          </li>
        </ul>
      </nav>
    </NavContainer>
  );
};

Nav.propTypes = {
  handleClick: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
};

const NavContainer = styled.header`
  .nav {
    background-color: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    height: 5.5rem;
    display: flex;
    align-items: center;
    transition: 0.5s all ease;
    z-index: 999;
    padding: 1.5rem 0;
  }

  .nav:hover {
    background-color: white;
    border-bottom: rgba(255, 255, 255, 0.7);
    box-shadow: 4px 0 20px -5px rgb(0 0 0 / 10%);
  }

  .nav.scroll {
    background-color: white;
    border-bottom: rgba(255, 255, 255, 0.7);
    box-shadow: 4px 0 20px -5px rgb(0 0 0 / 10%);
    height: 3.7rem;
  }

  .burger {
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .burger-item {
      list-style: none;

      a {
        text-decoration: none;
        font-size: 1.5rem;
        color: var(--green);
      }

      a:active {
        color: var(--title);
      }

      button {
        background-color: transparent;
        border: none;
        padding: 0;

        .burger-bars {
          color: var(--title);
          font-size: 1.5rem;
        }
      }
    }
  }

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

    .nav-item.me {
      display: none;
    }
  }

  .links.active {
    right: 0;
    transition: 0.5s all ease-in-out;
  }
`;

export default Nav;
