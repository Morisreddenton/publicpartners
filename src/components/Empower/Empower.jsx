import React from "react";
import styled from "styled-components";
import supImg from "../../Assets/Images/support.gif";
import secImg from "../../Assets/Images/security.gif";
import lookImg from "../../Assets/Images/lookup.gif";
const Empower = () => {
  return (
    <EmpowerContainerWrapper className="flex-box-col">
      <HeaderWrapper className="flex-box-col">
        <h1>
          Empower Your Business With Our <span>Cutting-Edge Features.</span>
        </h1>
        <p>
           Gain a competitive edge and improve your business operations with our cutting-edge and empowering features
        </p>
      </HeaderWrapper>
      <EmpowerAreaWrapper>
        <EmpowerCardWrapper>
          <div className="img-box">
            <img src={supImg} alt="maintenance-and-security" />
          </div>
          <div className="meta-info">
            <h3>Expert Advices And Support</h3>
            <p>Expert advices, guidance, and support from our team of professionals will help you and your business to achieve financial success
            </p>
          </div>
        </EmpowerCardWrapper>
        <EmpowerCardWrapper>
          <div className="img-box">
            <img src={lookImg} alt="maintenance-and-security" />
          </div>
          <div className="meta-info">
            <h3>Audience Reach LookUp</h3>
            <p>
            We assist businesses by providing audience lookup services to help them understand and target their desired customer base effectively.
            </p>
          </div>
        </EmpowerCardWrapper>
        <EmpowerCardWrapper>
          <div className="img-box">
            <img src={secImg} alt="maintenance-and-security" />
          </div>
          <div className="meta-info">
            <h3>Maintenance And Security</h3>
            <p>
            Ensure the smooth functioning and security of your business with our comprehensive day-to-day system maintenance and security services.
            </p>
          </div>
          <div></div>
        </EmpowerCardWrapper>
      </EmpowerAreaWrapper>
    </EmpowerContainerWrapper>
  );
};

const EmpowerContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--white-smoke);
  padding: 30px 1.2rem;
  @media screen and (max-width: 768px) {
    padding: 10px 1rem;
  }
`;

const HeaderWrapper = styled.div`
  width: 50%;
  text-align: center;
  h1 {
    width: 80%;
  }
  p {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 98%;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    h1,
    p {
      width: 98%;
    }
  }
`;

const EmpowerAreaWrapper = styled.article`
  width: 98%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    height: max-content;
    width: 100%;
  }
`;

const EmpowerCardWrapper = styled.div`
  width: 100%;
  height: 75%;
  background: var(--text-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  .img-box {
    width: 120px;
    height: 120px;
    background: var(--white-smoke);
    border-radius: 0.5rem;
    box-shadow: 0 10px 20x var(--main-color-variant);
    margin-bottom: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  .meta-info {
    p {
      font-size: 17px;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`;

export default Empower;
