import React, { useContext, useState } from "react";
import styled from "styled-components";
import logoImg from "../../../Assets/Images/logo.png";
import { FaEye, FaEyeSlash, FaGooglePlusSquare } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { auth, db } from "../../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AuthContext } from "../../../context/AuthContext";

import coverImg from "../../../Assets/Images/cover-bg.jpg";

const initialState = {
  username: String,
  email: String,
  password: String,
};

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const { username, email, password } = state;
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const id = currentUser === null ? currentUser?.uid : currentUser.uid;

  const provider = new GoogleAuthProvider();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUp) {
      if (email && password && username) {
        const {user} = createUserWithEmailAndPassword(auth, email, password).then((response) => {
          setDoc(doc(db, "users", user.uid), {
            ...state,
            timestamp: serverTimestamp(),
          });
          updateProfile(user, { displayName: `${username}` });
          setLoading(true);
          console.log(response.user)
        }).catch(() => {

        })
      }
    }
    setTimeout(() => {
      navigate(`/just-a-moment/${id}`);
    }, 5000);
  };

  const handleLoginSubmit = async (e)  => {
    e.preventDefault();
    if(!signUp){
      if(email && password){
        const {user} =  signInWithEmailAndPassword(auth, email, password).then((response) => {
          console.log(user)
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
    setLoading(true)
    setTimeout(() => {
      navigate(`/overview`)
    }, 5000);
  }

  const handleSignInWith = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((response) => {
      setDoc(doc(db, "users", response.user.uid),{
        email: response.user.email,
        username: response.user.displayName,
        userProfile: response.user.photoURL,
        userId: response.user.uid,
        timestamp: serverTimestamp()
      })
      navigate(`/just-a-moment/${id}`);
    }).catch((err) => {
      alert(err.message);
    })
  }


  //app password
  //rgka pxlj glck kysr

  return (
    <AuthContainerWrapper className="flex-box">
      <AuthFormWrapper className="flex-box">
        <FormContainerWrapper className="flex-box-col">
          <HeaderContainerWrapper>
            <div className="logo-box">
              <img src={logoImg} alt="our-logo" />
            </div>
          </HeaderContainerWrapper>
          {signUp && <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box flex-box">
              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={handleChange}
                style={{ width: "90%", alignItems: "center" }}
              />
              <p
                onClick={() => {
                  setVisible(!visible);
                }}
                style={{ padding: "0px 15px" }}
              >
                {" "}
                {visible ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
            <span className="forgot">Forgot Password?</span>
            <div className="input-box">
              <button type="submit">
                {" "}
                {loading && <CgSpinner className="cg" />}{" "}
                {signUp ? "SignUp" : "SignIn"}
              </button>
            </div>
            <div className="sign-with">
              <p>
                <samp>Or SignIn With</samp>
              </p>
            </div>
            <div className="input-box flex-box with" onClick={handleSignInWith}>
              <FaGooglePlusSquare />
              <span>Google</span>
            </div>
            <div
              className="switch"
              onClick={() => {
                setSignUp(!signUp);
              }}
            >
              <p>
                {!signUp ? `Don't have an account` : `Already have an account`}{" "}
                <span>{!signUp ? `Register for free` : `Login here`}</span>
              </p>
            </div>
          </form>}
         {!signUp && <form onSubmit={handleLoginSubmit}>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box flex-box">
              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={handleChange}
                style={{ width: "90%", alignItems: "center" }}
              />
              <p
                onClick={() => {
                  setVisible(!visible);
                }}
                style={{ padding: "0px 15px" }}
              >
                {" "}
                {visible ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
            <span className="forgot">Forgot Password?</span>
            <div className="input-box">
              <button type="submit">
                {" "}
                {loading && <CgSpinner className="cg" />}{" "}
                {signUp ? "SignUp" : "SignIn"}
              </button>
            </div>
            <div
              className="switch"
              onClick={() => {
                setSignUp(!signUp);
              }}
            >
              <p>
                {!signUp ? `Don't have an account` : `Already have an account`}{" "}
                <span>{!signUp ? `Register for free` : `Login here`}</span>
              </p>
            </div>
          </form>}
        </FormContainerWrapper>
        <SideImgContainerWrapper>
          <iframe
            src="https://lottie.host/embed/36a4143f-d56a-4a4d-ae72-122c39f2a6b4/QAb42uzivV.json"
            title="auth"
          ></iframe>
        </SideImgContainerWrapper>
      </AuthFormWrapper>
    </AuthContainerWrapper>
  );
};

const AuthContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(var(--main-color), var(--sky-blue-variant)),url(${coverImg});
  background-size: cover;
  background-position: center;
`;

const AuthFormWrapper = styled.article`
  width: 95%;
  height: 95vh;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const HeaderContainerWrapper = styled.div`
  width: 100%;
  background-color: white;
  overflow-y: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 12px;
  .logo-box {
    width: 120px;
    height: 120px;
    border-radius: 50px;
    overflow-y: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  @media screen and (max-width: 768px) {
    .logo-box {
      width: 150px;
      height: 145px;
    }
  }
`;

const FormContainerWrapper = styled.div`
  width: 50%;
  height: 100%;
  background: var(--text-color);

  form {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translateY(-2rem);
    .forgot {
      padding: 12px 0;
      text-align: right;
      width: 100%;
      margin-right: 8rem;
      color: blue;
      cursor: pointer;
      overflow-y: hidden;
      &:hover {
        text-decoration: underline;
      }
    }

    .switch {
      padding-top: 20px;
      overflow: hidden;

      p {
        font-size: 16px;
        span {
          color: blue;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .input-box {
      width: 80%;
      height: 60px;
      background: var(--text-color);
      box-shadow: 0 30px 40px rgb(0, 0, 0, 10%);
      border-radius: 0.5rem;
      margin-top: 10px;
      cursor: pointer;


      input,
      button {
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        padding: 0 15px;
      }
      button {
        background: var(--main-color);
        color: var(--text-color);
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        .cg {
          color: #fefffe;
          font-size: 20px;
          animation: Spin linear infinite 1s;

          @keyframes Spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
      }
    }

    .with {
      background-color: red;
      color: var(--text-color);
      font-size: 18px;
      font-weight: 600;
      align-items: center;
      justify-content: center;
    }

    .sign-with {
      p {
        font-size: 15px;
        color: var(--hero-color);
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SideImgContainerWrapper = styled(FormContainerWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--text-color);
  iframe {
    width: 60%;
    height: 60%;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Auth;
