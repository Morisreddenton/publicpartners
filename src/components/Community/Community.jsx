import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";
import comImg from "../../Assets/Images/com-banner.svg"
const Community = () => {
  return (
    <>
      <NavBar />
      <CommunityContainerWrapper>
        <CommunityHeaderWrapper>
          <LeftContainer>
            <h1>
              Welcome To <span>PPA Vast Community</span> Platform Centre
            </h1>
            <div className="cap">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur nostrum provident, quidem itaque unde non voluptatem
                adipisci numquam error suscipit voluptate dicta! Alias,
                repellendus saepe!
              </p>
            </div>
            <div className="btn">
              <span>Explore Community</span>
            </div>
          </LeftContainer>
          <RightContainer>
            <div className="overlay">
              <img src={comImg} alt="" />
            </div>
          </RightContainer>
        </CommunityHeaderWrapper>
        <CommunityPlatformsListWrapper>
          <PlatformCard>
            <div className="com-banner">
              <h2>Telegram Community</h2>
             <div className="ico-box">
             <FaTelegram />
             </div>
            </div>
          </PlatformCard>
          <PlatformCard>
            <div className="com-banner">
            <h2>WhatsApp Community</h2>
             <div className="ico-box">
             <FaWhatsapp style={{color: "green"}} />
             </div>
            </div>
          </PlatformCard>
          <PlatformCard>
            <div className="com-banner">
            <h2>Telegram Community</h2>
             <div className="ico-box">
             <FaFacebook style={{color: "blue"}} />
             </div>
            </div>
          </PlatformCard>
          <PlatformCard>
            <div className="com-banner">
            <h2>Telegram Community</h2>
             <div className="ico-box">
             <FaTelegram />
             </div>
            </div>
          </PlatformCard>
        </CommunityPlatformsListWrapper>
      </CommunityContainerWrapper>
      <Footer />
    </>
  );
};

const CommunityContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const CommunityHeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 1.2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  width: 60%;
  height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h1 {
    width: 80%;
  }

  .cap {
    p {
      width: 75%;
    }
  }
  .btn {
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .cap{
      p{
        width: 98%;
        padding-bottom: 8px;
      }
    }
  }
`;

const RightContainer = styled.div`
  width: calc(100% - 70%);
  height: 90vh;
  border-radius: 1pc;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 1rem;
    left: -1rem;
    bottom: 0;
    width: 98%;
    height: 95%;
    border-radius: inherit;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .overlay{
      img{
        width: 80%;
      }
    }
  }
`;

const CommunityPlatformsListWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--white-smoke);
  padding: 20px 1.2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

const PlatformCard = styled.div`
  width: 100%;
  height: 90%;
  background: var(--text-color);
  box-shadow: 0 0 10px rgb(0, 0, 0, 20%);
  border-radius: 10px;

  .com-banner {
    width: 100%;
    height: 40%;
    background: linear-gradient(168deg, var(--hero-color), var(--sky-blue));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    h2{
      color: var(--text-color);
    }
   ;
    .ico-box{
      width: 100px;
      height: 100px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      background: var(--text-color);
      box-shadow: 0 0 10px rgb(0, 0, 0, 20%);
      color: var(--hero-color);
      font-size: 4rem;
      padding: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;

export default Community;
