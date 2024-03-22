import React from "react";
import styled from "styled-components";
import ppaImg from "../../Assets/Images/download.jpeg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainerWrapper className="flex-box">
      <LeftContainerWrapper className="flex-box-col">
        <h1>
          Unlocking a World Of Opportunity for <span>Your Business.</span>
        </h1>
        <div className="cap">
          <p>
          PPA With it unmatched expertise and innovative offerings, empower businesses to reach new heights of success in the digital age.Are you ready to embark on a transformation journey that will revolutionize the way you do business? 
          </p>
        </div>
        <div className="btn" onClick={() => {navigate(`/auth`)}}>
          <span>Apply Now</span>
        </div>
        <div className="flex-box-col com">
          <h4>Vast Community</h4>
        </div>
      </LeftContainerWrapper>
      <RightContainerWrapper className="flex-box">
        <div className="banner flex-box">
          <div className="cir">
            <img src={ppaImg} alt="about-us" />
          </div>
        </div>
        <div className="content">
          <div className="con-box">
            <h3>QUICK APPROVAL PROCESS</h3>
            <div className="txt">
              <p>
              Our quick approval process ensures that you can start benefiting from various opportunities and services in no time, without unnecessary delays.
              </p>
            </div>
          </div>
          <div className="con-box">
            <h3>Flexible Earnings</h3>
            <div className="txt">
              <p>
              With flexible earning options, you can customize your income to fit your lifestyle and career goals, providing flexibility and financial freedom.
              </p>
            </div>
          </div>
        </div>
      </RightContainerWrapper>
    </HeroContainerWrapper>
  );
};

const HeroContainerWrapper = styled.header`
  width: 100%;
  height: 89vh;
  background: var(--hero-color);
  padding: 10px 1.2rem;
  @media screen and (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
  @media screen and (max-width: 430px) {
    height: 100vh;
    flex-direction: column;
    overflow: hidden;
    padding: 10px;
  }
`;

const LeftContainerWrapper = styled.article`
  width: 40%;
  height: 100%;
  align-items: flex-start;
  h1 {
    color: var(--text-color);
  }
  .cap {
    p {
      color: var(--text-color);
    }
  }
  .btn {
    width: 30%;
    font-size: 16.5px;
    border-radius: 0.5rem;
  }

  .com {
    width: 42%;
    height: 90px;
    border: 1.5px solid var(--sky-blue);
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    h4 {
      color: var(--sky-blue);
    }
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    position: absolute;
    left: 0.5rem;
    top: -8rem;
    h1 {
      width: 90%;
    }
    .cap {
      p {
        width: 90%;
      }
    }
    .com {
      height: 120px;
      transform: translateY(15rem);
    }
  }
  @media screen and (max-width: 430px) {
    top: -10rem;
    width: 100%;
    position: relative;
    h1,
    p {
      width: 95%;
    }
    .com {
      display: none;
    }
  }
`;

const RightContainerWrapper = styled.article`
  width: 60%;
  height: 100%;

  .banner {
    width: 45%;
    height: 100%;

    .cir {
      background: linear-gradient(
        var(--main-color-variant),
        var(--box-color),
        transparent
      );
      height: 80%;
      width: 90%;
      border-radius: 10pc 10pc 0 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 85%;
        border-radius: inherit;
      }
    }
  }

  .content {
    width: 55%;
    height: 80%;
    .con-box {
      width: 98%;
      height: 160px;
      background: rgb(0, 0, 0, 50%);
      border-radius: 5px;
      color: var(--text-color);
      margin-top: 15px;
      padding: 12px;
      transform: translateY(2.2rem);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      h3 {
        font-size: 17px;
        color: var(--main-color);
      }
      .txt {
        p {
          font-size: 16.5px;
          padding-top: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    left: 10rem;

    .banner {
      transform: translateX(4.5rem);
      .cir {
        height: 350px;
        width: 250px;
      }
    }
    .con-box {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 430px) {
    left: 0;
    position: none;
    overflow: hidden;
    .content {
      width: 98%;
      display: none;
    }
    .banner {
      width: 100%;
      top: 5rem;
      transform: translateY(15rem);
      display: flex;
    }
  }
`;

export default Hero;
