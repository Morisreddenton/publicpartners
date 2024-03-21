import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../../../Assets/Images/logo.png";
import {
  MdAddPhotoAlternate,
  MdDashboard,
  MdGrid3X3,
  MdLogout,
  MdOutlineShoppingCart,
  MdPostAdd,
  MdReadMore,
  MdSettings,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { AdOrders, AdProducts, AdView } from "../..";
import { Documents, Elite, Post } from "../../../components";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Dash = () => {
  const [view, setView] = useState(true);
  const [order, setOrder] = useState(false);
  const [product, setProduct] = useState(false);
  const [post, setPost] = useState(false);
  const [elite, setElite] = useState(false);
  const [read, setRead] = useState(false);
  const [mobile, setMobile] = useState(true);
  const navigate = useNavigate();
  return (
    <AdminDashboardContainerWrapper>
      <SideBarPanelWrapper className={mobile ? "show-side-bar " : "hide-side-bar"} >
        <div className="logo-wrap">
          <div className="img-box">
            <img src={logoImg} alt="" />
          </div>
          <div className="dash">
            <h2>Welcome, PPA</h2>
          </div>
        </div>
        <div className="mid-box">
          <div
            className="menu-item"
            onClick={() => {
              setView(true);
              setOrder(false);
              setProduct(false);
              setPost(false);
              setElite(false);
              setRead(false);
            }}
          >
            <MdDashboard />
            <p>Dashboard</p>
          </div>
          <div
            className="menu-item"
            onClick={() => {
              setView(false);
              setOrder(true);
              setProduct(false);
              setPost(false);
              setElite(false);
              setRead(false);
            }}
          >
            <MdOutlineShoppingCart />
            <p>Order</p>
          </div>
          <div
            className="menu-item"
            onClick={() => {
              setView(false);
              setOrder(false);
              setProduct(true);
              setPost(false);
              setElite(false);
              setRead(false);
            }}
          >
            <MdGrid3X3 />
            <p>Products</p>
          </div>
          <div
            className="menu-item"
            onClick={() => {
              setView(false);
              setOrder(false);
              setProduct(false);
              setPost(false);
              setElite(true);
              setRead(false);
            }}
          >
            <FaUserFriends />
            <p>Elite Partners</p>
          </div>
          <div
            className="menu-item"
            onClick={() => {
              setView(false);
              setOrder(false);
              setProduct(false);
              setPost(true);
              setElite(false);
              setRead(false);
            }}
          >
            <MdPostAdd />
            <p>Post Centre</p>
          </div>
          <div className="menu-item"
             onClick={() => {
                setView(false);
                setOrder(false);
                setProduct(false);
                setPost(false);
                setElite(false);
                setRead(true);
              }}
          >
            <MdReadMore />
            <p>ReadMe</p>
          </div>
        </div>
        <div className="pro">
          <div className="usr-avatar">
            <img src={logoImg} alt="" />
          </div>
          <div className="usr-abt">
            <h4>Kwarteng Joseph</h4>
            <samp>ppaincc@gmail.com</samp>
          </div>
          <div className="ico">
            <MdSettings />
            <MdLogout onClick={() => {signOut(auth); navigate(`/ppa-auth`)}}/>
          </div>
        </div>
      </SideBarPanelWrapper>
      <DashAreaContainer className={mobile ? "small" : "large"}>
        <BurgerBars onClick={() => {setMobile(!mobile);}}>
            <MdDashboard />
        </BurgerBars>
        <TopNav>
          <div className="left">
            <h2>
              Hello Admin, <span>Welcome back</span>
            </h2>
            <h4>Kwarteng Joseph</h4>
          </div>
          <div className="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search product, orders, customers ..."
            />
          </div>
          <div
            className="btn"
            onClick={() => {
              setPost(true);
              setView(false);
              setProduct(false);
              setOrder(false);
              setElite(false);
            }}
          >
            <MdAddPhotoAlternate />
            <span>Add Post</span>
          </div>
        </TopNav>
        {view && <AdView />}
        {order && <AdOrders />}
        {product && <AdProducts />}
        {post && <Post />}
        {elite && <Elite />}
        {read && <Documents />}
      </DashAreaContainer>
    </AdminDashboardContainerWrapper>
  );
};

const AdminDashboardContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;

  .show-side-bar{
    position: absolute;
    left: -35rem;
  }
  .hide-side-bar{
    position: absolute;
    left: 0;
  }
  .small{
    width: 100%;
    margin-left: 0;
  }
  .large{
    position: relative;
    top: 0;
    margin-left: 20%;
    width: calc(100% - 20%);
  }
`;

const SideBarPanelWrapper = styled.article`
  width: 20%;
  height: 100vh;
  background: var(--text-color);
  box-shadow: 0 10px 0 var(--box-shadow);
  padding: 12px;
  overflow-y: hidden;
  z-index: 100;

  .logo-wrap {
    width: 98%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1.5px solid var(--hero-color);
    padding-bottom: 10px;
    gap: 1rem;
    .img-box {
      background: var(--text-color);
      border: 1.5px solid var(--hero-color);
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dash {
      h2 {
        color: var(--hero-color);
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
  .mid-box {
    width: 100%;
    height: 65%;
    border-radius: 5px;
    margin: 10px auto;
    .menu-item {
      width: 100%;
      height: 58px;
      background: var(--hero-color);
      border-radius: 10px;
      box-shadow: 0 0 10px rgb(0, 0, 0, 30%);
      color: var(--text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      font-size: 1.3rem;
      font-weight: 600;
      margin: 6px 0;
      padding: 0 20px;
    }
  }
  .pro {
    width: 100%;
    height: 22%;
    background: rgb(18, 3, 58);
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    .usr-avatar {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--text-color);
      border-radius: 50px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
    .usr-abt {
      text-align: center;
    }

    .ico {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px){
      z-index: 1000;
      width: 45%;
      .mid-box{
        .menu-item{
          height: 75px;
        }
      }
    }
  @media screen and (max-width: 430px) {
    width: 80%;
  }
`;

const DashAreaContainer = styled.article`
  height: 100vh;
  background: var(--white-smoke);
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;
const TopNav = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--text-color);

  .left {
    h2 {
      color: var(--hero-color);
      span {
        color: var(--main-color);
      }
    }
    h4 {
      color: var(--sky-blue);
    }
  }

  .search {
    width: 40%;
    height: 90%;
    box-shadow: 0 0 10px rgb(0, 0, 0, 20%);
    border-radius: 0.5rem;
    input {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      padding: 0 20px;
      color: var(--hero-color);
      font-weight: 600;
    }
  }

  .btn {
    width: 20%;
    border-radius: 0.5rem;
    gap: 10px;
  }
  @media screen and (max-width: 430px) {
    .left{
      display: none;
    }
    .search{
      width: 60%;
    }
    .btn{
      width: 30%;
    }
  }
`;

const BurgerBars = styled.div`
    width: 50px;
    height: 50px;
    background: linear-gradient(168deg, var(--main-color), var(--hero-color));
    border-radius: 5px;
    color: var(--text-color);
    cursor: pointer;
    font-size: 1.2rem;
    position: fixed;
    top: 20rem;
    right: 1rem;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Dash;
