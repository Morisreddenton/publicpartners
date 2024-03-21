import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 0;
  width: 100%;
  margin: 0 auto;
  min-height: 80vh;
  @media screen and (max-width: 1024px){
    width: 100%;
    padding: 80px 0;
    overflow: hidden;
  }
`;
export const Entity = styled.div`
  color: rgb(1, 0, 12);
  box-shadow: 0 0 10px rgba(58, 6, 180, 0.137);
  width: 80%;
  min-height: 80px;
  width: 100%;
  margin: 1.1rem 0;
  padding: 20px;
  &:first-of-type {
    margin-top: 1.5em;
  }
  @media screen and (max-width: 768px){
    padding: 5px;
  }
`;
export const Inner = styled.div`
  padding: 15px 40px;
  width: 90%;
  margin: auto;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 768px){
    width: 380px;
    margin: 0 auto;
    padding: 5px 0px;
  }
`;
export const Question = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  justify-content: space-between;
  cursor: pointer;
  color: var(--main-color);
  margin-bottom: 2px;
  display: flex;
  background: #fff;
  padding: 0.75em 1.12em;
  align-items: center;
  width: 100%;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  background: var(--text-color);
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 25px;
    padding: 5px;
  }
`;
export const Header = styled.h1`
padding: 20px 0;
text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    padding: 30px 0;
  }

  color: #070707;
`;
export const Image = styled.div`
 width: 300px;
 height: 220px;
 display: flex;
 align-items: center;
 justify-content: center;
 background: var(--sky-blue-variant);
 box-shadow: 0 0 10px rgb(0,0,0,15%);
 border-radius: 10px;
 margin-left: 1.5rem;
 img{
  width: 80%;
  height: 95%;
 }
`