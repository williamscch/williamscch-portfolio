import React from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';

const Contact = () => (
  // const { contact } = useSelector((state) => state);

  <ContactContainer id="contact">
    <div className="title">
      <h2>Contact Me</h2>
      <h4>
        I&apos;m always interested in hearing about new projects, so if
        you&apos;d like to chat please get in touch.
      </h4>
    </div>
    <form action="https://formspree.io/f/xlezzzro" method="POST" id="form">
      <input
        id="name"
        type="text"
        name="full-name"
        required="required"
        maxLength="30"
        placeholder="Full Name"
      />

      <input id="email" type="email" name="email" placeholder="Email address" />

      <textarea
        id="text-area"
        name="message"
        maxLength="500"
        placeholder="Enter text here"
        required
      />

      <div className="button-errormessage">
        <button type="submit">Get in touch</button>

        <small id="error-message" />
      </div>
    </form>
  </ContactContainer>
);
const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 100px 0;

  display: flex;
  flex-direction: column;
  padding: 0 24px;

  .title {
    width: 100%;
    display: grid;
    place-items: center;
  }
  form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 44px;
}

form input {
  height: 48px;
  border-radius: 4px;
  border: 1px solid var(--light-gray);
  padding: 15px 16px;
  transition: transform 1s;
}

form input:hover {
  transform: translate(15px, 15px);
}

form textarea {
  height: 90px;
  border-radius: 4px;
  border: 1px solid var(--green);
  padding: 12px;
  transition: transform 1s;
}

form textarea:hover {
  transform: translate(15px, 15px);
}

form textarea::placeholder {
  color: #091e42;
  font-family: 'Inter', sans-serif;
}

form button {
  width: 129px;
  align-self: center;
}

`;

export default Contact;
