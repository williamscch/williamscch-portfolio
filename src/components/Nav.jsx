import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setCLicked] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', setCLicked);

    return function cleanup() {
      window.removeEventListener('click', setCLicked);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 64) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const handleClick = () => {
    setCLicked(!clicked);

    if (!clicked) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  };

  const blurBodyBg = () => {
    if (clicked) {
      document.body.classList.add('blur');
    }
  };

  return (
    <NavContainer>
      <nav className={scrolled ? 'nav scroll' : 'nav'}>
        <ul className="bar">
          <li className="bar-item">
            <Link to="home" spy hashSpy smooth delay={200} duration={600}>
              Home
            </Link>
          </li>
          <li className="bar-item">
            <Link
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
          <li className="bar-item">
            <Link
              to="about"
              spy
              hashSpy
              smooth
              offset={40}
              delay={200}
              duration={600}
            >
              About
            </Link>
          </li>
          <li className="burger-item bar-item me">
            <a href="/" className="me">
              Me.
            </a>
          </li>
          <li className="bar-item">
            <Link
              to="portfolio"
              spy
              smooth
              hashSpy
              offset={40}
              delay={200}
              duration={600}
              isDynamic
            >
              Portfolio
            </Link>
          </li>
          <li className="bar-item">
            <Link
              to="skills"
              spy
              hashSpy
              smooth
              offset={40}
              delay={200}
              duration={600}
              isDynamic
            >
              Skills
            </Link>
          </li>
          <li className="bar-item">
            <Link to="contact" spy hashSpy smooth delay={200} duration={600}>
              Contact
            </Link>
          </li>
          <li className="burger-item">
            <button
              onClick={() => {
                handleClick();
                blurBodyBg();
              }}
              onKeyDown={handleClick}
              type="button"
            >
              <FontAwesomeIcon icon={faBars} className="burger-bars" />
            </button>
          </li>
        </ul>
      </nav>

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
    </NavContainer>
  );
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

  .bar {
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .bar-item {
      display: none;
    }

    .burger-item {
      list-style: none;
      display: block;

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

  @media only screen and (min-width: 641px) {
  }

  @media only screen and (min-width: 1008px) {
    .bar {
      gap: 3.5rem;
      .burger-item {
        display: none;
      }
      .bar-item {
        display: block;
        list-style: none;
        color: var(--navbar-links);
        cursor: pointer;
      }

      .bar-item:hover {
        color: var(--green);
      }

      .bar-item .active {
        color: var(--green);
      }
    }
  }
`;

export default Nav;
