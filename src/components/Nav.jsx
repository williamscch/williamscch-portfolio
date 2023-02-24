import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Burger from './Burger';

const Nav = () => {
  const [clicked, setCLicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => {
    setCLicked(!clicked);
  };

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
      <div className={scrolled ? 'nav scroll' : 'nav'}>
        <ul
          className={`links ${clicked ? 'active' : ''}`}
          onScroll={handleScroll}
        >
          <li className="nav-item">
            <Link to="home" spy hashSpy smooth delay={200} duration={600}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="services"
              spy
              hashSpy
              smooth
              offset={-40}
              delay={200}
              duration={600}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
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
          <li className="nav-item">
            <a href="/" className="me">
              Me.
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="portfolio"
              spy
              smooth
              hashSpy
              offset={-20}
              delay={200}
              duration={600}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
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
        <div className="burger">
          <Burger clicked={clicked} handleClick={handleClick} />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  .nav {
    background-color: transparent;
    position: fixed;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    transition: 0.5s;
    z-index: 999;
  }

  .nav:hover {
    background-color: white;
    border-bottom: rgba(255, 255, 255, 0.7);
    box-shadow: 4px 0 20px -5px rgb(0 0 0 / 10%);
  }

  .scroll {
    background-color: white;
    border-bottom: rgba(255, 255, 255, 0.7);
    box-shadow: 4px 0 20px -5px rgb(0 0 0 / 10%);
    height: 3rem;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nav-item,
  .me {
    text-decoration: none;
    list-style: none;
    font-size: 1rem;
    cursor: pointer;
  }

  .nav-item .active {
    color: var(--green);
  }

  .nav-item:hover {
    color: var(--green);
  }

  .me:visited {
    color: var(--green);
  }

  .me:hover {
    color: var(--title);
  }

  .me {
    font-size: 1.5rem;
    color: var(--green);
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    align-items: center;
    a {
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
  }

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export default Nav;
