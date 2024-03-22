import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import bgImg from "../../../../Assets/Images/cover-bg.jpg";
import secImg from "../../../../Assets/Images/security.gif";
import welImg from "../../../../Assets/Images/welcome-img.png";
import {
  FaEye,
  FaFacebook,
  // FaInstagram,
  FaMapMarker,
  FaTiktok,
} from "react-icons/fa";
import { AuthContext } from "../../../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { MdMenu } from "react-icons/md";
const Settings = ({
  setDocs,
  setView,
  setOrders,
  setProducts,
  setSettings,
  setReviews,
}) => {
  const [profile, setProfile] = useState(true);
  const [info, setInfo] = useState(false);
  const [address, setAddress] = useState(false);
  const [security, setSecurity] = useState(false);
  const [identity, setIdentity] = useState(false);
  const [usr, setUsr] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const id = currentUser !== null ? currentUser.uid : currentUser?.uid;
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    id && getUserInfo();
    // eslint-disable-next-line
  }, [id]);
  const getUserInfo = async () => {
    const docRef = doc(db, 'users', id);
    const usrInfo = await getDoc(docRef);
    setUsr(usrInfo.data());
    console.log(usr);
  };

  return (
    <SettingsContainerWrapper>
      <SideBarWrapper>
        <h4>Account Settings</h4>
        <SettingsMenu>
          <SetLink
            onClick={() => {
              setProfile(true);
              setInfo(false);
              setAddress(false);
              setSecurity(false);
              setIdentity(false);
         
            }}
          >
            <span> My Profile</span>
          </SetLink>
          <SetLink
            onClick={() => {
              setProfile(false);
              setInfo(true);
              setAddress(false);
              setSecurity(false);
              setIdentity(false);
              
            }}
          >
            <span>Personal Information</span>
          </SetLink>
          <SetLink
            onClick={() => {
              setProfile(false);
              setInfo(false);
              setAddress(true);
              setSecurity(false);
              setIdentity(false);
          
            }}
          >
            <span>Personal Address</span>
          </SetLink>
          <SetLink
            onClick={() => {
              setProfile(false);
              setInfo(false);
              setAddress(false);
              setSecurity(true);
              setIdentity(false);
        
            }}
          >
            <span>Security Checks</span>
          </SetLink>
          <SetLink
            onClick={() => {
              setProfile(false);
              setInfo(false);
              setAddress(false);
              setSecurity(false);
              setIdentity(true);
      
            }}
          >
            <span>Identity Verification</span>
          </SetLink>
        </SettingsMenu>
        <DeleteAccount className="btn">Delete Account</DeleteAccount>
      </SideBarWrapper>
      {mobile && <SideBarWrapperMobile>
        <h4>Account Settings</h4>
        <SettingsMenu>
          <SetLink
            onClick={() => {
              setProfile(true);
              setInfo(false);
              setAddress(false);
              setSecurity(false);
              setIdentity(false);
              setMobile(false);
            }}
          >
            <span> My Profile</span>
          </SetLink>
          <SetLink
            onClick={() => {
              setProfile(false);
              setInfo(true);
              setAddress(false);
              setSecurity(false);
              setIdentity(false);
              setMobile(false);
            }}
          >
            <span>Personal Information</span>
          </SetLink>
          <SetLink
            onClick={() => {
              setProfile(false);
              setInfo(false);
              setAddress(true);
              setSecurity(false);
              setIdentity(false);
              setMobile(false);
            }}
          >
            <span>Personal Address</span>
          </SetLink>
          <SetLink
            onClick={() => {
              setProfile(false);
              setInfo(false);
              setAddress(false);
              setSecurity(true);
              setIdentity(false);
              setMobile(false);
            }}
          >
            <span>Security Checks</span>
          </SetLink>
          <SetLink
            onClick={() => {
              setProfile(false);
              setInfo(false);
              setAddress(false);
              setSecurity(false);
              setIdentity(true);
              setMobile(false);
            }}
          >
            <span>Identity Verification</span>
          </SetLink>
        </SettingsMenu>
        <DeleteAccount className="btn">Delete Account</DeleteAccount>
      </SideBarWrapperMobile>}
      <SettingsWrapper>
        <div className="burger" onClick={() => {setMobile(!mobile)}}>
          <MdMenu />
        </div>
        {profile && (
          <ProfileContainerWrapper>
            <div className="top-box">
              <div className="up">
                <span>Upload Cover</span>
              </div>
            </div>
            <div className="profile-avatar">
              <img src={bgImg} alt="user-profile" />
            </div>
            <div className="user-info">
              <div className="a">
                <h2>
                  {usr?.firstName } <span>{usr?.lastName}</span>
                </h2>
                <p>{usr?.bio}</p>
              </div>
              <div className="b">
                <FaMapMarker className="ico" />
                <p>{`${usr?.city}, ${usr?.country}`}</p>
              </div>
            </div>
            <div className="about-user">
              <div className="left">
                <h3>About</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eum tenetur, odit nesciunt amet vero consequatur
                  laboriosam a dolorum, fugiat molestias. Voluptate provident
                  dolor enim praesentium possimus aliquam, obcaecati, officia,
                  earum voluptatibus nobis similique eius.
                </p>
                <div className="socials">
                  <div className="ico-box">
                    <FaFacebook />
                    <span>@celeste_deo12</span>
                  </div>
                  <div className="ico-box">
                    <FaTiktok />
                    <span>@celeste_deo12</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={secImg} alt="" />
                <h2>High Security</h2>
              </div>
            </div>
          </ProfileContainerWrapper>
        )}
        {info && (
          <PersonalInfoContainerWrapper>
            <h2>Personal Information</h2>
            <div className="personal-info-card">
              <h4>Basic Information</h4>
              <div className="data">
                <div className="first">
                  <p>First Name</p>
                  <span>{usr?.firstName}</span>
                </div>
                <div className="first">
                  <p>Last Name</p>
                  <span>{usr?.lastName}</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Email</p>
                  <span>{currentUser?.email}</span>
                </div>
                <div className="first">
                  <p>Phone Number</p>
                  <span>{usr?.phoneNumber}</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Bio</p>
                  <span>{usr?.bio}</span>
                </div>
                <div className="first">
                  <p>Date Of Birth</p>
                  <span>13 /06 / 2003</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Occupation</p>
                  <span>{usr?.occupation}</span>
                </div>
                <div className="first">
                  <p>Plan</p>
                  <span>Starter</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Dispute Email</p>
                  <span>{usr?.disputeEmail}</span>
                </div>
                <div className="first">
                  <p>Social Contact</p>
                  <span>Facebook</span>
                </div>
              </div>
              <div className="btn">Update Info</div>
            </div>
          </PersonalInfoContainerWrapper>
        )}
        {address && (
          <AddressDetailContainerWrapper>
            <h2>Personal Address</h2>
            <div className="personal-add-card">
              <h4>Address Detail</h4>
              <div className="data">
                <div className="first">
                  <p>Country</p>
                  <span>{usr?.country}</span>
                </div>
                <div className="first">
                  <p>City / Town</p>
                  <span>{usr?.city}</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Postal Code</p>
                  <span>{usr?.postalCode}</span>
                </div>
                <div className="first">
                  <p>Digital Address</p>
                  <span>{usr?.digitalAddress}</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Address Line 1</p>
                  <span>Kwadaso, {`${usr?.streetAddress}`}</span>
                </div>
                <div className="first">
                  <p>House Number</p>
                  <span>{usr?.houseNumber}</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Second Contact Line</p>
                  <span>{usr?.phoneNumber}</span>
                </div>
                <div className="first">
                  <p>Email</p>
                  <span>{usr?.email}</span>
                </div>
              </div>
              <div className="btn">Update Info</div>
            </div>
          </AddressDetailContainerWrapper>
        )}

        {security && (
          <SecurityContainerWrapper>
            <h2>Security Checks</h2>
            <SecurityCheckWrapper>
              <div className="data">
                <div className="first">
                  <p>Password Recognition</p>
                  <span>*****@Ave</span>
                </div>
                <div className="first">
                  <p>Verified User</p>
                  <span>Verified</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Social Contact Lookup</p>
                  <span>
                    @celeste_doe <samp>verified</samp>
                  </span>
                </div>
                <div className="first">
                  <p>Location Approval</p>
                  <span>Digital Address</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>EULA Agreement</p>
                  <span>I agree</span>
                </div>
                <div className="first">
                  <p>General Email</p>
                  <span>{usr?.generalEmail}</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Identity info</p>
                  <span>ECOWAS Identity Card</span>
                </div>
                <div className="first">
                  <p>Personal Id Number</p>
                  <span>GHA-717537372-0</span>
                </div>
              </div>
              <div className="data">
                <div className="first">
                  <p>Gender</p>
                  <span>Male</span>
                </div>
                <div className="first">
                  <p>Referral Link</p>
                  <span>https://ppa.com/celeste-doe</span>
                </div>
              </div>
            </SecurityCheckWrapper>
          </SecurityContainerWrapper>
        )}
        {identity && (
          <IdentityVerificationContainerWrapper>
            <IdentityCardWrapper>
              <div className="card">
                <div className="card-body">
                  <div className="layer">
                    <h2>ID Front & Back</h2>
                    <div className="eye">
                      <FaEye />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="layer">
                    <h2>Utility Bill Proof</h2>
                    <div className="eye">
                      <FaEye />
                    </div>
                  </div>
                </div>
              </div>
            </IdentityCardWrapper>
            <LastAreaContainerWrapper>
              <div className="left">
                <h2>Data Security Policy</h2>
                <div className="txt">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    pariatur, tenetur cupiditate fugit perferendis blanditiis
                    aliquid perspiciatis nostrum obcaecati esse expedita
                    distinctio explicabo similique ut autem consectetur sit
                    impedit ipsa fugiat, quibusdam atque harum quaerat!
                  </p>
                </div>
                <div
                  className="btn"
                  onClick={() => {
                    setDocs(true);
                    setView(false);
                    setOrders(false);
                    setProducts(false);
                    setReviews(false);
                    setSettings(false);
                  }}
                >
                  <span>Learn More</span>
                </div>
              </div>
              <div className="right">
                <img src={welImg} alt="Information security" />
              </div>
            </LastAreaContainerWrapper>
          </IdentityVerificationContainerWrapper>
        )}
      </SettingsWrapper>
    </SettingsContainerWrapper>
  );
};

const SettingsContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px var(--main-color-variant);
  border-radius: 0.5rem;
  position: relative;
  padding: 12px;
`;
const SideBarWrapper = styled.aside`
  width: calc(100% - 80%);
  height: 100%;
  background: var(--text-color);
  box-shadow: 0 10px 0 rgb(0, 0, 0, 5%);
  padding: 10px;
  overflow-y: hidden;
  h4 {
    color: var(--hero-color);
    font-size: 18px;
  }
  @media screen and (max-width: 430px) {
    display: none;    
  }
`;
const SideBarWrapperMobile = styled(SideBarWrapper)`
  @media screen and (max-width: 430px) {
    display: flex;  
    flex-direction: column;
    width: 100%;
  }
`
const SettingsWrapper = styled.article`
  width: calc(100% - 20%);
  height: 100%;
  background: var(--text-color);
  border-radius: 0 10px 10px 0;
  position: absolute;
  top: 0;
  right: 0;
  margin-left: -20%;
  .burger{
    display: none;
  }
  
  @media screen and (max-width: 430px) {
   margin-left: 0;
   width: 100%;
   position: relative;
   .burger{
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 100;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    border-radius: .2rem;
    color: var(--text-color);
    cursor: pointer;
    font-size: 3rem;
  }
  }
`;

const SettingsMenu = styled.div`
  height: 80%;
  width: 100%;
  margin-top: 15px;
`;

const SetLink = styled.div`
  width: 95%;
  height: 45px;
  background: rgba(4, 4, 238, 0.183);
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0, 0, 0, 5%);
  color: rgb(0, 0, 255);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;
  padding: 0 15px;

  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

const DeleteAccount = styled.div`
  background: var(--text-color);
  border-radius: 50px;
  border: 1.5px solid red;
  color: red;
  transform: translateY(1rem);
`;
const ProfileContainerWrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--white-smoke);
  overflow-y: hidden;
  .top-box {
    width: 100%;
    height: 30%;
    background: url(${bgImg});
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
    padding: 10px;

    .up {
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      float: right;
      padding: 0 10px;
      color: var(--text-color);
      background: rgb(0, 0, 0, 40%);
      border-radius: 5px;
      cursor: pointer;
      padding: 10px;
      span {
        font-weight: 600;
      }
    }
  }
  .profile-avatar {
    width: 110px;
    height: 95px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(0, 0, 0, 20%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 3rem;
    padding: 5px;
    transform: translateY(-1.5rem);
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  .user-info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    width: 80%;
    margin-left: 22%;
    padding: 10px;
    transform: translateY(2px);

    h2 {
      color: var(--hero-color);
      span {
        color: var(--main-color);
      }
    }
    p {
      color: var(--para-color);
    }
    .ico {
      color: var(--main-color);
    }
  }
  .about-user {
    width: 100%;
    height: 55%;
    background: var(--text-color);
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .left {
      width: 60%;
      height: 100%;
      p {
        width: 100%;
        font-size: 17px;
        line-height: 1.6;
      }
      h3 {
        font-size: 1.6rem;
      }
      .socials {
        margin-top: 5px;
        .ico-box {
          width: 40%;
          height: 35px;
          background: var(--text-color);
          box-shadow: 0 0 10px rgb(0, 0, 0, 20%);
          border-radius: 10px;
          color: var(--hero-color);
          cursor: pointer;
          margin: 5px 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          padding: 10px;
          overflow-y: hidden;
        }
      }
    }
    .right {
      width: 40%;
      height: 100%;
      background: var(--hero-color);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      color: var(--sky-blue);
    }
  }

  @media screen and (max-width: 430px) {
    height: 100%;
    .top{
      width: 100%;
      display: flex;
        align-items: center;
        justify-content: space-between;
      .up{
        width: 100%;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .profile-avatar{
      transform: translateX(-2.5rem);
      margin-right: 5px;
    }

    .about-user{
      flex-direction: column;
      height: 70%;
      .left{
        width: 100%;
        height: 60%;
        padding: 1.5rem 0;
      }
      .right{
        height: 40%;
        width: 100%;
      }
    }   
  }
`;
const PersonalInfoContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white-smoke);
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  .personal-info-card {
    width: 100%;
    height: 85%;
    background: var(--text-color);
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    margin-top: 2%;
    padding: 10px;

    .data {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      .first {
        width: 100%;
        border: 1.5px solid var(--sky-blue-variant);
        border-radius: 0.5rem;
        padding: 8px;
        margin: 8px 0;
        p {
          font-size: 17px;
          font-weight: 600;
          color: var(--hero-color);
        }
        span {
          font-size: 15px;
          font-weight: 500;
          color: var(--main-color);
        }
      }
    }
    .btn {
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 430px) {
    .personal-info-card{
      .data{
        flex-direction: column;
        margin-top: 5px;
      }
    }
  }
`;

const AddressDetailContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white-smoke);
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  h4 {
    padding: 10px 0;
  }
  .personal-add-card {
    width: 100%;
    height: 85%;
    background: var(--text-color);
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    margin-top: 2%;
    padding: 10px;

    .data {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      .first {
        width: 100%;
        border: 1.5px solid var(--sky-blue-variant);
        border-radius: 0.5rem;
        padding: 8px;
        margin: 8px 0;
        p {
          font-size: 17px;
          font-weight: 600;
          color: var(--hero-color);
        }
        span {
          font-size: 15px;
          font-weight: 500;
          color: var(--main-color);
        }
      }
    }
    .btn {
      border-radius: 10px;
      transform: translateY(3rem);
    }
  }
  @media screen and (max-width: 430px) {
      .data{
        flex-direction: column;
        margin-top: 5px;
      }
  }
`;

const SecurityContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white-smoke);
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const SecurityCheckWrapper = styled.div`
  width: 100%;
  height: 90%;
  box-shadow: var(--box-shadow);
  background: var(--text-color);
  border-radius: 10px;
  margin-top: 10px;
  .data {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 10px;
    .first {
      width: 100%;
      border: 1.5px solid var(--sky-blue-variant);
      border-radius: 0.5rem;
      padding: 8px;
      margin: 8px 0;
      p {
        font-size: 17px;
        font-weight: 600;
        color: var(--hero-color);
      }
      span {
        font-size: 15px;
        font-weight: 500;
        color: var(--main-color);
      }
    }
  }
  @media screen and (max-width: 430px) {
      .data{
        flex-direction: column;
        margin-top: 5px;
      }
  }
`;

const IdentityVerificationContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white-smoke);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const IdentityCardWrapper = styled.article`
  width: 100%;
  height: 98%;
  background: var(--text-color);
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;

  .card {
    width: 100%;
    height: 100%;
    background: var(--sky-blue-variant);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 1rem;
    padding: 10px;
    .card-body {
      width: 100%;
      height: 80%;
      background: var(--text-color);
      box-shadow: 0 0 10px rgb(0, 0, 0, 5%);
      border-radius: 0.5rem;
      position: relative;

      .layer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(
            rgba(5, 0, 37, 0.804),
            var(--main-color)
          ),
          url(${bgImg});
        background-position: center;
        background-size: cover;
        border-radius: inherit;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        h2 {
          color: var(--text-color);
        }

        .eye {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--text-color);
          border-radius: 50px;
          box-shadow: 0 0 10px rgb(0, 0, 0, 5%);
          font-size: 1.5rem;
          color: var(--main-color);
          cursor: pointer;
          padding: 8px;
        }
      }
    }
  }
  @media screen and (max-width: 430px) {
      .card{
        grid-template-columns: 1fr;
        margin-top: 5px;
        .card-body{
          width: 100%;
          height: 100%;
        }
      }
  }
`;

const LastAreaContainerWrapper = styled.article`
  width: 98%;
  height: 100%;
  border-radius: 0 0 10px 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  .left {
    width: 60%;
    height: 90%;
    background: var(--text-color);
    border-radius: 0.5rem;
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    h2 {
      color: var(--hero-color);
    }
    .txt {
      width: 100%;
      padding: 10px 0;
      p {
        width: 98%;
        font-size: 17px;
      }
    }
    .btn {
      width: 30%;
      border-radius: 0.5rem;
    }
  }
  .right {
    width: 40%;
    height: 90%;
    background: var(--text-color);
    border-radius: 0.5rem;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 95%;
      height: 95%;
    }
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
    .left, .right{
      width: 100%;
      height: 100%;
      img{
        width: 40%;
      }
    }
    
  }
`;


export default Settings;
