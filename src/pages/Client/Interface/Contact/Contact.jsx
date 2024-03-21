import React from "react";
import { Footer, NavBar } from "../../../../components";
import styled from "styled-components";
import bgImg from "../../../../Assets/Images/bg.jpeg";
import bbbImg from "../../../../Assets/Images/bbb.png";
const Contact = () => {
  return (
    <>
      <NavBar />
      <ContactPageContainerWrapper>
        <ContactHeader className="flex-box-col">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            placeat quia expedita aliquam, est nobis?
          </p>
        </ContactHeader>
        <MessageContainerWrapper>
          <ContactContainerWrapper className="flex-box">
            <LeftContainerWrapper className="flex-box-col">
              <div className="top flex-box-col">
                <h1>Message Us</h1>
                <div className="note">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo earum pariatur dolore, vero molestias nisi, fugiat
                    beatae saepe fugit magnam accusantium aperiam quia, porro
                    velit? Illum reiciendis ullam rerum enim.
                  </p>
                </div>
                <div className="bbb">
                  <img src={bbbImg} alt="bbb-logo" />
                </div>
              </div>
            </LeftContainerWrapper>
            <RightContainerWrapper>
              <form>
                <div className="first flex-box">
                  <div className="input-box">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="input-box last">
                  <input
                    name="message"
                    id="message"
                    placeholder="Your message goes here"
                  />
                </div>
                <div className="input-box">
                  <button type="button">Submit Form</button>
                </div>
              </form>
            </RightContainerWrapper>
          </ContactContainerWrapper>
        </MessageContainerWrapper>
      </ContactPageContainerWrapper>
      <Footer />
    </>
  );
};

const ContactPageContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--white-smoke);
`;

const ContactHeader = styled.header`
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(
      168deg,
      var(--hero-color),
      var(--main-color-variant)
    ),
    url(${bgImg});
  background-size: contain;
  background-position: center;

  h1 {
    color: var(--text-color);
    font-size: 2.5rem;
  }
  p {
    color: var(--text-color);
    width: 40%;
    margin: 0 auto;
    text-align: center;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    p {
      width: 80%;
    }
  }
`;

const MessageContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: var(--text-color);
`;

const ContactContainerWrapper = styled.article`
  width: 100%;
  height: 100vh;
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    height: max-content;
  }
`;

const LeftContainerWrapper = styled.div`
  width: 50%;
  height: 90%;
  padding: 10px;
  .top {
    align-items: flex-start;
    h1 {
      color: var(--hero-color);
    }
    .note {
      padding: 12px 0;
      p {
        width: 80%;
      }
    }
    .bbb {
      width: 150px;
      height: 35%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    .note {
      width: 100%;
      p {
        width: 100%;
      }
    }
  }
`;

const RightContainerWrapper = styled(LeftContainerWrapper)`
  form {
    width: 85%;
    height: 90%;
    padding: 10px;
    .first {
      align-items: flex-start;
    }

    .input-box {
      width: 100%;
      height: 60px;
      box-shadow: 0 10px 15px rgb(0, 0, 0, 5%);
      background: var(--text-color);
      border-radius: 0.2rem;
      margin: 12px 0;
      input,
      button {
        width: 100%;
        height: 100%;
        background: transparent;
        border-radius: inherit;
        color: var(--hero-color);
        padding: 0 12px;
        font-size: 17px;
        font-family: "Roboto Condensed", sans-serif;
        ::placeholder {
          color: var(--hero-color);
        }
      }
      button {
        background: var(--main-color);
        color: var(--text-color);
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
      }
    }
    .last {
      height: 28vh;
      input {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 430px) {
    overflow: hidden;
    height: 100%;
    width: 100%;
    form {
      width: 100%;
      .first {
        flex-direction: column;
      }
    }
  }
`;

export default Contact;
