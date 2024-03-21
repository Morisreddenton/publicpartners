import React from 'react'
import styled from 'styled-components'
import revImg from "../../../../Assets/Images/scn.jpeg"
import { FaStar } from "react-icons/fa"
const Reviews = () => {
  return (
    <ReviewsContainerWrapper>
      <FromContainerWrapper>
       <h1>Reviews</h1>
       <div className="from-card">
         <div className="info">
         <div className="img-box">
         <img src={revImg} alt="by" />
         </div>
         <div className="cap">
          <h3>Milton Austin</h3>
          <span>Product Manager</span>
         </div>
         </div>
         <div className="emp"></div>
         <div className="last">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nobis...</p>
         </div>
       </div>
       <div className="from-card">
         <div className="info">
         <div className="img-box">
         <img src={revImg} alt="by" />
         </div>
         <div className="cap">
          <h3>William Anderson</h3>
          <span>Digital Marketer</span>
         </div>
         </div>
         <div className="emp"></div>
         <div className="last">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nobis...</p>
         </div>
       </div>
       
      </FromContainerWrapper>
      <ReviewsDisplayWrapper>
        <h1><span>Insight</span></h1>
        <div className="desc-box">
          <h3>It was a great experience</h3>
          <div className="rate">
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
          </div>
          <div className="det">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis quos doloribus perferendis dolores dignissimos non, praesentium optio eum excepturi iusto omnis recusandae. Eveniet voluptas consectetur odio blanditiis dicta ipsam, reiciendis necessitatibus accusantium accusamus pariatur?</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut quas? Ratione veritatis esse necessitatibus aliquid, accusantium quos voluptas assumenda, quibusdam voluptatum deleniti id. Ipsam.</p>
          </div>
        </div>
      </ReviewsDisplayWrapper>
    </ReviewsContainerWrapper>
  )
}

const ReviewsContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  padding: 12px;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
   flex-direction: column;
  }
`
const FromContainerWrapper = styled.article`
  width: 40%;
  height: 98%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  .from-card{
    width: 98%;
    height: max-content;
    background: var(--text-color);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    padding: 12px;
    .info{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.6rem;
      .img-box{
      width: 70px;
      height: 70px;
      border-radius: 50px;
      img{
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
    .cap{
      h3{
        color: var(--hero-color);
        padding: 5px 0;
      }
      span{
        font-size: 16px;
        color: var(--para-color);
      }
    }
    }
    .emp{
      width: 100%;
      height: 10px;
      border-radius: 10px;
      background: var(--sky-blue);
    }
    .last{
      p{
        color: var(--para-color);
      }
    }
  }
  @media screen and (max-width: 768px) {
   width: 100%;
   display: none;
  }
`
const ReviewsDisplayWrapper = styled.article`
   width: 60%;
  height: 90%;
  background: var(--text-color);
  border-radius: 1pc;
  margin-left: 40%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  transform: translateY(3.5rem);
  .desc-box{
    width: 100%;
    height: 80%;
    padding: 10px;

    .rate{
      color: gold;
      font-size: 18px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;
      padding-top: 10px;
    }

    .det{
      padding: 10px 0;
      p{
        width: 85%;
      }
    }
  }
  @media screen and (max-width: 768px) {
   width: 100%;
  }
`

export default Reviews