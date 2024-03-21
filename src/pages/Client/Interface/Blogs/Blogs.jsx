import React, { useState } from "react";
import styled from "styled-components";
import { Footer, NavBar, SingleBlog } from "../../../../components";
import { MdArticle, MdMenu } from "react-icons/md";

const Blogs = () => {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <>
      <NavBar />
      <BlogsContainerWrapper>
        <BlogsAreaWrapper>
          <BlogsHeaderWrapper className="flex-box">
            <div className="left">
              <h2>Blogs</h2>
            </div>
           <div className="right" onClick={() => {setIsMobile(!isMobile)}}>
             {isMobile ? <MdArticle /> : <MdMenu />}
            </div>

          </BlogsHeaderWrapper>
          <BlogsArticleContainer>
            <BlogsAsideWrapper className={!isMobile ? "slideIn" : ""}>
              <SearchWrapper>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search ..."
                />
                e
              </SearchWrapper>
              <TopPostWrapper>
                <div className="head">
                  <h2>Top Posts</h2>
                </div>
                <TopPostCard>
                  <div
                    className="abt-post"
                    onClick={() => {
                      setIsMobile(true);
                    }}
                  >
                    <h4>Strategic assets investment</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vitae fugiat nobis saepe?
                    </p>
                    <samp>SCN - MARKET</samp>
                  </div>
                </TopPostCard>
                <TopPostCard>
                  <div
                    className="abt-post"
                    onClick={() => {
                      setIsMobile(true);
                    }}
                  >
                    <h4>Strategic assets investment</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vitae fugiat nobis saepe?
                    </p>
                    <samp>SCN - MARKET</samp>
                  </div>
                </TopPostCard>
                <TopPostCard>
                  <div
                    className="abt-post"
                    onClick={() => {
                      setIsMobile(true);
                    }}
                  >
                    <h4>Strategic assets investment</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vitae fugiat nobis saepe?
                    </p>
                    <samp>SCN - MARKET</samp>
                  </div>
                </TopPostCard>
              </TopPostWrapper>
            </BlogsAsideWrapper>
            <BlogsDisplayContainer>
              <div className="head">
                <h3>All Post</h3>
              </div>
              <SingleBlogContainer>
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
              </SingleBlogContainer>
            </BlogsDisplayContainer>
          </BlogsArticleContainer>
        </BlogsAreaWrapper>
      </BlogsContainerWrapper>
      <Footer />
    </>
  );
};

const BlogsContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--white-smoke);
`;

const BlogsAreaWrapper = styled.article`
  width: 100%;
  height: 100vh;
  background: transparent;
  padding: 30px 1.2rem;
  overflow-y: hidden;
  @media screen and (max-width: 430px) {
    padding: 10px 1rem;
  }
`;
const BlogsHeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  background: var(--text-color);
  box-shadow: 0 0 10px rgb(0, 0, 0, 5%);
  border-radius: 0.5rem;
  justify-content: space-between;
  padding: 12px;
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: var(--hero-color);
    border-radius: 5px;
    color: var(--sky-blue);
  }
`;
const BlogsArticleContainer = styled.article`
  width: 100%;
  height: 80vh;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    height: 100vh;
    .slideIn {
      left: 0;
    }
  }
`;
const BlogsAsideWrapper = styled.aside`
  width: 30%;
  height: 100%;
  background: var(--white-smoke);
  padding: 12px;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 5rem;
    width: 30rem;
    height: 98%;
    left: -30rem;
  }
  @media screen and (max-width: 430px) {
    width: 80%;
    height: 95%;
    position: absolute;
    top: 5rem;
    left: -80%;
  }
`;

const BlogsDisplayContainer = styled.article`
  width: 69%;
  height: 100%;
  background: transparent;
  padding: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const SingleBlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  height: 80%;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    height: max-content;
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 12%;
  background: var(--text-color);
  border-radius: 50px;
  input {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: inherit;
    padding: 0 30px;
    font-size: 20px;
  }
  @media screen and (max-width: 430px) {
    height: 10%;
  }
`;
const TopPostWrapper = styled.div`
  width: 95%;
  height: calc(100% - 13%);
  background: var(--text-color);
  border-radius: 10px;
  margin: 3% 0 0 3%;
  padding: 10px;
`;

const TopPostCard = styled.div`
  width: 100%;
  height: max-content;
  background: var(--text-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 5px;
  .head {
    h2 {
      font-size: 15px;
    }
  }
  .abt-post {
    h2 {
      color: var(--hero-color);
    }
    p {
      width: 100%;
      color: var(--para-color);
      font-size: 15.5px;
    }
    samp {
      float: right;
      padding: 5px 10px;
      font-size: 600;
      color: var(--sky-blue);
    }
  }
`;

export default Blogs;
