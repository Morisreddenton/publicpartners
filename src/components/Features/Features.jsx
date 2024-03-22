import React from "react";
import styled from "styled-components";
import scnImg from "../../Assets/Images/scn.jpeg";
import { FaShoppingBag } from "react-icons/fa";
const Features = () => {
  return (
    <FeaturesContainerWrapper className="flex-box-col">
      <HeaderWrapper className="flex-box-col">
        <h1>
          Your Financial Freedom With <span>PPA.</span>
        </h1>
        <p>
        Unleash financial freedom today with PPA and take control of your financial future
        </p>
      </HeaderWrapper>
      <FeaturesAreaWrapper>
        <FeaturesBarWrapper className="flex-box">
          <div className="bar-con">
            <span>SheCommerce Network</span>
          </div>
          <div className="bar-con">
            <span>Public Assets Investment</span>
          </div>
          <div className="bar-con">
            <span>Adworker Online</span>
          </div>
        </FeaturesBarWrapper>
        <FeaturesDisplayWrapper className="flex-box">
          <div className="text-box card">
            <div className="top">
              <h1>SheCommerce Network.</h1>
              <p style={{lineHeight: "1.4"}}>
              A game-changer in the e-commerce landscape. This cutting-edge platform harnesses the power of advanced technologies to connect businesses with their target audience like never before. Seamlessly integrating social media, influencer marketing, and personalized customer experiences, the SheCommerce Network guarantees increased visibility, engagement, and ultimately, skyrocketing sales.
              </p>
            </div>
            <div className="mid">
              <h3>Benefits:</h3>
              <div className="b-y flex-box">
                <div className="ico">
                  <FaShoppingBag />
                </div>
                <p>Sales Income :- Enjoy 60% of your sales income profits</p>
              </div>
              <div className="b-y flex-box">
                <div className="ico">
                  <FaShoppingBag />
                </div>
                <p>Sales Income :- Enjoy 60% of your sales income profits</p>
              </div>
            </div>
            <div className="last btn">
              <span>Apply Now</span>
            </div>
          </div>
          <div className="ban-box card">
            <img src={scnImg} alt="scn" />
          </div>
        </FeaturesDisplayWrapper>
      </FeaturesAreaWrapper>
    </FeaturesContainerWrapper>
  );
};

const FeaturesContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--white-smoke);
  padding: 30px 1.2rem;
  @media screen and (max-width: 768px) {
    padding: 10px 1rem;
  }
`;

const HeaderWrapper = styled.header`
  width: 70%;
  gap: 5px;
  p {
    width: 60%;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 98%;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    p {
      width: 98%;
    }
  }
`;

const FeaturesAreaWrapper = styled.article`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    overflow-y: hidden;
  }
  @media screen and (max-width: 430px) {
    height: max-content;
  }
`;

const FeaturesBarWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 8px;
  .bar-con {
    width: 35%;
    height: 60px;
    background: var(--text-color);
    border: 1.5px solid var(--main-color);
    box-shadow: var(--box-shadow);
    border-radius: 10px;
    color: var(--hero-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    width: 98%;
    .bar-con {
      width: 40%;
    }
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    flex-direction: column;
    overflow-x: scroll;
    .bar-con {
      width: 100%;
    }
  }
`;

const FeaturesDisplayWrapper = styled.div`
  width: 98%;
  height: 80%;

  margin: 15px auto;

  .card {
    width: 48%;
    height: 82%;
    background: var(--text-color);
    border-radius: 2rem;
    box-shadow: 0 0.5rem 1rem var(--main-color-variant);
  }

  .text-box {
    padding: 10px;
    h1 {
      color: var(--hero-color);
      font-size: 2rem;
      font-weight: 600;
    }
    p {
      width: 95%;
    }
    .mid {
      padding: 8px 0;
      .b-y {
        padding-top: 10px;
        margin: 8px 0;
        .ico {
          width: 30px;
          height: 30px;
          border-radius: 50px;
          box-shadow: var(--box-shadow);
          background: var(--main-color);
          color: var(--text-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        p {
          font-size: 16px;
        }
      }
    }
    .last {
      width: 30%;
      border-radius: 0.5rem;
    }
  }
  .ban-box {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 10px;
    .card {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 0;
    }
    .text-box {
      padding: 12px;
    }
  }
  @media screen and (max-width: 430px) {
    height: max-content;
    .card {
      width: 100%;
      border-radius: 1pc;
      .last {
        width: 60%;
      }
    }
  }
`;

export default Features;
