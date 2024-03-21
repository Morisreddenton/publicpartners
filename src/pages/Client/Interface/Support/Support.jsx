import React from "react";
import styled from "styled-components";
import { Footer, NavBar } from "../../../../components";
import {  FaQuestion, FaUserFriends } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <SupportPageContainerWrapper className="flex-box-col">
        <HeroContainerWrapper className="flex-box-col">
          <div className="header">
            <h1>How Can We Help You?</h1>
          </div>
          <div className="search-box">
            <input
              type="text"
              name="search"
              placeholder="Please search something here .."
            />
          </div>
        </HeroContainerWrapper>

        <SupportElementsWrapper>
          <SupportCardWrapper className="flex-box-col">
            <div className="top flex-box">
              <FaUserFriends />
            </div>
            <div className="mid">
              <h2>Community</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                debitis culpa, consectetur velit explicabo nam repellat adipisci
                expedita dignissimos dicta aliquid magni, tenetur officia
                mollitia!
              </p>
            </div>
            <div className="last" onClick={() => {navigate(`/community`)}}>
              <span>Join Community</span>
            </div>
          </SupportCardWrapper>
          <SupportCardWrapper className="flex-box-col">
            <div className="top flex-box">
              <MdSupportAgent />
            </div>
            <div className="mid">
              <h2>24 / 7 Call Centre</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                debitis culpa, consectetur velit explicabo nam repellat adipisci
                expedita dignissimos dicta aliquid magni, tenetur officia
                mollitia!
              </p>
            </div>
            <div className="last">
              <span>Need Help Call Us</span>
            </div>
          </SupportCardWrapper>
          <SupportCardWrapper className="flex-box-col">
            <div className="top flex-box">
              <FaQuestion />
            </div>
            <div className="mid">
              <h2>FAQs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                debitis culpa, consectetur velit explicabo nam repellat adipisci
                expedita dignissimos dicta aliquid magni, tenetur officia
                mollitia!
              </p>
            </div>
            <div className="last" onClick={() => {navigate(`/faqs`)}}>
              <span>Read More</span>
            </div>
          </SupportCardWrapper>
        </SupportElementsWrapper>
      </SupportPageContainerWrapper>
      <Footer />
    </>
  );
};

const SupportPageContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--white-smoke);
`;

const HeroContainerWrapper = styled.header`
  width: 100%;
  height: 80vh;
  background: var(--hero-color);
  padding: 30px 1.2rem;

  .header {
    color: var(--text-color);
  }

  .search-box {
    width: 70%;
    height: 90px;
    background: var(--text-color);
    border-radius: 10px;
    box-shadow: var(--box-shadow);

    input {
      width: 100%;
      height: 100%;
      padding: 30px;
      font-size: 1.1rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 430px) {
    .search-box {
      width: 100%;
      height: 80px;
    }
  }
`;

const SupportElementsWrapper = styled.article`
  width: 100%;
  height: 95vh;
  background-color: var(--white-smoke);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;

const SupportCardWrapper = styled.div`
  width: 100%;
  height: 80%;
  background: var(--text-color);
  box-shadow: var(--box-shadow);
  border-radius: 1pc;
  padding: 10px;

  .top {
    background: var(--hero-color);
    border-radius: 100%;
    color: var(--sky-blue);
    width: 150px;
    height: 35%;
    font-size: 3rem;
    gap: 10px;
    text-align: center;
  }

  .mid {
    padding-top: 12px;
    text-align: center;
    h2 {
      color: var(--hero-color);
    }
    p {
      font-size: 17px;
      color: var(--para-color);
    }
  }

  .last {
    margin-top: 10px;
    span {
      font-size: 18px;
      color: var(--main-color);
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    .top {
      width: 120px;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: max-content;
      font-size: 1;
    }
  }
`;
export default Support;
