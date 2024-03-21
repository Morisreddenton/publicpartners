import React from "react";
import { FaGithub, FaSlack, FaSquare } from "react-icons/fa";
import styled from "styled-components";

const Partners = () => {
  return (
    <PartnersContainerWrapper className="flex-box-col">
      <HeaderWrapper>
        <h1>
          <span>Over 100+</span> The Glowing Company Trust Us
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          accusantium, obcaecati ipsam porro vel ut!
        </p>
      </HeaderWrapper>
      <PartnersListWrapper>
        <PartnerCardWrapper>
          <FaSlack className="ico" />
        </PartnerCardWrapper>
        <PartnerCardWrapper>
          <FaGithub className="ico" />
        </PartnerCardWrapper>
        <PartnerCardWrapper>
          <FaSquare className="ico" />
        </PartnerCardWrapper>
      </PartnersListWrapper>
    </PartnersContainerWrapper>
  );
};

const PartnersContainerWrapper = styled.section`
  width: 100%;
  min-height: 80vh;
  background: var(--text-color);
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    padding: 10px 1rem;
  }
`;

const HeaderWrapper = styled.article`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  h1 {
    color: var(--hero-color);
  }
  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

const PartnersListWrapper = styled.article`
  width: 90%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PartnerCardWrapper = styled.div`
  width: 30%;
  height: 40%;
  background: var(-text-color);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .ico {
    font-size: 5rem;
    color: var(--para-color);
  }
  @media screen and (max-width: 768px) {
    width: 40%;
  }
  @media screen and (max-width: 430px) {
    width: 90%;
  }
`;

export default Partners;
