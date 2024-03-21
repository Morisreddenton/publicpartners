import React from "react";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight, FaShoppingBag } from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp, } from "react-icons/md";

const View = () => {
  return (
    <ViewContainerWrapper>
      <LeftContainerWrapper>
        <QuoteBoxContainer>
          <div className="quote">
            <h2>Good Job</h2>
            <p>
              <span>
                <FaQuoteLeft />
              </span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              inventore sunt, impedit hic eos velit perferendis odit fugiat
              rerum dignissimos.{" "}
              <span>
                <FaQuoteRight />
              </span>
            </p>
            <div className="by">
              <samp>Anderson Quoted</samp>
            </div>
          </div>
        </QuoteBoxContainer>
        <StatContainer>
          <div className="stat-card">
            <h1>$ 1,2K</h1>
            <p>Income Tax</p>
          </div>
          <div className="stat-card">
          <h1>$ 2,0K</h1>
            <p>Total Stock</p>
          </div>
          <div className="stat-card">
          <h1>$ 500</h1>
            <p>Favorite</p>
          </div>
        </StatContainer>
        <h4>New Arrival</h4>
        <NewFavoriteArrival>
           
            <ArrivalCard className="a">
              <h3>Bang Bags</h3>
            </ArrivalCard>
            <ArrivalCard className="b">
              <h3>Jewelry</h3>
            </ArrivalCard>
            <ArrivalCard className="c">
               <h3>Marketing BootCamp</h3>
            </ArrivalCard>
        </NewFavoriteArrival>
      </LeftContainerWrapper>
      <RightContainerWrapper>
        <h2>Performance</h2>
        <CompanyEarningWrapper>
          <EarningStatCard>
            <div className="top">
              <h4>Company Income</h4>
              <p>
                <span>$ </span>1.4K
              </p>
            </div>
            <div className="mid"></div>
            <div className="last">
              <div className="or">
                <FaShoppingBag className="ico" />
                <span>25</span>
                <p>orders</p>
              </div>
              <div className="analytic">
                <MdArrowDropUp />
                <span>10%</span>
              </div>
            </div>
          </EarningStatCard>
          <div className="gap">
            <span>Your Progress </span>
          </div>
          <EarningStatCard>
            <div className="top">
              <h4>Total Earnings</h4>
              <p>
                <span>$ </span>1.4K
              </p>
            </div>
            <div className="mid"></div>
            <div className="last">
              <div className="or">
                <FaShoppingBag className="ico" />
                <span>150</span>
                <p>orders</p>
              </div>
              <div className="analytic">
                <MdArrowDropUp />
                <span>10%</span>
              </div>
            </div>
          </EarningStatCard>
          <EarningStatCard>
            <div className="top">
              <h4>Best Selling</h4>
              <p>
                <span>$ </span>1,2K
              </p>
            </div>
            <div className="mid"></div>
            <div className="last">
              <div className="or">
                <FaShoppingBag className="ico" />
                <span>120</span>
                <p>orders</p>
              </div>
              <div className="analytic">
                <MdArrowDropUp />
                <span>10%</span>
              </div>
            </div>
          </EarningStatCard>
          <EarningStatCard>
            <div className="top">
              <h4>Worst Selling</h4>
              <p>
                <span>$ </span>700
              </p>
            </div>
            <div className="mid"></div>
            <div className="last">
              <div className="or">
                <FaShoppingBag className="ico" />
                <span>30</span>
                <p>orders</p>
              </div>
              <div className="analytic red">
                <MdArrowDropDown />
                <span>10%</span>
              </div>
            </div>
          </EarningStatCard>
        </CompanyEarningWrapper>
      </RightContainerWrapper>
    </ViewContainerWrapper>
  );
};

const ViewContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const LeftContainerWrapper = styled.article`
  width: 65%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: max-content;
  }
`;

const QuoteBoxContainer = styled.div`
  width: 80%;
  height: 30%;
  background: var(--hero-color);
  border-radius: 1.4pc;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px;
  .quote {
    h2 {
      color: var(--sky-blue);
    }
  }
  p {
    width: 90%;
    padding-top: 5px;
  }
  .by {
    width: 100%;
    samp {
      float: right;
      padding-right: 5rem;
    }
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
  @media screen and (max-width: 430px) {
   width: 100%;
  }
`;
const StatContainer = styled.div`
  width: 100%;
  height: 30%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .stat-card {
    background: var(--text-color);
    border-radius: 1.5pc;
    box-shadow: 0 .5rem 1rem rgb(0,0,0, 5%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    width: 40%;
    height: 80%;
    h1,p{
        line-height: 1.4;
    }
    p{
        font-weight: 600;
        color: var(--para-color);
    }
  }
  @media screen and (max-width: 768px) {
    height: 220px;
  }
  @media screen and (max-width: 430px) {
   .stat-card{
    width: 100%;
    height: 180px;
   } 
  }
`;

const NewFavoriteArrival = styled.div`
 width: 100%;
 height: 16%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 10px;
 margin: 5px 0;
 .a{
    background: var(--main-color);
 }
 .b{
    background: var(--hero-color);
 }
 .c{
    background: skyblue;
 }
 @media screen and (max-width: 768px) {
    height: 160px;
  }
`
const ArrivalCard = styled.div`
     width: 35%;
  height: 100%;
  background: var(--text-color);
  border-radius: .5rem;
  box-shadow: 0 0 1px rgb(0,0,0, 5%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h3{
    font-size: 17px;
    color: var(--text-color);
  }
`

const RightContainerWrapper = styled.article`
  width: 35%;
  height: 100%;
  background: linear-gradient(168deg, var(--hero-color), var(--main-color));
  border-radius: 1pc;
  padding: 10px;
  overflow-y: hidden;
  .gap {
    padding: 4px 0;
    span {
      color: var(--text-color);
    }
  }
  h2 {
    color: var(--text-color);
  }
   @media screen and (max-width: 768px) {
    width: 100%;
    height: max-content;
  }
`;

const CompanyEarningWrapper = styled.div``;

const EarningStatCard = styled.div`
  width: 100%;
  height: 125px;
  background: var(--text-color);
  border-radius: 10px;
  margin-top: 8px;
  padding: 10px;
  overflow: hidden;
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: var(--hero-color);
      font-weight: 600;
    }
  }
  .mid {
    width: 100%;
    height: 10px;
    background: var(--sky-blue-variant);
    border-radius: 5px;
    margin: 12px 0;
  }
  .last {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ico {
      color: rgb(11, 148, 75);
    }
  }
  .analytic {
    width: 80px;
    height: 30px;
    background: var(--main-color-variant);
    border-radius: 50px;
    color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
  .red {
    background: rgba(255, 0, 0, 0.091);
    color: red;
  }
  .or {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    color: var(--hero-color);
    p {
      font-size: 16px;
      color: var(--main-color);
    }
    span {
      padding-left: 4px;
    }
  }
`;

export default View;
