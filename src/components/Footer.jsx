import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { social } = useSelector((state) => state.contact);
  const { email } = useSelector((state) => state.contact);

  return (
    <FooterContainer>
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
              My Curriculum
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
              Testimonilas
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
        <h3>Emails</h3>
        <ul>
          {email.map((mail) => (
            <li key={mail}>
              <a href={`mailto:${mail}`}>{mail}</a>
            </li>
          ))}
        </ul>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: var(--secondary-bg);
  min-height: 35vh;
  color: var(--white);
  display: flex;
  list-style: none;
`;

export default Footer;
