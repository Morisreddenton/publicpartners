import React from 'react'
import styled from 'styled-components'
import { SingleProduct } from '../../../../components'

const AdProducts = () => {
  return (
    <ProductsContainerWrapper>
     <ProductHeader>
     <div className="left">
      <h2>All Products</h2>
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
    </ProductsContainerWrapper>
  )
}

const ProductsContainerWrapper = styled.section`
 width: 100%;
 height: 95%;
 background: transparent;
 overflow-y: hidden;
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
  border-radius: 50px;
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
 @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`

export default AdProducts