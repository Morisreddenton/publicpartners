import React from 'react'
import styled from 'styled-components'

const Docs = () => {
  return (
    <DocsContainerWrapper>
      <div className="doc-card">
        <h2>Legal Information</h2>
        <div className="desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nobis, laudantium dolorem, ullam atque reiciendis harum deleniti eius incidunt sint hic itaque soluta modi cupiditate quis repellendus similique? Alias iste corporis, laudantium cum cupiditate odit officiis beatae rem aut! Excepturi ut, quia architecto reprehenderit voluptate cupiditate vero laboriosam placeat!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nobis, laudantium dolorem, ullam atque reiciendis harum deleniti eius incidunt sint hic itaque soluta modi cupiditate quis repellendus similique? Alias iste corporis, laudantium cum cupiditate odit officiis beatae rem aut! Excepturi ut, quia architecto reprehenderit voluptate cupiditate vero laboriosam placeat!</p>
        </div>
      </div>
      <div className="doc-card">
        <h2>Cookies Policy</h2>
        <div className="desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nobis, laudantium dolorem, ullam atque reiciendis harum deleniti eius incidunt sint hic itaque soluta modi cupiditate quis repellendus similique? Alias iste corporis, laudantium cum cupiditate odit officiis beatae rem aut! Excepturi ut, quia architecto reprehenderit voluptate cupiditate vero laboriosam placeat!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nobis, laudantium dolorem, ullam atque reiciendis harum deleniti eius incidunt sint hic itaque soluta modi cupiditate quis repellendus similique? Alias iste corporis, laudantium cum cupiditate odit officiis beatae rem aut! Excepturi ut, quia architecto reprehenderit voluptate cupiditate vero laboriosam placeat!</p>
        </div>
      </div>
      <div className="doc-card">
        <h2>Ads Policy</h2>
        <div className="desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nobis, laudantium dolorem, ullam atque reiciendis harum deleniti eius incidunt sint hic itaque soluta modi cupiditate quis repellendus similique? Alias iste corporis, laudantium cum cupiditate odit officiis beatae rem aut! Excepturi ut, quia architecto reprehenderit voluptate cupiditate vero laboriosam placeat!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in nobis, laudantium dolorem, ullam atque reiciendis harum deleniti eius incidunt sint hic itaque soluta modi cupiditate quis repellendus similique? Alias iste corporis, laudantium cum cupiditate odit officiis beatae rem aut! Excepturi ut, quia architecto reprehenderit voluptate cupiditate vero laboriosam placeat!</p>
        </div>
      </div>
    </DocsContainerWrapper>
  )
}

const DocsContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 12px;
  
  .doc-card{
    width: 95%;
    height: max-content;
    background: var(--text-color);
    box-shadow: 0 0 10px rgb(0,0,0,5%);
    border-radius:  .5rem;
    padding: 12px;
    margin: 10px 0;
    h2{
      color: var(--hero-color);
    }
    .desc{
      padding-top: 8px;
      p{
        color: var(--para-color);
        padding-top: 10px;
        width: 95%;
      }
    }
  }
`

export default Docs