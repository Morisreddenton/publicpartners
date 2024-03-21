import React from 'react'
import styled from 'styled-components'
import scnImg from "../../Assets/Images/scn.jpeg";
const SingleBlog = () => {
  return (
    <SingleBlogWrapper>
     <BlogImgWrapper>
      <img src={scnImg} alt="blog-title" />
     </BlogImgWrapper>
     <BlogAboutWrapper>
      <div className="cat">
        <samp>SCN - Monday 4th March</samp>
        <h4>Strategic assets investment</h4>
        <div className="det">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, laboriosam neque? Amet expedita minima numquam quasi!</p>
        </div>
      </div>
     </BlogAboutWrapper>
    </SingleBlogWrapper>
  )
}

const SingleBlogWrapper = styled.div`
 width: 100%;
 height: max-content;
 background-color: var(--text-color);
 box-shadow: 0 .5rem 1rem rgb(0,0,0, 5%);
 border-radius: 10px;
 padding: 10px;
`

const BlogImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: inherit;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
    }
`
const BlogAboutWrapper = styled.div`
 width: 100%;
 h4{
    padding: 8px 0;
    cursor: pointer;
 }
 samp{
    color: var(--sky-blue);
 }
 .det{
    width: 100%;
    p{
        width: 100%;
        font-size: 15px;
        line-height: 1.5;
    }
 }
`

export default SingleBlog