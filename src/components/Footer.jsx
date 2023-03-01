import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { social } = useSelector((state) => state.contact);
  const { email } = useSelector((state) => state.contact);

  return (
    <FooterContainer>
      <div className="footer-columns">
        <div>
          <h3>My Address</h3>
          <p>
            Bolivar Main Street
            {' '}
            <br />
            San Cristobal, Tachira, Venezuela
          </p>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://docs.google.com/document/d/13xXTFPHTSBDO_Et2TzIzYGzJufeC6oMbC6esMc0K_8Y/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                My Curriculum Vitae
              </a>
            </li>
            <li>
              <a
                href="https://github.com/williamscch?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                My Repositories
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/williamscolmenaresch/details/recommendations/?detailScreenTabIndex=0"
                target="_blank"
                rel="noreferrer"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="https://www.microverse.org/?grsf=s3swmk"
                target="_blank"
                rel="noreferrer"
              >
                Join Microverse
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+584127711031"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social</h3>
          <ul>
            {social.map((s) => (
              <li key={s.id}>
                <a href={s.url}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>My Emails</h3>
          <ul>
            {email.map((mail) => (
              <li key={mail}>
                <a href={`mailto:${mail}`}>{mail}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h4 className="footer-text">
        {' '}
        Copyright ©2023 Williams Colmenares | All rights reserved.
      </h4>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  min-height: 35vh;
  background-color: var(--third-bg);
  color: var(--text);
  display: flex;
  flex-direction: column;

  .footer-columns {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  ul {
    padding: 0;
    li {
      list-style: none;

      a {
        color: var(--links);
        text-decoration: none;
      }

      a:hover {
        color: var(--title);
      }
    }
  }

  .footer-text {
    text-align: center;
    color: var(--text);
  }

  @media only screen and (min-width: 641px) {
    padding: 6rem 3rem;
    .footer-columns {
      grid-template-columns: 40% 30% 30%;
    }
  }

  @media only screen and (min-width: 1008px) {
    padding: 6rem 6rem;
    .footer-columns {
      grid-template-columns: 30% 20% 20% 30%;
    }
  }
`;

export default Footer;
