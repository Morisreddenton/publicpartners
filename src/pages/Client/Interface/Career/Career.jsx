import React from "react";
import styled from "styled-components";
import { Footer, NavBar } from "../../../../components";
import {
  FaBullhorn,
  FaGithub,
  FaLaptopCode,
  FaMapMarker,
  FaMoneyBillWave,
  FaSlack,
  FaSquare,
} from "react-icons/fa";
import lImg from "../../../../Assets/Images/support.gif";
import { MdDesignServices, MdSupportAgent } from "react-icons/md";
import logoImg from "../../../../Assets/Images/support.gif";

const Career = () => {
  return (
    <>
      <NavBar />
      <CareerContainerWrapper>
        <CareerHeaderWrapper className="flex-box">
          <LeftContent>
            <div className="first">
              <h1>
                Got Talent? <br /> Meet Opportunity
              </h1>
              <div className="pro">
                <span>Company Review | </span>
                <span>Salaries | </span>
                <span>Interview | </span>
                <span>Jobs</span>
              </div>

              <div className="mid">
                <p>Popular Jobs :</p>
                <div className="job-ls">
                  <span>Frontend Developer</span>
                  <span>Graphic Designer</span>
                  <span>Digital Marketer</span>
                </div>
              </div>
              <div className="btn">More Jobs Here</div>
            </div>

            <div className="trust">
              <p>Trusted by leading brands and startups</p>
              <div className="brand-ls">
                <div className="brand-box">
                  <FaSquare />
                </div>
                <div className="brand-box">
                  <FaSlack />
                </div>
                <div className="brand-box">
                  <FaGithub />
                </div>
              </div>
            </div>
          </LeftContent>
          <RightContent>
            <div className="img-wrapper">
              <img src={lImg} alt="l-img" />
            </div>
          </RightContent>
        </CareerHeaderWrapper>
        <CareerForContainerWrapper className="flex-box-col">
          <FeatureWrapper className="flex-box">
            <div className="for-box">
              <h2>For Employers</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                accusamus atque magni qui cum sint possimus enim beatae?
              </p>
              <div className="btn">
                <span>Post Jobs Here</span>
              </div>
            </div>
            <div className="for-box">
              <h2>For Students</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                accusamus atque magni qui cum sint possimus enim beatae?
              </p>
              <div className="btn">
                <span>Upload CV Find Job</span>
              </div>
            </div>
          </FeatureWrapper>
          <div className="head">
            <h2>Popular Category</h2>
          </div>
          <PopularCategoryWrapper>
            <PopularCardWrapper>
              <div className="ico-wrap">
                <FaLaptopCode />
              </div>
              <div className="abt-job">
                <h3>Development</h3>
                <div className="job-len">
                  <span>16 Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, est beatae! Vero odio nostrum at?
                  </p>
                </div>
              </div>
            </PopularCardWrapper>
            <PopularCardWrapper>
              <div className="ico-wrap">
                <FaBullhorn />
              </div>
              <div className="abt-job">
                <h3>Marketing & Sales</h3>
                <div className="job-len">
                  <span>16 Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, est beatae! Vero odio nostrum at?
                  </p>
                </div>
              </div>
            </PopularCardWrapper>
            <PopularCardWrapper>
              <div className="ico-wrap">
                <MdSupportAgent />
              </div>
              <div className="abt-job">
                <h3>Customer Service</h3>
                <div className="job-len">
                  <span>16 Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, est beatae! Vero odio nostrum at?
                  </p>
                </div>
              </div>
            </PopularCardWrapper>
            <PopularCardWrapper>
              <div className="ico-wrap">
                <MdDesignServices />
              </div>
              <div className="abt-job">
                <h3>Design & Creative</h3>
                <div className="job-len">
                  <span>16 Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, est beatae! Vero odio nostrum at?
                  </p>
                </div>
              </div>
            </PopularCardWrapper>
          </PopularCategoryWrapper>
        </CareerForContainerWrapper>
        <CareerJobListeningWrapper>
          <ListeningHeaderWrapper>
            <h2>Latest Jobs</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <JobListAreaWrapper>
              <JobCardWrapper>
                <AboutBrand>
                  <BrandAndJobWrapper>
                    <BrandLogoWrap>
                      <img src={logoImg} alt="brand-logo" />
                    </BrandLogoWrap>
                    <AboutJob>
                      <p>Development</p>
                      <h2>Junior Frontend Developer</h2>
                    </AboutJob>
                  </BrandAndJobWrapper>
                  <LocAndSalaryWrapper>
                    <LocWrapper>
                      <FaMapMarker />
                      <h4>Accra, Ghana</h4>
                    </LocWrapper>
                    <SalaryWrapper>
                      <FaMoneyBillWave />
                      <h4>$90 -$150</h4>
                    </SalaryWrapper>
                  </LocAndSalaryWrapper>
                  <div className="from">
                    <p>
                      By <span>PPA</span>
                    </p>
                    <div className="time">
                      <span>Full Time</span>
                    </div>
                  </div>
                </AboutBrand>
              </JobCardWrapper>
              <JobCardWrapper>
                <AboutBrand>
                  <BrandAndJobWrapper>
                    <BrandLogoWrap>
                      <img src={logoImg} alt="brand-logo" />
                    </BrandLogoWrap>
                    <AboutJob>
                      <p>Development</p>
                      <h2>Junior Frontend Developer</h2>
                    </AboutJob>
                  </BrandAndJobWrapper>
                  <LocAndSalaryWrapper>
                    <LocWrapper>
                      <FaMapMarker />
                      <h4>Accra, Ghana</h4>
                    </LocWrapper>
                    <SalaryWrapper>
                      <FaMoneyBillWave />
                      <h4>$90 -$150</h4>
                    </SalaryWrapper>
                  </LocAndSalaryWrapper>
                  <div className="from">
                    <p>
                      By <span>PPA</span>
                    </p>
                    <div className="time">
                      <span>Full Time</span>
                    </div>
                  </div>
                </AboutBrand>
              </JobCardWrapper>
              <JobCardWrapper>
                <AboutBrand>
                  <BrandAndJobWrapper>
                    <BrandLogoWrap>
                      <img src={logoImg} alt="brand-logo" />
                    </BrandLogoWrap>
                    <AboutJob>
                      <p>Development</p>
                      <h2>Junior Frontend Developer</h2>
                    </AboutJob>
                  </BrandAndJobWrapper>
                  <LocAndSalaryWrapper>
                    <LocWrapper>
                      <FaMapMarker />
                      <h4>Accra, Ghana</h4>
                    </LocWrapper>
                    <SalaryWrapper>
                      <FaMoneyBillWave />
                      <h4>$90 -$150</h4>
                    </SalaryWrapper>
                  </LocAndSalaryWrapper>
                  <div className="from">
                    <p>
                      By <span>PPA</span>
                    </p>
                    <div className="time">
                      <span>Full Time</span>
                    </div>
                  </div>
                </AboutBrand>
              </JobCardWrapper>
              <JobCardWrapper>
                <AboutBrand>
                  <BrandAndJobWrapper>
                    <BrandLogoWrap>
                      <img src={logoImg} alt="brand-logo" />
                    </BrandLogoWrap>
                    <AboutJob>
                      <p>Development</p>
                      <h2>Junior Frontend Developer</h2>
                    </AboutJob>
                  </BrandAndJobWrapper>
                  <LocAndSalaryWrapper>
                    <LocWrapper>
                      <FaMapMarker />
                      <h4>Accra, Ghana</h4>
                    </LocWrapper>
                    <SalaryWrapper>
                      <FaMoneyBillWave />
                      <h4>$90 -$150</h4>
                    </SalaryWrapper>
                  </LocAndSalaryWrapper>
                  <div className="from">
                    <p>
                      By <span>PPA</span>
                    </p>
                    <div className="time">
                      <span>Full Time</span>
                    </div>
                  </div>
                </AboutBrand>
              </JobCardWrapper>
              <JobCardWrapper>
                <AboutBrand>
                  <BrandAndJobWrapper>
                    <BrandLogoWrap>
                      <img src={logoImg} alt="brand-logo" />
                    </BrandLogoWrap>
                    <AboutJob>
                      <p>Development</p>
                      <h2>Junior Frontend Developer</h2>
                    </AboutJob>
                  </BrandAndJobWrapper>
                  <LocAndSalaryWrapper>
                    <LocWrapper>
                      <FaMapMarker />
                      <h4>Accra, Ghana</h4>
                    </LocWrapper>
                    <SalaryWrapper>
                      <FaMoneyBillWave />
                      <h4>$90 -$150</h4>
                    </SalaryWrapper>
                  </LocAndSalaryWrapper>
                  <div className="from">
                    <p>
                      By <span>PPA</span>
                    </p>
                    <div className="time">
                      <span>Full Time</span>
                    </div>
                  </div>
                </AboutBrand>
              </JobCardWrapper>
              <JobCardWrapper>
                <AboutBrand>
                  <BrandAndJobWrapper>
                    <BrandLogoWrap>
                      <img src={logoImg} alt="brand-logo" />
                    </BrandLogoWrap>
                    <AboutJob>
                      <p>Development</p>
                      <h2>Junior Frontend Developer</h2>
                    </AboutJob>
                  </BrandAndJobWrapper>
                  <LocAndSalaryWrapper>
                    <LocWrapper>
                      <FaMapMarker />
                      <h4>Accra, Ghana</h4>
                    </LocWrapper>
                    <SalaryWrapper>
                      <FaMoneyBillWave />
                      <h4>$90 -$150</h4>
                    </SalaryWrapper>
                  </LocAndSalaryWrapper>
                  <div className="from">
                    <p>
                      By <span>PPA</span>
                    </p>
                    <div className="time">
                      <span>Full Time</span>
                    </div>
                  </div>
                </AboutBrand>
              </JobCardWrapper>
            </JobListAreaWrapper>
          </ListeningHeaderWrapper>
        </CareerJobListeningWrapper>
      </CareerContainerWrapper>
      <Footer />
    </>
  );
};

const CareerContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--white-smoke);
`;

const CareerHeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.article`
  width: 50%;
  height: 80%;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  .first {
    h1 {
      color: var(--hero-color);
      font-size: 2.5rem;
    }
    .mid {
      padding: 10px 0;
      p {
        color: var(--hero-color);
      }

      .job-ls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        span {
          color: var(--para-color);
          font-size: 15px;
          padding-top: 5px;
        }
      }
    }
  }

  .pro {
    padding: 8px 0;
    span {
      padding: 0 3px;
      color: var(--para-color);
    }
  }

  .btn {
    background: var(--text-color);
    border-radius: 0.5rem;
    color: var(--sky-blue);
    width: 60%;
    margin: 10px 0;
  }

  .trust {
    p {
      color: var(--hero-color);
    }
    .brand-ls {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .brand-box {
        width: 40px;
        height: 40px;
        border-radius: 0.3rem;
        background: var(--sky-blue);
        box-shadow: var(--box-shadow);
        color: var(--hero-color);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        margin-top: 10px;
      }
    }
  }

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

const RightContent = styled(LeftContent)`
  align-items: center;
  justify-content: center;
  .img-wrapper {
    width: 50%;
    height: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
`;

const CareerForContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--text-color);
  padding: 30px 1.2rem;

  .head {
    width: 100%;
    padding: 10px 0;
    transform: translateY(2rem);
  }
  @media screen and (max-width: 430px) {
    height: 100%;
  }
`;

const FeatureWrapper = styled.article`
  width: 80%;
  height: 40%;
  gap: 2rem;
  .for-box {
    width: 50%;
    height: 90%;
    background: rgba(244, 240, 240, 0.943);
    box-shadow: 0 10px 20px rgb(0, 0, 0, 5%);
    border-radius: 1pc;
    padding: 5px 15px;
    p {
      width: 80%;
      font-size: 16px;
      padding: 5px 0;
    }
    .btn {
      width: 40%;
      border-radius: 50px;
      background: var(--sky-blue);
    }
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    .for-box {
      width: 100%;
      height: max-content;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      .btn {
        width: 60%;
      }
    }
  }
`;

const PopularCategoryWrapper = styled.div`
  width: 100%;
  height: 55%;
  margin-top: 2%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 10px;
  @media screen and (max-width: 430px) {
    height: max-content;
    grid-template-columns: 1fr;
  }
`;

const PopularCardWrapper = styled.div`
  width: 100%;
  height: 95%;
  background: var(--text-color);
  box-shadow: 0 0.5rem 1rem var(--main-color-variant);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 8px;
  overflow: hidden;

  .ico-wrap {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background: var(--sky-blue);
    box-shadow: var(--box-shadow);
    color: var(--text-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .abt-job {
    padding: 8px 0;
    h3 {
      text-transform: capitalize;
    }

    .job-len {
      padding: 8px 0;
      p {
        color: var(--para-color);
        font-size: 17px;
        padding: 10px 0;
      }
      span {
        color: var(--hero-color);
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
  }
`;

const CareerJobListeningWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--white-smoke);
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    height: 100%;
    padding: 10px 1rem;
  }
`;
const ListeningHeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  h2 {
    color: var(--hero-color);
  }
  p {
    width: 25%;
  }
  @media screen and (max-width: 430px) {
    p {
      width: 80%;
    }
  }
`;
const JobListAreaWrapper = styled.article`
  width: 100%;
  height: 70vh;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;
  @media screen and (max-width: 430px) {
    height: 100%;
    grid-template-columns: 1fr;
  }
`;

const JobCardWrapper = styled.div`
  width: 100%;
  height: max-content;
  background: var(--text-color);
  box-shadow: 0 0 10px rgb(0, 0, 0, 5%);
  padding: 10px;
  overflow: hidden;
  align-items: center;
`;
const AboutBrand = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  .from {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate(2rem, -1rem);
    p {
      width: 50%;
      font-weight: 600;
      color: var(--hero-color);
    }
    .time {
      width: 50%;
      padding: 6px;
      border-radius: 50px;
      background: var(--sky-blue-variant);
      text-align: center;
      span {
        width: 50%;
        font-size: 14px;
      }
    }
  }
`;
const BrandAndJobWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;
const BrandLogoWrap = styled.div`
  width: 80px;
  height: 75px;
  border-radius: 50px;
  background: var(--text-color);
  border: 1.5px solid var(--sky-blue);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;
const AboutJob = styled.div`
  width: 80%;
  h2 {
    font-size: 20px;
  }
  p {
    width: 100%;
    font-size: 17px;
    color: var(--para-color);
  }
`;

const LocAndSalaryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 70%;
  margin-left: 6%;
  transform: translate(1.2rem, -1rem);
  @media screen and (max-width: 430px) {
    width: 90%;
  }
`;
const LocWrapper = styled.div`
  width: 50%;
  background: var(--sky-blue-variant);
  color: var(--sky-blue);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px;
  border-radius: 0.2rem;
  @media screen and (max-width: 430px) {
    padding: 10px;
  }
`;
const SalaryWrapper = styled(LocWrapper)``;
export default Career;
