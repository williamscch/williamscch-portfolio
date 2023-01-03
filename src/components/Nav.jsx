import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Burger from './Burger';

const Nav = () => {
  const [clicked, setCLicked] = useState(false);
  const handleClick = () => {
    setCLicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <ul className={`links ${clicked ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" spy smooth offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="services" spy smooth offset={50} duration={500}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy smooth offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="me" spy smooth offset={50} duration={500} className="me">
              Me.
            </Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" spy smooth offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" spy smooth offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy smooth offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="burger">
          <Burger clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.nav`
  background-color: transparent;
  position: fixed;
  border-bottom: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  :hover {
    background-color: white;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nav-item {
    text-decoration: none;
    list-style: none;
    color: black;
    font-size: 1rem;
    cursor: pointer;
  }

  .nav-item .active {
    color: yellow;
    background-color: black;
  }

  .me {
    font-size: 1.5rem;
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
