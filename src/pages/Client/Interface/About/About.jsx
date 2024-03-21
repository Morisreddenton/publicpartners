import React from "react";
import { Footer, NavBar } from "../../../../components";
import styled from "styled-components";
import { MdAnalytics, MdCode } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";

const About = () => {
  return (
    <>
      <NavBar />
      <AboutUsContainerWrapper>
        <AboutHeaderWrapper>
          <LeftContainer>
            <div className="top">
              <span> || About PPA</span>
              <h1>Digital Product For Your Idea</h1>
              <div className="txt">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  voluptatibus unde tempore beatae consequuntur facilis, non
                  eligendi, perspiciatis eius repellendus sunt earum!
                </p>
              </div>
              <div className="btn">
                <span>Read More</span>
              </div>
            </div>
          </LeftContainer>
          <RightContainer></RightContainer>
        </AboutHeaderWrapper>

        <OurServiceContainerWrapper className="flex-box-col">
          <HeaderWrapper>
            <span>|| Services</span>
            <h1>Provide Awesome Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              praesentium doloremque, ut dolores quam doloribus.
            </p>
          </HeaderWrapper>

          <ServicesListWrapper>
            <ServiceCardWrapper>
              <div className="top">
                <div className="ico">
                  <FaBullhorn />
                </div>
                <div className="meta-info">
                  <h2>Marketing Strategy & SEO Campaign</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis quibusdam velit a adipisci similique deleniti,
                    sint molestiae nostrum dolores. Fuga ea temporibus autem
                    commodi illo?
                  </p>
                </div>
              </div>
            </ServiceCardWrapper>
            <ServiceCardWrapper>
              <div className="top">
                <div className="ico">
                  <MdCode />
                </div>
                <div className="meta-info">
                  <h2>Product UX, Design & Development</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis quibusdam velit a adipisci similique deleniti,
                    sint molestiae nostrum dolores. Fuga ea temporibus autem
                    commodi illo?
                  </p>
                </div>
              </div>
            </ServiceCardWrapper>
            <ServiceCardWrapper>
              <div className="top">
                <div className="ico">
                  <MdAnalytics />
                </div>
                <div className="meta-info">
                  <h2>Assets Trading Strategy</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis quibusdam velit a adipisci similique deleniti,
                    sint molestiae nostrum dolores. Fuga ea temporibus autem
                    commodi illo?
                  </p>
                </div>
              </div>
            </ServiceCardWrapper>
          </ServicesListWrapper>
        </OurServiceContainerWrapper>

        <WhyChooseContainerWrapper className="flex-box">
          <LeftContentWrapper className="flex-box-col">
            <span>|| Why Choose Us</span>
            <div className="why">
              <h1>Boost Your Lifetime CashFlow</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                temporibus eius non dolor neque assumenda sint dolorem maiores,
                perferendis quis deleniti ab dolorum ipsam quidem a officia,
                asperiores hic. Maiores!
              </p>
            </div>
          </LeftContentWrapper>
          <RightContentWrapper className="flex-box-col">
            <div className="stat-box">
              <div className="left">
                <h1>5000+</h1>
                <h3>Clients</h3>
              </div>
              <div className="right">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  sunt accusantium quam excepturi iusto dignissimos odio
                  aspernatur exercitationem velit officia.
                </p>
              </div>
            </div>
            <div className="stat-box">
              <div className="left">
                <h1>100+</h1>
                <h3>Employees</h3>
              </div>
              <div className="right">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  sunt accusantium quam excepturi iusto dignissimos odio
                  aspernatur exercitationem velit officia.
                </p>
              </div>
            </div>
            <div className="stat-box">
              <div className="left">
                <h1>50+</h1>
                <h3>Projects</h3>
              </div>
              <div className="right">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  sunt accusantium quam excepturi iusto dignissimos odio
                  aspernatur exercitationem velit officia.
                </p>
              </div>
            </div>
          </RightContentWrapper>
        </WhyChooseContainerWrapper>
      </AboutUsContainerWrapper>
      <Footer />
    </>
  );
};

const AboutUsContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--white-smoke);

  h1 {
    color: var(--hero-color);
  }

  span {
    font-size: 17px;
    font-weight: 600;
    color: var(--main-color);
  }
`;

const AboutHeaderWrapper = styled.header`
  background: var(--text-color);
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    height: 80vh;
  }
`;

const LeftContainer = styled.article`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  .txt {
    padding: 12px 0;
    p {
      width: 80%;
    }
  }

  .btn {
    width: 30%;
    border-radius: 0.5rem;
    span {
      color: var(--text-color);
    }
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .txt {
      p {
        width: 100%;
      }
    }
  }
`;

const RightContainer = styled.article`
  width: 50%;
  @media screen and (max-width: 430px) {
    display: none;
  }
`;

const OurServiceContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--white-smoke);
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    height: max-content;
  }
`;

const HeaderWrapper = styled.div`
  width: 50%;
  text-align: center;

  p {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 430px) {
    width: 98%;
    P {
      width: 98%;
    }
  }
`;

const ServicesListWrapper = styled.article`
  width: 98%;
  height: 70%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;

const ServiceCardWrapper = styled.div`
  width: 100%;
  height: 75%;
  background: var(--text-color);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  padding: 12px;
  .top {
    .ico {
      width: 80px;
      height: 80px;
      border-radius: 50px;
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--text-color);
      background-color: var(--hero-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .meta-info {
    margin-top: 10px;

    h2 {
      padding: 10px 0;
    }
  }
  @media screen and (max-width: 430px) {
    height: max-content;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .top {
      width: 100%;
      .ico {
        margin: 0 auto;
      }
    }
  }
`;

const WhyChooseContainerWrapper = styled.section`
  width: 100%;
  height: 90vh;
  background: var(--text-color);
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    height: max-content;
    flex-direction: column;
  }
`;

const LeftContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  align-items: flex-start;
  padding: 10px;

  .why {
    h1 {
      color: var(--hero-color);
    }
    p {
      color: var(--para-color);
      width: 88%;
      font-size: 19px;
    }
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    .why {
      p {
        width: 100%;
      }
    }
  }
`;
const RightContentWrapper = styled(LeftContainer)`
  height: 100%;
  .stat-box {
    width: 100%;
    border: 1.5px solid var(--hero-color);
    border-radius: 0.5rem;
    padding: 8px;
    height: max-content;
    h1 {
      color: var(--main-color);
    }
    p {
      color: var(--para-color);
    }
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
    .stat-box {
      height: max-content;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      height: max-content;
      overflow: hidden;
    }
  }
`;

export default About;
