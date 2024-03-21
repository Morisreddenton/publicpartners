import React, { useState } from 'react'
import styled from 'styled-components'
import productImg from "../../Assets/Images/products.gif";
import blogsImg from "../../Assets/Images/blogs.gif";
import reviewImg from "../../Assets/Images/reviews.gif";
import quoteImg from "../../Assets/Images/quotes.gif";
import { MdArticle, MdRateReview, MdUpload } from "react-icons/md"
import AddPost from '../AddPost/AddPost';
import { FaQuoteLeft } from 'react-icons/fa';
const Post = () => {
  const [addPost, setAddPost] =  useState(false);
  return (
    <AllPostContainerWrapper>
      {addPost && <AddPost setAddPost={setAddPost} />}
      <PostCardContainer>
          <PostCard>
           <div className="left">
             <div className="img-box">
              <img src={productImg} alt="" />
             </div>
           </div>
           <div className="right">
             <h2>Let's Add Some Products.</h2>
             <div className="cap">
              <p>Adding products to stock made easy for you to create, read, update & delete product from stock</p>
             </div>
             <div className="btn" onClick={() => {setAddPost(!addPost); }}>
              <MdUpload />
              <span>Add Product Here</span>
             </div>
           </div>
          </PostCard>
          <PostCard>
          <div className="left">
             <div className="img-box">
              <img src={blogsImg} alt="" />
             </div>
           </div>
           <div className="right">
             <h2>Any Article For The Community?</h2>
             <div className="cap">
              <p>We've got you covered, keep your clients busy daily on your application <samp>#AddArticleNow</samp></p>
             </div>
             <div className="btn" onClick={() => {setAddPost(!addPost)}}>
              <MdArticle />
              <span>Add Product Here</span>
             </div>
           </div>
          </PostCard>
          <PostCard>
          <div className="left">
             <div className="img-box">
              <img src={reviewImg} alt="" />
             </div>
           </div>
           <div className="right">
             <h2>Let's Rate Client Today.</h2>
             <div className="cap">
              <p>Rating clients on their task keep them going, That's why we've got you covered with ratings.</p>
             </div>
             <div className="btn" onClick={() => {setAddPost(!addPost)}}>
              <MdRateReview />
              <span>Add Product Here</span>
             </div>
           </div>
          </PostCard>
          <PostCard>
          <div className="left">
             <div className="img-box">
              <img src={quoteImg} alt="" />
             </div>
           </div>
           <div className="right" onClick={() => {setAddPost(!addPost)}}>
             <h2>Any Inspiration Quotes?</h2>
             <div className="cap">
              <p>Did you know morning inspiration quote from application makes it fun and user-friendly?</p>
             </div>
             <div className="btn">
              <FaQuoteLeft />
              <span>Inspire Community</span>
             </div>
           </div>
          </PostCard>
      </PostCardContainer>
    </AllPostContainerWrapper>
  )
}

const AllPostContainerWrapper = styled.section`
    width: 100%;
    height: 90vh;
    background: var(--white-smoke);
    padding: 20px 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const PostCardContainer  = styled.article`
    width: 100%;
    height: 98%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      height: max-content;
    }
`

const PostCard = styled.div`
    width: 100%;
    height: 100%;
    background: var(--text-color);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--sky-blue-variant);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

  .left{
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .img-box{
      width: 70%;
      height: 58%;
      display: flex;
    align-items: center;
    justify-content: center;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .right{
    width: 60%;
    height: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    h2{
      font-size: 1.3rem;
      color: var(--hero-color);
    }

    .btn{
      border-radius: 8px;
      gap: 5px;
    }
  }
  @media screen and (max-width: 768px) {
      height: 330px;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      .left{
        transform: translateX(-7rem);
      }
      .right{
        width: 100%;
      }
    }
`

export default Post