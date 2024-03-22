import React, { useState } from 'react'
import styled from 'styled-components'
import { SingleProduct } from '../../../../components'
import { MdArrowBack, MdGridView } from 'react-icons/md'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import comImg from "../../../../Assets/Images/com-banner.svg"
const Products = () => {
  const [makeOrder, setMakeOrder] = useState(false);
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
  }
  return (
    <ProductsContainerWrapper>
     <ProductHeader>
     <div className="left">
      <h2>Products</h2>
     </div>
     <div className="btn" onClick={() => {setMakeOrder(true)}}>
        <MdGridView/>
       <span>Request Product</span>
     </div>
     </ProductHeader>
     <ProductsListContainerWrapper>
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
     </ProductsListContainerWrapper>
     {makeOrder && <RequestProductWrapper>
       <article>
        <div className="greetings">
          <h2>Amazing! Is nice to see you make order today, Have a good sales ..</h2>
          <p><FaQuoteLeft  className='ico'/> The quieter you become the better you hear.  <span>Quoted:- <samp>quotesity</samp></span><FaQuoteRight className='ico' /></p>
        </div>
        <div className="img-box">
          <img src={comImg} alt="" />
        </div>
        <div className="btn" onClick={() => {setMakeOrder(false);}}>
          <MdArrowBack />
          <span>Back To Shop</span>
        </div>
       </article>
       <article className='right'>
        <div className="header">
          <h2>Order Request Information</h2>
        </div>
         <form onSubmit={handleOrderSubmit}>
           <div className="input-container">
            <input type="username" name="username" placeholder='Username' />
            <input type="email" name="email" placeholder='Email Address' />
           </div>
           <div className="input-container">
            <input type="username" name="username" placeholder='Username' />
            <input type="email" name="email" placeholder='Email Address' />
           </div>
           <div className="input-container">
            <input type="username" name="username" placeholder='Username' />
            <input type="email" name="email" placeholder='Email Address' />
           </div>
           <div className="input-container">
            <input type="username" name="username" placeholder='Username' />
            <input type="email" name="email" placeholder='Email Address' />
           </div>
           <div className="input-container">
            <input type="username" name="username" placeholder='Username' />
            <input type="email" name="email" placeholder='Email Address' />
           </div>
           <div className="input-container">
            <input type="username" name="username" placeholder='Username' />
            <input type="email" name="email" placeholder='Email Address' />
           </div>
           <div className="input-container">
            <button type='submit'>Proceed To Checkout</button>
           </div>
         </form>
       </article>
     </RequestProductWrapper>}
    </ProductsContainerWrapper>
  )
}

const ProductsContainerWrapper = styled.section`
 width: 100%;
 height: 100%;
 background: transparent;
 overflow-y: hidden;
 position: relative;
 padding: 12px;
 @media screen and (max-width: 768px) {
    height: max-content;
  }
`

const ProductHeader = styled.div`
 width: 100%;
 height: 70px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 1rem;

 .btn{
  border-radius: 10px;
  width: 16%;
  gap: 1rem;
 }
`

const ProductsListContainerWrapper = styled.article`
 width: 100%;
 height: 90%;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 place-items: center;
 gap: 1rem;
 @media screen and (max-width: 768px) {
   grid-template-columns: repeat(2, 1fr);
 }
 @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`

const RequestProductWrapper = styled.section`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 background: var(--text-color);
 width: 100%;
 z-index: 1000;
 display: grid;
 grid-template-columns: 30% 69%;
 gap: 1%;

 article{
  width: 100%;
  height: 100%;
  padding: 10px;

  .greetings{
    background: var(--hero-color);
    box-shadow: 0 1rem .5rem rgb(0,0,0, 20%);
    padding: 12px;
    border-radius: 1pc;
    h2{
      color: cyan;
    }
    p{
      padding: 7px 0;
      font-size: 16px;
      font-weight: 600;
      color: #f1f1f1f1;
    }
  }

  .ico{
    font-size: 10px;
  }

  .img-box{
    width: 100%;
    height: 60%;
    margin: 4% auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgb(0,0,0, 10%);
    border-radius: 10px;
  
    img{
      width: 90%;
      height: 100%;
    }
  }
  .btn{
    width: 100%;
    margin: 0 auto;
    height: 60px;
    border-radius: 10px;
    transform: translateY(.6rem);
    gap: 1rem;
  }
 }
 .right{
  background: var(--white-smoke);
  padding: 12px;
  .header{
    width: 60%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 15px;
    h2{
      color: var(--hero-color);
    }
  }
  form{
    width: 100%;
    height: 90%;
    padding: 10px 1.2rem;
    margin-top: 1rem;
    .input-container{
      width: 95%;
      height: 55px;
      box-shadow: 0 0 10px var(--sky-blue-variant);
      background: var(--white-smoke);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 16px;
      input{
        width: 100%;
        height: 100%;
        padding: 10px 15px;
        font-size: 16px;
        font-weight: 400;
        background: var(--text-color);
        border-radius: .5rem;
        color: var(--hero-color);
      }
      button{
        width: 100%;
        height: 100%;
        background: var(--main-color);
        border-radius: .5rem;
        box-shadow: 0 1rem .5rem rgb(0,0,0, 10%);
        color: var(--text-color);
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        &:hover{
          filter: contrast(0.8);
          box-shadow: none;
        }
      }
    }
  }
 }
 @media screen and (max-width: 430px) {
  grid-template-columns: 1fr;
  min-height: max-content;
  .header{
    height: max-content;
    width: 100%;
  }
  article{
    height: max-content;
  }
  .right{
    .input-container{
      flex-direction: column;
      height: max-content;
      input{
        width: 100%;
        height: 60px;
      }
    }
  }
 }
`

export default Products