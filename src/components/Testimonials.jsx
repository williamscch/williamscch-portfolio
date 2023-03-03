import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = () => {
  const { testimonials } = useSelector((state) => state);

  return (
    <TestimonialsContainer>
      <div className="title">
        <h2>testimonials</h2>
        <hr />
      </div>

      <Carousel dynamicHeight showArrows={false} showStatus={false}>
        {testimonials.map((t) => (
          <article
            key={t.id}
            className="content"
          >
            <p>{t.message}</p>
            <h3>
              ~
              {t.author}
            </h3>
            <span>{t.role}</span>
          </article>
        ))}
      </Carousel>
    </TestimonialsContainer>
  );
};

const TestimonialsContainer = styled.section`
  background-color: var(--secondary-bg);
  padding: 2.5rem 0;

  .title {
    padding: 0 1rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: var(--white);
      font-size: var(--fs-title);
      margin: 0 0 1.25rem;
    }

    hr {
      width: 4rem;
      margin: 0;
      height: 3px;
      align-self: center;
    }
  }

  .content {
    padding: 0 1rem;
    text-align: center;
    font-style: italic;

    p {
      margin-top: 0;
      color: var(--white);
    }

    h3 {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export default Testimonials;
