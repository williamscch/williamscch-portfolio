import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <ContactContainer id="contact">
    <div className="title">
      <h2>Contact Me</h2>
    </div>
  </ContactContainer>
);

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
