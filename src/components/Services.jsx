import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Services = () => {
  const { services } = useSelector((state) => state);

  return (
    <ServicesContainer id="services">
      <div className="title">
        <h2>My Services</h2>
      </div>
      <div className="cards">
        {services.map((s) => (
          <article key={s.id}>
            <span>
              {' '}
              <i className={s.icon} />
            </span>
            <div className="text">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </article>
        ))}
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  padding: 2.5rem 1rem;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 4rem;

    h2 {
      font-size: var(--fs-title);
    }
  }
  .cards {
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: minmax(10rem, auto);
    grid-gap: 2.5rem;
    place-content: center;

    article {
      display: grid;
      grid-template-columns: 20% 80%;
      grid-gap: 1rem;
      padding: 1.8rem;
      box-shadow: 0 1px 2px 0px rgb(0 0 0 / 20%);
      place-items: start;
      transition: 0.3s all ease-in-out;
      cursor: pointer;

      span {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--green);
        display: grid;
        place-items: center;
        justify-self: center;
        align-self: flex-start;

        i {
          font-size: var(--titles-desktop);
          color: var(--white);
        }
      }
    }

    article:hover {
      box-shadow: 0 8px 50px -5px rgba(0, 0, 0, 0.1);
      transform: translate(0, -0.5rem);
    }
  }

  @media only screen and (min-width: 641px) {
    padding: 6rem 0;

    .title {
      margin-bottom: 6rem;
    }

    .cards {
      grid-template-columns: 47% 47%;
      grid-gap: 1.5rem;
      padding: 0 1rem;
    }
  }

  @media only screen and (min-width: 1008px) {
    padding: 7rem 0;
    margin: 0 6rem;
    min-height: 100vh;

    .cards {
      grid-gap: 2.5rem;
    }
  }
`;

export default Services;
