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
  min-height: 100vh;
  padding: 100px 6rem;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 3rem;
  }
  .cards {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2.5rem;

    article {
      display: grid;
      grid-template-columns: 15% 85%;
      grid-gap: 1rem;

      span {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        justify-self: center;

        i {
        font-size: var(--titles-desktop);
        color: var(--white);
      }
      }
    }
  }
`;

export default Services;