import React from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';

const Contact = () => (
  // const { contact } = useSelector((state) => state);

  <ContactContainer id="contact">
    <div className="title">
      <h2>Contact Form</h2>
      <p>
        I&apos;m always interested in hearing about new projects, so if
        you&apos;d like to chat please get in touch.
      </p>
    </div>
    <form action="https://formspree.io/f/xlezzzro" method="POST" id="form">
      <div className="name">
        <input
          id="first-name"
          type="text"
          name="first-name"
          required="required"
          maxLength="30"
          placeholder="Firts name"
        />

        <input
          id="last-name"
          type="text"
          name="last-name"
          required="required"
          maxLength="30"
          placeholder="Last name"
        />
      </div>

      <input id="email" type="email" name="email" placeholder="Email address" />

      <textarea
        id="text-area"
        name="message"
        maxLength="500"
        placeholder="Type your message here"
        required
      />

      <div className="button-errormessage">
        <button type="submit">Send Message</button>

        <small id="error-message" />
      </div>
    </form>
  </ContactContainer>
);
const ContactContainer = styled.section`
  padding: 2.5rem 1.7rem;
  max-height: 100vh;
  display: flex;
  flex-direction: column;

  .title {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
    text-align: center;

    h2 {
      font-size: var(--fs-title);
    }

    h4 {
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 100%;

    .name {
      display: flex;
      width: 100%;
      input {
        width: 50%;
      }
    }

    input {
      height: 3rem;
      border: none;
      border-bottom: 1px solid var(--input);
      padding: 15px 16px;
      font-family: "Arbutus Slab", serif;
      font-size: var(--subtitles-desktop);
    }

    input:hover {
      border-color: var(--green);
    }

    input:focus {
      border-color: var(--title);
      outline: none;
    }
    input::placeholder {
      color: var(--text);
    }

    textarea {
      height: 20rem;
      border: none;
      border-bottom: 1px solid var(--input);
      padding: 12px;
      font-family: "Arbutus Slab", serif;
      font-size: var(--subtitles-desktop);
    }
    textarea:hover {
      border-color: var(--green);
    }
    textarea:focus {
      border-color: var(--title);
      outline: none;
    }

    textarea::placeholder {
      color: var(--text);
    }

    button {
      width: 10.7rem;
    }
  }

  /* @media only screen and (min-width: 641px) {
  } */

  @media only screen and (min-width: 1008px) {
    padding: 7rem 7rem;
    min-height: 120vh;

    form {
      textarea {
        height: 15rem;
      }
    }
  }
`;

export default Contact;
