import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { contact } = useSelector((state) => state);

  return (
    <ContactContainer id="contact">
      <div className="title">
        <h2>
          Contact Me
          {' '}
          {contact.email}
        </h2>
      </div>
      <footer />
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  .title {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

export default Contact;
