import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import heroImg from '../assets/img/home-img.svg';

const Home = () => {
  const { social } = useSelector((state) => state.contact);

  return (
    <HomeContainer id="home">
      <section className="bg">
        <div className="image">
          <img src={heroImg} alt="hero-williams" />
        </div>
        <div className="blur">
          <div className="content">
            <h1>I&apos;m Williams Colmenares</h1>
            <p>A Full-Stack Web Developer Based on Venezuela</p>
            <ul>
              {social.map((s) => (
                <li key={s.id}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    <i className={s.icon} />
                    {' '}
                  </a>
                </li>
              ))}
            </ul>
            <button type="button">
              <Link
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
            </button>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  min-height: 100vh;

  .bg {
    width: 100%;
    height: 100vh;
    background-color: var(--third-bg);
    position: relative;
    overflow: hidden;

    .image {
      height: 100%;
      position: relative;

      img {
        position: absolute;
        left: -115%;
        top: 5%;
        object-fit: cover;
        height: 115%;
      }
    }

    .blur {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      background-color: rgba(255, 255, 255, 0.5);
      align-items: center;
      top: 0;

      .content {
        padding: 0 1rem;
        width: 100%;

        h1 {
          font-size: 3rem;
        }

        p {
          color: var(--title);
          font-size: 1.3rem;
          margin: 0 0 1rem;
        }

        ul {
          display: flex;
          padding: 0;
          gap: 1rem;

          li {
            list-style: none;
            transition: transform 0.5s;

            a {
              color: var(--text);
              font-size: 1.5rem;
              transition: transform 2s;
            }

            a:hover {
              color: var(--title);
              transform: scale(2);
            }

            a:active {
              color: var(--green);
            }
          }

          li:hover {
            transform: scale(1.5);
          }
        }
      }
    }
  }

  @media only screen and (min-width: 641px) {
    .bg {
      .image {
        img {
          left: -5%;
          top: 20%;
          height: 95%;
        }
      }

      .blur {
        padding: 0 3rem;

        .content {
          position: relative;
          top: 7%;
        }
      }
    }
  }

  @media only screen and (min-width: 1008px) {
    .bg {
      .image {
        img {
          left: 32%;
          top: -2%;
          height: 115%;
        }
      }

      .blur {
        padding: 0 3rem;
        background-color: transparent;
      }
    }
  }
`;

export default Home;
