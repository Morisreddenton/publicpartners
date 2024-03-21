import React from 'react'
import { FaFacebook, FaGlobe, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'
import logoImg from "../../Assets/Images/logo.png";
const Elite = () => {
  return (
    <ElitePartnersContainerWrapper>
      <EliteCardWrapper>
       <div className="brand-logo-wrap">
        <img src={logoImg} alt="brand-logo" />
       </div>
       <div className="brand-abt">
         <h2>Herbal Life</h2>
         <div className="brief">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ipsa cumque, quisquam porro minima?</p>
         </div>
         <div className="ser">
            <h4>Commercial Suite</h4>
            <div className="socials">
              <div className="soc-box">
                <FaFacebook />
              </div>
              <div className="soc-box">
                <FaLinkedin />
              </div>
              <div className="soc-box">
                <FaYoutube />
              </div>
              <div className="soc-box">
                <FaGlobe/>
              </div>
            </div>
         </div>
       </div>

      </EliteCardWrapper>
      <EliteCardWrapper>
       <div className="brand-logo-wrap">
        <img src={logoImg} alt="brand-logo" />
       </div>
       <div className="brand-abt">
         <h2>Herbal Life</h2>
         <div className="brief">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ipsa cumque, quisquam porro minima?</p>
         </div>
         <div className="ser">
            <h4>Commercial Suite</h4>
            <div className="socials">
              <div className="soc-box">
                <FaFacebook />
              </div>
              <div className="soc-box">
                <FaLinkedin />
              </div>
              <div className="soc-box">
                <FaYoutube />
              </div>
              <div className="soc-box">
                <FaGlobe/>
              </div>
            </div>
         </div>
       </div>
      </EliteCardWrapper>
      <EliteCardWrapper>
       <div className="brand-logo-wrap">
        <img src={logoImg} alt="brand-logo" />
       </div>
       <div className="brand-abt">
         <h2>Herbal Life</h2>
         <div className="brief">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ipsa cumque, quisquam porro minima?</p>
         </div>
         <div className="ser">
            <h4>Commercial Suite</h4>
            <div className="socials">
              <div className="soc-box">
                <FaFacebook />
              </div>
              <div className="soc-box">
                <FaLinkedin />
              </div>
              <div className="soc-box">
                <FaYoutube />
              </div>
              <div className="soc-box">
                <FaGlobe/>
              </div>
            </div>
         </div>
       </div>
      </EliteCardWrapper>
      <EliteCardWrapper>
       <div className="brand-logo-wrap">
        <img src={logoImg} alt="brand-logo" />
       </div>
       <div className="brand-abt">
         <h2>Herbal Life</h2>
         <div className="brief">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ipsa cumque, quisquam porro minima?</p>
         </div>
         <div className="ser">
            <h4>Commercial Suite</h4>
            <div className="socials">
              <div className="soc-box">
                <FaFacebook />
              </div>
              <div className="soc-box">
                <FaLinkedin />
              </div>
              <div className="soc-box">
                <FaYoutube />
              </div>
              <div className="soc-box">
                <FaGlobe/>
              </div>
            </div>
         </div>
       </div>
      </EliteCardWrapper>
      <EliteCardWrapper>
       <div className="brand-logo-wrap">
        <img src={logoImg} alt="brand-logo" />
       </div>
       <div className="brand-abt">
         <h2>Herbal Life</h2>
         <div className="brief">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ipsa cumque, quisquam porro minima?</p>
         </div>
         <div className="ser">
            <h4>Commercial Suite</h4>
            <div className="socials">
              <div className="soc-box">
                <FaFacebook />
              </div>
              <div className="soc-box">
                <FaLinkedin />
              </div>
              <div className="soc-box">
                <FaYoutube />
              </div>
              <div className="soc-box">
                <FaGlobe/>
              </div>
            </div>
         </div>
       </div>
      </EliteCardWrapper>
      <EliteCardWrapper>
       <div className="brand-logo-wrap">
        <img src={logoImg} alt="brand-logo" />
       </div>
       <div className="brand-abt">
         <h2>Herbal Life</h2>
         <div className="brief">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae perferendis ipsa cumque, quisquam porro minima?</p>
         </div>
         <div className="ser">
            <h4>Commercial Suite</h4>
            <div className="socials">
              <div className="soc-box">
                <FaFacebook />
              </div>
              <div className="soc-box">
                <FaLinkedin />
              </div>
              <div className="soc-box">
                <FaYoutube />
              </div>
              <div className="soc-box">
                <FaGlobe/>
              </div>
            </div>
         </div>
       </div>
      </EliteCardWrapper>
    </ElitePartnersContainerWrapper>
  )
}

const ElitePartnersContainerWrapper = styled.section`
 width: 100%;
 height: 88vh;
 background: rgba(255, 0, 0, 0.062);
 padding: 20px 1.2rem;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 1rem;
 @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      height: max-content;
    }
    @media screen and (max-width: 430px) {
      grid-template-columns: repeat(1, 1fr);
      height: max-content;
    }
`

const EliteCardWrapper =styled.div`
    width: 100%;
    height: max-content;
    background: var(--text-color);
    box-shadow: 0 0 10px rgb(0,0,0, 10%);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    .brand-logo-wrap{
        width: 90px;
        height: 90px;   
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--text-color);
        border-radius: .5rem;
        box-shadow: var(--box-shadow);
        padding: 5px;
        img{
            width: 100%;
            height: 100%;
            border-radius: inherit;
        }
    }
    .brand-abt{
      margin-top: 10px;
      h2{
        color: var(--main-color);
      }
    }

    .ser{
        margin: 8px 0;

        .socials{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
            padding: 8px 0;
            .soc-box{
                width: 50px;
                height: 50px;
                border-radius: .5rem;
                background: var(--sky-blue);
                box-shadow: var(--box-shadow);
                color: var(--hero-color);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.3rem;
            }
        }
    }
`

export default Elite