import React from 'react'
import styled from 'styled-components'

const Boost = () => {
  return (
    <BoostContainerWrapper>
        <div className="header">
            <h1>Accelerate Your CashFlow With The <span>Remote-First Local Internet Marketplace</span></h1>
        </div>
        <article>
         <div className="card">
            <div className="text">
                <h2>Flexible Earnings and Incentives</h2>
                <p>Get ready to earn, have fun, enjoy access to paid educational resources and  unleash your potential! Join our team and discover flexible earnings and incentives that will make you say wow!</p>
            </div>
            <div className="btn">
                <span>Join Now</span>
            </div>
         </div>
         <div className="card">
            <div className="text">
                <h2>Big Sales Profit</h2>
                <p>Maximize your earning potential with Public Partners Association! Own your sale profits, unlock flexible earnings and secure lifetime cashflow like never before. Don't wait for success - make it happen.</p>
            </div>
            <div className="btn">
                <span>Join Now</span>
            </div>
         </div>
         <div className="card">
            <div className="text">
                <h2>Community SkillShare Program</h2>
                <p>P.P.A launched the innovative Community SkillShare Program. providing businesses with access to educational resources, expert guidance and collaborative opportunities.</p>
            </div>
            <div className="btn">
                <span>Join Now</span>
            </div>
         </div>
         <div className="card">
            <div className="text">
                <h2>Lifetime Investment Benefits</h2>
                <p>Get ready to earn, have fun and unleash your potential! Join our team and discover flexible earnings and incentives that will make you say wow!</p>
            </div>
            <div className="btn">
                <span>Join Now</span>
            </div>
         </div>
        </article>
    </BoostContainerWrapper>
  )
}

const BoostContainerWrapper = styled.section`
 width: 100%;
 min-height: 100vh;
 background: #e7e6e6;
 padding: 20px 1.2rem;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    h1{
        width: 60%;
        margin: 0 auto;
    }
 }

 article{
    width: 100%;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 1rem;
    padding: 10px;
    
    .card{
        width: 100%;
        height: 100%;
        background: var(--text-color);
        border-radius: .5rem;
        box-shadow: 0 1rem .5rem rgb(0,0,0, 10%);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        padding: 12px;

        p{
            padding: 10px 0;
            width: 90%;
        }

        .btn{
            width: 30%;
            border-radius: .5rem;
            background: none;
            border: 1px solid var(--main-color);
            color: var(--main-color);
        }
    }
 }

 @media screen and (max-width: 768px) {
    padding: 10px 0;
    min-height: 90vh;
    .header{
      width: 100%;
      h1{
        width: 100%;
        line-height: 1.4;
      }
    }
    article{
        grid-template-columns: 1fr 1fr;
        height: max-content;
        .btn{
            width: 30%;
        }
    }
    .card{
        height: 100%;
        padding: 5px;
        p{
            width: 100%;
        }
    }
 }

 @media screen and (max-width: 430px) {
    padding: 10px 0;
    .header{
      width: 100%;
      h1{
        width: 100%;
        line-height: 1.4;
      }
    }
    article{
        grid-template-columns: 1fr;
        height: max-content;
        .btn{
            width: 30%;
        }
    }
    .card{
        height: 100%;
        padding: 5px;
        p{
            width: 100%;
        }
    }
 }
`

export default Boost