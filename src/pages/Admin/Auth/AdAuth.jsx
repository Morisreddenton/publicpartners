import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../../firebaseConfig";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const authState = {
  username: String,
  email: String,
  password: String,
  confirmPassword: String,
};

const AdAuth = () => {
  const [state, setState] = useState(authState);
  const { username, email, password, confirmPassword } = state;
  const [visible, setVisible] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    if (signUp) {
      if (password !== confirmPassword) {
        return alert(`Password does not match!`);
      } else {
        if (username && email && password) {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          await setDoc(doc(db, "admins", user.uid), {
            ...state,
            timestamp: serverTimestamp(),
          });
          await updateProfile(user, { displayName: `${username}` });
        }
      }
    } else {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
      }
    }
    navigate(`/ppa-admin`);
  };
  return (
    <AdminAuthContainerWrapper>
      <FormContainer>
        <div className="head">
          {!signUp ? (
            <h1>
              Welcome <span>Back</span>
            </h1>
          ) : (
            <h1>
              Sign Up <span>New Admin</span>
            </h1>
          )}
        </div>
        <form onSubmit={handleAuthSubmit}>
          {signUp && (
            <div className="input-box">
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
          )}
          <div className="input-box">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </div>
          <div className="input-box flex-box">
            <input
              type={visible ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              style={{ width: "90%", alignItems: "center" }}
            />
            <p
              style={{ padding: "0px 15px" }}
              onClick={() => {
                setVisible(!visible);
              }}
            >
              {visible ? <FaEyeSlash /> : <FaEye />}
            </p>
          </div>
          {signUp && (
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>
          )}
          <div className="input-box">
            <button type="submit">{!signUp ? "Login" : "Register"}</button>
          </div>
          <p
            onClick={() => {
              setSignUp(!signUp);
            }}
          >
            {!signUp ? `Don't have account` : `Already have account`}{" "}
            <span>{!signUp ? `Register for free` : `Login here`}</span>
          </p>
        </form>
      </FormContainer>
    </AdminAuthContainerWrapper>
  );
};

const AdminAuthContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--white-smoke);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const FormContainer = styled.article`
  width: 60%;
  height: 80%;
  background: var(--text-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .head {
    padding: 15px 0;
    h2 {
      color: var(--hero-color);
      font-weight: 600;
    }
    transform: translateY(1.5rem);
    overflow-y: hidden;
  }
  form {
    width: 80%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .input-box {
      width: 70%;
      height: 61px;
      box-shadow: 0 0 20px rgb(0, 0, 0, 5%);
      border-radius: 5px;
      border: 1px solid var(--sky-blue-variant);
      margin: 6px 0;
      input {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        padding: 0 20px;
        font-size: 16px;
        font-weight: 600;
      }
      button {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background: var(--main-color);
        color: var(--text-color);
        font-size: 18px;
        font-weight: 600;
      }
    }
    p {
      padding: 8px 0;
      color: var(--hero-color);
      cursor: pointer;
      span {
        color: var(--main-color);
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    form {
      width: 90%;
      .input-box {
        width: 100%;
        height: 85px;
      }
    }
  }
`;

export default AdAuth;
