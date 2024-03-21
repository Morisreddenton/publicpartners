import React from 'react'
import styled from 'styled-components'

const SingleProduct = () => {
  return (
    <SingleProductWrapper>
      <div className="top">
        <samp>SCN</samp>
        <h1>SheCommerce <br /> <span> Marketplace</span></h1>
       
      </div>
      <div className="down">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt vero at mollitia eos veritatis.</p>
      </div>
    </SingleProductWrapper>
  )
}

const SingleProductWrapper = styled.div`
 width: 100%;
 height: 95%;
 background: var(--text-color);
 box-shadow: 0 0 10px rgb(0,0,0, 5%);
 border-radius: 10px;
 cursor: pointer;
 font-size: 16px;
 padding: 12px;
 .top{
  samp{
    color: var(--sky-blue);
    font-weight: 600;
    background: var(--hero-color);
    box-shadow: 0 0 10px rgb(0,0,0, 5%);
    border-radius: 50px;
    font-size: 13px;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
   h1{
    font-size: 1.4rem;
    padding: 10px 0;
   }
 }

 .down{
  p{
    color: var(--para-color);
    font-size: 17px;
  }
 }
 @media screen and (max-width: 768px) {
    height: 100%;
    width: 98%;
  }
`

export default SingleProduct