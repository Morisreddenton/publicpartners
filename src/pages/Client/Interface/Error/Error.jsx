import React from "react";
import { MdErrorOutline } from "react-icons/md";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>
        <div className="top">
          <div className="err-ico">
            <MdErrorOutline />
          </div>
          <div className="mid">
            <h1>Oops! Something Went Wrong</h1>
            <div className="er-ms">
              <p>Either you've navigated the wrong route : Page Not Found || No internet:- Try Checking the network cables, modem, and router, Reconnecting to Wi-Fi</p>
            </div>
          </div>
        </div>
      </ErrorMessage>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ErrorMessage = styled.article`
  width: 60%;
  height: 70%;
  background: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 1.2rem;

  .top {
    .err-ico {
      width: 130px;
      height: 130px;
      color: red;
      font-size: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }

  .mid{
    h1{
      color: #000;
    }
    p{
      color: var(--para-color);
      font-weight: 600;
      width: 80%;
      margin: 0 auto;
    }
  }

  .last{
    color: red;
  }
`;

export default Error;
