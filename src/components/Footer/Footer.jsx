import React from "react";
import styled from "styled-components";
import logoImg from "../../Assets/Images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const socialUrl = {
  linkedIn: `https://www.linkedin.com/company/@publicpartnersassociation`,
  facebook: `https://www.facebook.com/@publicpartnersassociation`,
  instagram: `https://www.facebook.com/@publicpartnersassociation_`,
  tiktok: `https://www.tiktok.com/@ppa_ghana`,
  youtube: `https://www.youtube.com/@PublicPartnersAssociation`
}
const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainerWrapper className="flex-box">
      <LeftWrapper>
        <div className="top-box">
          <div className="img-wrapper">
            <img src={logoImg} alt="our-log" />
          </div>
          <div className="abt">
            <h2>Public Partners Association</h2>
            <div className="cap">
              <p>
              We have our sights set firmly on the future. We continuously adapt and innovate, staying ahead of the curve in a rapidly changing business landscape. Our commitment to leveraging emerging trends and technologies ensures that our clients always have the leading edge, capturing the full potential of their investments.
              </p>
            </div>
          </div>
          <div className="socials">
          <div className="ico-box">
             <Link to={socialUrl.linkedIn} target="_blank" >
             <FaLinkedin className="ico" />
             </Link>
            </div>
            <div className="ico-box">
             <Link to={socialUrl.facebook} target="_blank"  >
             <FaFacebook className="ico" />
             </Link>
            </div>
            <div className="ico-box">
             <Link to={socialUrl.instagram} target="_blank"  >
             <FaInstagram className="ico" />
             </Link>
            </div>
            <div className="ico-box">
            <Link to={socialUrl.tiktok} target="_blank" >
              <FaTiktok className="ico"/>
            </Link>
            </div>
            <div className="ico-box">
             <Link to={socialUrl.youtube} target="_blank" >
             <FaYoutube className="ico"/>
             </Link>
            </div>
          </div>
        </div>
      </LeftWrapper>
      <RightWrapper>
        <ItemCardWrapper>
          <h2>Company</h2>
          <div className="ls">
            <p
              onClick={() => {
                navigate(`/about`);
              }}
            >
              About Us
            </p>
            <p
              onClick={() => {
                navigate(`/career`);
              }}
            >
              Career
            </p>
            <p
              onClick={() => {
                navigate(`/contact`);
              }}
            >
              Contact Us
            </p>
            <p
              onClick={() => {
                navigate(`/media-kit`);
              }}
            >
              Media Kit
            </p>
          </div>
        </ItemCardWrapper>
        <ItemCardWrapper>
          <h2>Support</h2>
          <div className="ls">
            <p
              onClick={() => {
                navigate(`/blogs`);
              }}
            >
              Blogs
            </p>
            <p
              onClick={() => {
                navigate(`/community`);
              }}
            >
              Community
            </p>
            <p
              onClick={() => {
                navigate(`/faqs`);
              }}
            >
              FAQs
            </p>
            <p
              onClick={() => {
                navigate(`/support`);
              }}
            >
              Help Center
            </p>
          </div>
        </ItemCardWrapper>
        <ItemCardWrapper>
          <h2>Legal Information</h2>
          <div className="ls">
            <p
              onClick={() => {
                navigate(`/ads-policy`);
              }}
            >
              Ads Policy
            </p>
            <p
              onClick={() => {
                navigate(`/cookies-policy`);
              }}
            >
              Cookies Policy
            </p>
            <p
              onClick={() => {
                navigate(`/privacy-policy`);
              }}
            >
              Privacy Policy
            </p>
            <p
              onClick={() => {
                navigate(`/term-of-service`);
              }}
            >
              Terms OF Services
            </p>
          </div>
        </ItemCardWrapper>
      </RightWrapper>
    </FooterContainerWrapper>
  );
};

const FooterContainerWrapper = styled.footer`
  width: 100%;
  height: 90vh;
  background: var(--hero-color);
  h2 {
    color: var(--sky-blue);
    font-size: 25px;
    padding: 12px 0;
  }

  p {
    color: var(--text-color);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  @media screen and (max-width: 430px) {
    height: 150vh;
    overflow-y: hidden;
  }
`;
const LeftWrapper = styled.article`
  width: 40%;
  height: 85%;
  align-items: flex-start;
  padding: 10px;
  .top-box {
    transform: translateY(6rem);
    width: 100%;
    .img-wrapper {
      width: 90px;
      height: 90px;
      border-radius: 0.5rem;
      background: var(--text-color);
      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
    .abt {
      padding: 15px 0;
    }

    .socials {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .ico-box {
        width: 40px;
        height: 40px;
        border-radius: 0.5rem;
        background: var(--sky-blue);
        box-shadow: var(--box-shadow);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        .ico{
          color: var(--hero-color);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 1rem;
    .abt {
      p {
        width: 80%;
      }
    }
  }
  @media screen and (max-width: 430px) {
    height: 55%;
    .top-box {
      transform: translateY(2rem);
    }
    .abt {
      p {
        width: 100%;
        line-height: 1.6;
      }
    }
  }
`;

const RightWrapper = styled.article`
  width: 56%;
  height: 85%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    height: 100%;
    overflow-y: hidden;
  }
`;

const ItemCardWrapper = styled.div`
  width: 100%;
  height: 60%;

  .ls {
    padding-left: 10px;
    p {
      padding: 12px 0;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    overflow: hidden;
    .ls {
      p {
        padding: 10px 0;
        left: 1.5;
      }
    }
  }
  @media screen and (max-width: 430px) {
    overflow: hidden;
    height: max-content;
    .ls {
      p {
        padding: 10px 0;
        left: 1.5;
      }
    }
  }
`;

export default Footer;
