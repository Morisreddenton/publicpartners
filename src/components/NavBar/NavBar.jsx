import React, { useContext, useState } from "react";
import styled from "styled-components";
import logoImg from "../../Assets/Images/logo.png";
import {
  MdDashboard,
  MdLogout,
  MdManageAccounts,
  MdMenu,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
const NavBar = () => {
  const {currentUser} = useContext(AuthContext);
  const [mobile, setMobile] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <NavBarContainerWrapper>
        <LogoWrapper
          onClick={() => {
            navigate(`/`);
          }}
        >
          <img src={logoImg} alt="ppa-logo" />
        </LogoWrapper>
        <MenuListWrapper className={mobile ? "dropDown" : ""}>
          <NavLinks
            onClick={() => {
              navigate(`/`);
              setMobile(false);
            }}
          >
            Home
          </NavLinks>
          <NavLinks
            onClick={() => {
              navigate(`/about`);
              setMobile(false);
            }}
          >
            About
          </NavLinks>
          <NavLinks
            onClick={() => {
              navigate(`/contact`);
              setMobile(false);
            }}
          >
            Contact
          </NavLinks>
          <NavLinks
            onClick={() => {
              navigate(`/support`);
              setMobile(false);
            }}
          >
            Support
          </NavLinks>
          <NavLinks
            onClick={() => {
              navigate(`/blogs`);
              setMobile(false);
            }}
          >
            Blogs
          </NavLinks>
        </MenuListWrapper>
        {!currentUser && (
          <ActionBtnWrapper
            className="btn"
            onClick={() => {
              navigate(`/auth`);
            }}
          >
            <span>Register Now</span>
          </ActionBtnWrapper>
        )}
        {currentUser && (
          <UserWrapper
            onClick={() => {
              setShowAccount(!showAccount);
            }}
          ></UserWrapper>
        )}

        <BurgerBarsWrapper
          className="flex-box"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          <MdMenu className="menu" />
        </BurgerBarsWrapper>
      </NavBarContainerWrapper>
      {showAccount && (
        <AccountManaWrapper>
          <div className="profile">
            <img src={logoImg} alt="user-profile" />
          </div>
          <div className="abt">
            <h2>Celeste</h2>
            <p>celesdoe@gmail.com</p>
          </div>
          <div
            className="ls-act"
            onClick={() => {
              setShowAccount(false);
              navigate(`/overview`)
            }}
          >
            <MdDashboard />
            <span>Overview</span>
          </div>
          <div
            className="ls-act"
            onClick={() => {
              setShowAccount(false);
              navigate(`/overview`);
            }}
          >
            <MdManageAccounts />
            <span>Manage Account</span>
          </div>
          <div
            className="ls-act last"
            onClick={() => {
              setShowAccount(false);
              signOut(auth);
            }}
          >
            <MdLogout />
            <span>Log Out</span>
          </div>
        </AccountManaWrapper>
      )}
    </>
  );
};

const NavBarContainerWrapper = styled.nav`
  width: 100%;
  background: var(--text-color);
  box-shadow: var(--box-shadow);
  height: 70px;
  padding: 10px 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  /* position: relative; */

  .dropDown {
    top: 4rem;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  width: 90px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    background-color: var(--sky-blue);
    width: 100%;
    height: 25rem;
    position: absolute;
    top: -40rem;
    left: 0;
    z-index: 1000;
    padding: 10px;
  }
`;

const NavLinks = styled.li`
  padding: 0 20px;
  color: var(--hero-color);
  cursor: pointer;
  font-size: 16.5px;
  font-weight: 500;
  @media screen and (max-width: 430px) {
    height: 65px;
    width: 100%;
    background: var(--text-color);
    border-radius: 0.5rem;
    box-shadow: 0 0 10px var(--main-color-variant);
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    color: var(--hero-color);
    font-weight: 600;
  }
`;

const ActionBtnWrapper = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 0.5rem;

  span {
    color: var(--text-color);
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const UserWrapper = styled.div`
  background: var(--main-color);
  width: 55px;
  height: 55px;
  border-radius: 50px;
  cursor: pointer;
  img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
`;

const AccountManaWrapper = styled.div`
  width: 20%;
  height: 350px;
  background: var(--hero-color);
  border-radius: 10px;
  position: absolute;
  top: 4rem;
  right: 10px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  .profile {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background: var(--text-color);
    overflow: hidden;
    margin-bottom: 5px;
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  .abt {
    color: var(--sky-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    h2 {
      font-size: 18px;
    }
  }

  .ls-act {
    background: var(--text-color);
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    color: var(--hero-color);
    cursor: pointer;
    font-weight: 500;
    padding: 13px 20px;
    width: 85%;
    margin: 8px 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    font-size: 17px;
  }
  .last {
    background: red;
    color: var(--text-color);
  }
`;

const BurgerBarsWrapper = styled.div`
  width: 35px;
  height: 35px;
  background: var(--main-color);
  border-radius: 0.5rem;
  color: var(--text-color);
  display: none;
  cursor: pointer;
  .menu {
    font-size: 18px;
    font-weight: 600;
  }

  @media screen and (max-width: 430px) {
    display: flex;
  }
`;
export default NavBar;
