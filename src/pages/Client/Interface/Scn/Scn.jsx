import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../../../../Assets/Images/logo.png";
import coverBg from "../../../../Assets/Images/cover-bg.jpg";
import { MdComment, MdDashboard, MdGrid3X3, MdLogout } from "react-icons/md";
import { FaBookOpen, FaShoppingCart, FaUserCog } from "react-icons/fa";
import View from "../View/View";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Docs from "../Docs/Docs";
import Settings from "../Settings/Settings";
import Orders from "../Orders/Orders";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Scn = () => {
  const [view, setView] = useState(true);
  const [products, setProducts] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [docs, setDocs] = useState(false);
  const [settings, setSettings] = useState(false);
  const [orders, setOrders] = useState(false);
  const [mobile, setMobile] = useState(true);
  const navigate = useNavigate();
  return (
    <ScnPageContainerWrapper>
      <SideBarContainerWrapper className={mobile ? "show-side-bar" : "hide-side-bar"}>
        <LogoWrapper>
          <img src={logoImg} alt="our-logo" />
        </LogoWrapper>
        <HeaderWrapper>
          <h2>SheCommerce Network</h2>
        </HeaderWrapper>
        <MenuWrapper>
          <MenuItemWrapper
            onClick={() => {
              setView(true);
              setDocs(false);
              setReviews(false);
              setProducts(false);
              setSettings(false);
              setOrders(false);
              setMobile(false);
            }}
          >
            <MdDashboard />
            <span>Dashboard</span>
          </MenuItemWrapper>
          <MenuItemWrapper
            onClick={() => {
              setOrders(true);
              setProducts(false);
              setDocs(false);
              setReviews(false);
              setView(false);
              setSettings(false);
              setMobile(false);
            }}
          >
            <FaShoppingCart />
            <span>Orders</span>
          </MenuItemWrapper>
          <MenuItemWrapper
            onClick={() => {
              setOrders(false);
              setProducts(true);
              setDocs(false);
              setReviews(false);
              setView(false);
              setSettings(false);
              setMobile(false);
            }}
          >
            <MdGrid3X3 />
            <span>Products</span>
          </MenuItemWrapper>
          <MenuItemWrapper
            onClick={() => {
              setOrders(false);
              setReviews(true);
              setDocs(false);
              setProducts(false);
              setView(false);
              setSettings(false);
              setMobile(false);
            }}
          >
            <MdComment />
            <span>Reviews</span>
          </MenuItemWrapper>
          <MenuItemWrapper
            onClick={() => {
              setOrders(false);
              setDocs(true);
              setReviews(false);
              setProducts(false);
              setView(false);
              setSettings(false);
              setMobile(false);
            }}
          >
            <FaBookOpen />
            <span>Documentation</span>
          </MenuItemWrapper>
          <MenuItemWrapper
            onClick={() => {
              setOrders(false);
              setSettings(true);
              setDocs(false);
              setReviews(false);
              setProducts(false);
              setView(false);
              setMobile(false);
            }}
          >
            <FaUserCog />
            <span>Settings</span>
          </MenuItemWrapper>
          <ActionBtnWrapper onClick={() => {signOut(auth); navigate(`/`)}}>
            <MdLogout />
            <span>Log Out</span>
          </ActionBtnWrapper>
        </MenuWrapper>
      </SideBarContainerWrapper>
      <DashAreaContainerWrapper className={mobile ? "large" : "small"}>
        <BurgerButton onClick={() => (setMobile(!mobile))}>
          <MdDashboard />
        </BurgerButton>
        {view && <View />}
        {products && <Products />}
        {reviews && <Reviews />}
        {docs && <Docs />}
        {settings && <Settings setDocs={setDocs} setOrders={setOrders} setProducts={setProducts} setReviews={setReviews} setSettings={setSettings} setView={setView} />}
       {orders && <Orders />}
      </DashAreaContainerWrapper>
    </ScnPageContainerWrapper>
  );
};

const ScnPageContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  .show-side-bar{
    position: absolute;
    left: 0;
  }
  .hide-side-bar{
    position: absolute;
    left: -35rem;
  }
  .small{
    width: 100%;
    margin-left: 0;
  }
  .large{
    width: calc(100% - 25%);
    position: absolute;
    margin-left: -25%;
  }
`;

const SideBarContainerWrapper = styled.aside`
  width: 25%;
  height: 100vh;
  background: linear-gradient(var(--hero-color), rgb(0,0,0, 40%)) , url(${coverBg});
  background-position: center;
  background-size: cover;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
    @media screen and (max-width: 768px){
      z-index: 1000;
      width: 45%;
    }
  @media screen and (max-width: 430px) {
    width: 80%;
  }
`;

const LogoWrapper = styled.div`
  width: 78px;
  height: 80px;
  background: white;
  border-radius: 50px;
  box-shadow: 0 0 10px rgb(0, 0, 0, 5%);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;

const HeaderWrapper = styled.div`
  background: var(--text-color);
  border-radius: 0.5rem;
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const MenuWrapper = styled.div`
  width: 90%;
  height: 80%;
  padding: 10px;
  @media screen and (max-width: 768px) {
    height: 80%;
  }
`;

const MenuItemWrapper = styled.div`
  width: 100%;
  background: rgb(0, 0, 0, 60%);
  box-shadow: var(--box-shadow);
  border-radius: 0.2rem;
  cursor: pointer;
  color: var(--sky-blue);
  font-size: 17px;
  font-weight: 600;
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 10px;
  &:hover {
    box-shadow: none;
  }
  &:active {
    transform: scale(0.95);
  }
  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    height: 80px;
    margin-top: 15px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 10px 15px;
    height: 60px;
    margin-top: 15px;
    font-size: 1.4rem;
  }
`;

const ActionBtnWrapper = styled.div`
  width: 100%;
  height: 55px;
  border-radius: 0.2rem;
  background: red;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px;
  font-size: 17px;
  margin-top: 15px;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    box-shadow: 0 0.5rem 1rem rgb(0, 0, 0, 5%);
  }
`;

const DashAreaContainerWrapper = styled.main`
  width: calc(100% - 25%);
  height: 100vh;
  background: var(--white-smoke);
  top: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    margin-left: 0;
  }
`;

const BurgerButton = styled.div`
  position: fixed;
  top: 20rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  z-index: 1000;
  background: linear-gradient(168deg, var(--hero-color), var(--main-color));
  box-shadow: 0 0 15px rgb(0,0,0, 10%);
  border-radius: .5rem;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`
export default Scn;
