import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import justImg from "../../../../Assets/Images/welcome-img.png";
import logoImg from "../../../../Assets/Images/logo.png";
import { MdUploadFile } from "react-icons/md";
import {  doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../../firebaseConfig";
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const setupState = {
  firstName: String,
  lastName: String,
  generalEmail: String,
  disputeEmail: String,
  bio: String,
  occupation: String,
  phoneNumber: Number,
  socialContact: String,
  country: String,
  city: String,
  postalCode: String,
  streetAddress: String,
  houseNumber: String,
  digitalAddress: String,
};
const Setup = () => {
  const [state, setState] = useState(setupState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const id = currentUser  !== null ?  currentUser.uid : currentUser?.uid;
  const navigate = useNavigate()
  const {
    firstName,
    lastName,
    generalEmail,
    disputeEmail,
    digitalAddress,
    bio,
    occupation,
    phoneNumber,
    socialContact,
    country,
    city,
    postalCode,
    streetAddress,
    houseNumber,
  } = state;
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      generalEmail &&
      disputeEmail &&
      digitalAddress &&
      bio &&
      occupation &&
      phoneNumber &&
      socialContact &&
      country &&
      city &&
      postalCode &&
      streetAddress &&
      houseNumber
    ) {
      if(id){
        try {
          await updateDoc(doc(db, "users", id), {
            ...state,
            setupTime: serverTimestamp()
          });
          alert('User updated successfully');
        } catch (error) {
          console.log(error)
        }
      }
      navigate('/overview')
    }
  };
  //uploads
  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `IdCards/${file.name + id}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setState((prev) => ({ ...prev, userProfile: downloadUrl }));
            alert('Upload complete can now submit form');
          });
        }
      );
    };

    file && uploadFile();
    //eslint-disable-next-line
}, [file]);
  return (
    <JustAMomentContainer>
      <LeftContainer>
        <TopWrapper>
          <h2>For more information</h2>
          <div className="mail">
            <h4>Email Us</h4>
            <div className="li">
              <p>publicpartners@gmail.com</p>
              <p>support@ppa-inc.com</p>
              <p>dev@ppa-inc.com</p>
            </div>
          </div>
          <div className="tel">
            <h4>Call Us</h4>
            <div className="li">
              <p>+233 533 034 765</p>
              <p>+233 532 764 903</p>
            </div>
          </div>
        </TopWrapper>
        <ImgWrapper>
          <img src={justImg} alt="" />
        </ImgWrapper>
      </LeftContainer>
      <RightContainer>
        <div className="head">
          <div className="left">
            <h2>Please Fill In Your Information</h2>
            <h4>
              A few steps away to become a valued <span>PPA Incorporator</span>
            </h4>
            <p>
              Note:{" "}
              <samp>
                All information provided should be of your own identity details.
              </samp>
            </p>
          </div>
          <div className="right">
            <img src={logoImg} alt="" />
          </div>
        </div>
        <FormContainerWrapper>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={firstName}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={lastName}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="generalEmail"
                placeholder="General Email"
                onChange={handleChange}
                value={generalEmail}
              />
              <input
                type="email"
                name="disputeEmail"
                placeholder="Dispute Email"
                onChange={handleChange}
                value={disputeEmail}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="bio"
                placeholder="Bio"
                onChange={handleChange}
                value={bio}
              />
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                onChange={handleChange}
                value={occupation}
              />
            </div>
            <div className="input-box">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
                value={phoneNumber}
              />
              <input
                type="text"
                name="socialContact"
                placeholder="Social Contact | Any of your media handle"
                onChange={handleChange}
                value={socialContact}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                value={country}
              />
              <input
                type="text"
                name="city"
                placeholder="City / Town"
                onChange={handleChange}
                value={city}
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="postalCode"
                placeholder="Postal Code"
                onChange={handleChange}
                value={postalCode}
              />
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                onChange={handleChange}
                value={streetAddress}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="houseNumber"
                placeholder="House Number"
                onChange={handleChange}
                value={houseNumber}
              />
              <input
                type="text"
                name="digitalAddress"
                placeholder="Digital Address"
                onChange={handleChange}
                value={digitalAddress}
              />
            </div>
            <div className="input-box">
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label htmlFor="file">
                <MdUploadFile /> Proof Utility Bill
              </label>
              <button
                type="submit"
                
                disabled={progress !== null && progress > 100}
                style={{
                  cursor: "pointer",
                  background: "var(--main-color)",
                  color: "var(--text-color)",
                }}
              >Submit Form</button>
            </div>
          </form>
        </FormContainerWrapper>
      </RightContainer>
    </JustAMomentContainer>
  );
};

const JustAMomentContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--white-smoke);
  padding: 10px 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    
  }
  @media screen and (max-width: 430px) {
    height: max-content;
  }
`;

const LeftContainer = styled.article`
  width: 30%;
  height: 100%;
  box-shadow: 0 0 10px var(--main-color-variant);
  padding: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    height: 60%;
  }
  @media screen and (max-width: 430px) {
   flex-direction: column;
   height: 100%;
  }
`;
const TopWrapper = styled.div`
  width: 100%;
  height: 40%;
  background: var(--text-color);
  border-radius: 10px;
  padding: 8px;
  h2 {
    color: var(--main-color);
  }
  h4 {
    color: var(--hero-color);
  }
  p {
    font-size: 16px;
    color: var(--para-color);
  }
  .mail {
    margin-top: 8px;
  }
  @media screen and (max-width: 768px) {
    height: 85%;
    display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  }
  @media screen and (max-width: 430px) {
   height: 100%;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 58%;
  margin-top: 2%;
  background: var(--sky-blue-variant);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 98%;
    height: 98%;
  }
  @media screen and (max-width: 768px) {
    height: 85%;
    img{
      width: 90%;
      height: 90%;
    }
  }
  @media screen and (max-width: 430px) {
  height: 100%;
  }
`;

const RightContainer = styled.article`
  width: 70%;
  height: 100%;
  background: var(--text-color);
  box-shadow: 0 0 10px var(--main-color-variant);
  padding: 10px;
  overflow-y: scroll;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--sky-blue-variant);
    margin-bottom: 10px;
    .left {
      h2 {
        color: var(--hero-color);
        font-weight: 600;
      }
      h4 {
        padding: 8px 0;
        span {
          color: var(--sky-blue);
        }
      }
      p {
        width: 70%;
        line-height: 1.5;
        color: var(--main-color);
        samp {
          color: var(--para-color);
          font-size: 16px;
        }
      }
    }
    .right {
      width: 130px;
      height: 130px;
      border: 1.5px solid var(--para-color);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    .right{
      border: none;
    }
  }
  @media screen and (max-width: 430px) {
   .head{
    flex-direction: column-reverse;
    .left{
      p{
        width: 95%;
      }
    }
    }
    .right{
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
      border: none;
   }
  }
`;

const FormContainerWrapper = styled.div`
  width: 100%;
  height: 75%;
  form {
    background: var(--white-smoke);
    width: 100%;
    height: 100%;
    padding: 10px;
    .input-box {
      width: 100%;
      height: 45px;
      background: var(--white-smoke);
      box-shadow: 0 0 10px rgb(0, 0, 0, 10%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 8px;
      gap: 1rem;
      input,
      label,button {
        width: 100%;
        height: 100%;
        background: var(--text-color);
        border-radius: inherit;
        color: var(--hero-color);
        padding: 0 15px;
        ::placeholder {
          color: var(--hero-color);
        }
      }

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--sky-blue);
        cursor: pointer;
      }
      button{
        background: var(--main-color);
        color: var(--text-color);
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 75%;
  }
`;

export default Setup;
