import React from 'react'
import { questions } from '../../../../faqs';
import { Banner, CTA, Footer, NavBar } from '../../../../components';
import styled from 'styled-components';
const Faqs = () => {
  return (
    <>
     <NavBar />
     <FaqsHeroContainerWrapper>
       <LeftContainer>
          <h1>PPA FAQs Accordion Your Gateway To <span>Easy App Navigation</span></h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime facilis saepe ea earum obcaecati ex consequuntur nam nesciunt nostrum nobis?</p>
      
          <div className="btn">
            <span>Get Solution</span>
          </div>
       </LeftContainer>
       <RightContainer>
        <AccordionImg>
          
        </AccordionImg>
       </RightContainer>
     </FaqsHeroContainerWrapper>
    <Banner>
    <Banner.Header>Frequently Asked <span>Questions</span></Banner.Header>
    {questions.map((question) => (
      <Banner.Entity key={question.id}>
        <Banner.Question>{question.question}</Banner.Question>
        <Banner.Text>{question.answer}</Banner.Text>
        <Banner.Image>
          <img src={question.imgUrl} alt={question.id}  />
        </Banner.Image>
      </Banner.Entity>
    ))}
    </Banner>
    <CTA />
    <Footer />
    </>

  )
}

const FaqsHeroContainerWrapper  = styled.header`
  width: 100%;
  height: 100vh;
  background: var(--hero-color);
  padding: 30px 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftContainer = styled.article`
 width: 60%;
 height: 100%;
 display: flex;
 align-items: flex-start;
 justify-content: center;
 flex-direction: column;
 color: var(--text-color);

 h1{
  width: 70%;
 }

 p{
   width: 60%;
 }
 .btn{
  width: 25%;
  border-radius: 10px;
  margin: 7px 0;
 }
 @media screen and (max-width: 768px) {
   width: 100%;
   h1{
    width: 70%;
   }
   p{
      width: 70%;
    }

    .btn{
      width: 30%;
    }
  }
  @media screen and (max-width: 430px) {
   width: 100%;
   h1{
    width: 80%;
   }
   p{
      width: 90%;
    }

    .btn{
      width: 40%;
    }
  }
`
const RightContainer = styled.article`
 width: 30%;
 height: 95%;
 background: var(--text-color);
 background-image: linear-gradient(168deg, var(--hero-color), var(--main-color));
 box-shadow: var(--box-shadow);
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const AccordionImg = styled.div`
  width: 95%;
  height: 95%;
  background: rgb(255, 255, 255, 40%);
  box-shadow: var(--box-shadow);
  border-radius: 1pc;
  position: absolute;
  z-index: 1000;
`

export default Faqs