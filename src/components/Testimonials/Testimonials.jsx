import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import scnImg from "../../Assets/Images/scn.jpeg";
const Testimonials = () => {
  return (
    <TestimonialsContainerWrapper>
      <div className="header">
        <h1>
          Our Positive <span>Social Impact</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iure
          officiis voluptatem dicta voluptate rerum.
        </p>
      </div>
      <article>
        <div className="test-card">
          <div className="top">
            <h2>Transformative Experience</h2>
            <div className="cap">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium perspiciatis, incidunt maxime nisi tempora quae
                ullam cupiditate nihil? Soluta tempore cupiditate cum!
              </p>
            </div>
          </div>
          <div className="down">
            <div className="img-box">
            <img src={scnImg} alt="profile" />
            </div>
            <div className="info-box">
              <h2>Abdullah Yusif</h2>
              <span>Affiliate Marketer</span>
              <div className="socials">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="test-card">
          <div className="top">
            <h2>Transformative Experience</h2>
            <div className="cap">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium perspiciatis, incidunt maxime nisi tempora quae
                ullam cupiditate nihil? Soluta tempore cupiditate cum!
              </p>
            </div>
          </div>
          <div className="down">
            <div className="img-box">
              <img src={scnImg} alt="profile" />
            </div>
            <div className="info-box">
              <h2>Abdullah Yusif</h2>
              <span>Affiliate Marketer</span>
              <div className="socials">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
       
        <div className="test-card">
          <div className="top">
            <h2>Transformative Experience</h2>
            <div className="cap">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium perspiciatis, incidunt maxime nisi tempora quae
                ullam cupiditate nihil? Soluta tempore cupiditate cum!
              </p>
            </div>
          </div>
          <div className="down">
            <div className="img-box">
            <img src={scnImg} alt="profile" />
            </div>
            <div className="info-box">
              <h2>Abdullah Yusif</h2>
              <span>Affiliate Marketer</span>
              <div className="socials">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </article>
    </TestimonialsContainerWrapper>
  );
};

const TestimonialsContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--white-smoke);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 1.2rem;

  .header {
    width: 80%;
    text-align: center;
    p {
      width: 50%;
      margin: 0 auto;
    }
  }

  article {
    width: 100%;
    height: 78vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 1rem;
    padding: 10px;

    .test-card {
      width: 100%;
      height: 70%;
      background: var(--text-color);
      box-shadow: var(--box-shadow);
      border-radius: 0.5rem;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      .top {
        h2{
          color: var(--main-color);
          padding-bottom: 12px;
        }
        p {
          color: var(--para-color);
        }
      }

      .down {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .img-box {
          width: 80px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          object-fit: fill;
          background: var(--text-color);
          box-shadow: 0 1rem .5rem var(--sky-blue-variant);
          border-radius: 5px;

          img{
            width: 100%;
            height: 100%;
          }
        }
        .info-box {
          width: 60%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
          h2{
            color: var(--hero-color);
            font-size: 1.2rem;
          }
          .socials {
            width: 60%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 10px;
            font-size: 22px;
            color: var(--main-color);
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 430px) {
    .header{
      width: 100%;
      p{
        width: 83%;
      }
    }
    article{
      grid-template-columns: 1fr;
      height: max-content;
      .test-card{
        height: 100%;
      }
    }
  }
`;

export default Testimonials;
