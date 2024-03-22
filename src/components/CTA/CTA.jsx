import React from "react";
import styled from "styled-components";
import ctaImg from "../../Assets/Images/cta.jpeg";
import { useNavigate } from "react-router-dom";
const CTA = () => {
  const navigate = useNavigate()
  return (
    <CtaContainerWrapper className="flex-box">
      <LeftContainer>
        <img src={ctaImg} alt="cta-banner" />
      </LeftContainer>
      <RightContainer>
        <div className="cta-info">
          <h1>
            Join <span>5000+</span> People Who Are <br /> Already Connected.
          </h1>
          <div className="text">
            <p>
            Join our community of over 5000+ individuals who have already connected, benefiting from valuable connections, networking opportunities, and shared knowledge for personal and professional growth.
            </p>
          </div>
          <div className="btn" onClick={() => {navigate(`/community`)}}>
            <span>Join Us Now</span>
          </div>
        </div>
      </RightContainer>
    </CtaContainerWrapper>
  );
};

const CtaContainerWrapper = styled.section`
  width: 100%;
  min-height: 80vh;
  background: var(--text-color);
  padding: 10px 1.2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 10px 1rem;
  }
`;

const LeftContainer = styled.article`
  width: 50%;
  height: 80%;
  border-radius: 3pc;
  box-shadow: var(--box-shadow);
  h1 {
    line-height: 1.6;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 430px) {
    border-radius: 1pc;
    width: 100%;
  }
`;

const RightContainer = styled.article`
  background: rgb(255, 255, 255, 30%);
  box-shadow: var(--box-shadow);
  border-radius: 1pc;
  height: 80%;
  width: 50%;
  padding: 12px;
  .text {
    margin: 8px 0;
    p {
      font-size: 17px;
      width: 90%;
    }
  }
  .btn {
    width: 30%;
    border-radius: 3pc;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 430px) {
    .btn {
      width: 60%;
    }
  }
`;

export default CTA;
