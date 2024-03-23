import React from "react";
import {
  FaAngleDoubleUp,
  FaDollarSign,
  FaEdit,
  FaEye,
  FaFilter,
  FaHashtag,
  FaMoneyBillWave,
  FaShippingFast,
  FaTrash,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { Md10K, MdAddShoppingCart } from "react-icons/md";
import styled from "styled-components";

const Orders = () => {
  return (
    <OrdersContainerWrapper>
      <OverlayContainer>
        <div className="h">
          <h2 className="tit">Keep Track</h2>
          <div className="btn"  style={{marginRight: 10}}>
            <FaMoneyBillWave />
            <span>Make Payment</span>
          </div>
        </div>
        <TopContainerWrapper>
          <div className="order-stat-card">
            <div className="left">
              <h2>Revenue</h2>
              <div className="rate">
                <h1>$ 2,120</h1>
              </div>
              <div className="per">
                <h4>5% Since last month</h4>
              </div>
            </div>
            <div className="right">
              <p>
                <FaWallet />
              </p>
            </div>
          </div>
          <div className="order-stat-card">
            <div className="left">
              <h2>Total Sales</h2>
              <div className="rate">
                <h1>$ 1,250</h1>
              </div>
              <div className="per">
                <h4>1.2% Since last month</h4>
              </div>
            </div>
            <div className="right">
              <p>
                <MdAddShoppingCart />
              </p>
            </div>
          </div>
          <div className="order-stat-card">
            <div className="left">
              <h2>AdOnx</h2>
              <div className="rate">
                <h1>$ 345</h1>
              </div>
              <div className="per">
                <h4>0.8% Since last month</h4>
              </div>
            </div>
            <div className="right">
              <p>
                <FaAngleDoubleUp />
              </p>
            </div>
          </div>
        </TopContainerWrapper>
        <OrderListContainerWrapper>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Client Name</th>
                <th>Order No.</th>
                <th>Product Cost</th>
                <th>Category</th>
                <th>Payment Status</th>
                <th>Order Track</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>1</td>
              <td>Kwarteng Joseph</td>
              <td><span>#</span> 0089</td>
              <td>Skincare</td>
              <td>SCN - Marketplace</td>
              <td>
               <samp style={{border: "1px solid yellow", color: "yellow", padding: "5px 12px", borderRadius: "5px"}}>Pending</samp>
              </td> 
              <td>
                <samp style={{border: "1px solid green", color: "green", padding: "5px 10px", borderRadius: "5px"}}>Shipped</samp>
              </td>
              <td className="ico-box">
                <FaEye style={{color: "green"}} />
                <FaEdit style={{color: "blue"}} /> 
                <FaTrash style={{color: "red"}} /> 
              </td>
              </tr>
            </tbody>
          </table>
          <YourOrderContainer>
            <div className="meta-data">
              <FaUser />
              <h4>Kwarteng Joseph</h4>
            </div>
            <div className="meta-data">
              <FaHashtag />
              <h4>98076</h4>
            </div>
            <div className="meta-data">
              <FaDollarSign />
              <h4>120</h4>
            </div>
            <div className="meta-data">
              <FaFilter />
              <h4>Accessories & Electronics</h4>
            </div>
            <div className="meta-data">
              <Md10K />
              <h4 style={{color: "gold"}}>Pending</h4>
            </div>
            <div className="meta-data">
              <FaShippingFast />
              <h4 style={{color: "cyan"}}>Delivered</h4>
            </div>
            <div className="meta-data" style={{justifyContent: "space-around"}}>
              <FaEye style={{color: "green"}} />
              <FaEdit style={{color: "blue"}} />
              <FaTrash style={{color: "red"}} />
            </div>
          </YourOrderContainer>
        </OrderListContainerWrapper>
      </OverlayContainer>
    </OrdersContainerWrapper>
      
  );
};

const OrdersContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: var(--hero-color);
`;
const OverlayContainer = styled.article`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 30%);
  padding: 12px;
  .h {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .tit {
      color: var(--text-color);
      padding: 0 12px;
    }
    .btn {
      width: 50%;
      border-radius: 10px;
      span {
        padding-left: 8px;
      }
    }
  }

  @media screen and (max-width: 430px) {
   .h{
    .btn{
      width: 50%;
      gap: 2rem;
    }
   }
  }
`;

const TopContainerWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 8px;

  .order-stat-card {
    width: 100%;
    height: 90%;
    background: rgb(255, 255, 255, 30%);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem var(--main-color-variant);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .left {
      h1 {
        color: var(--sky-blue);
        padding: 6px 0;
      }
      h2 {
        color: var(--text-color);
      }
      h4 {
        color: var(--main-color);
      }
    }
    .right {
      width: 70px;
      height: 70px;
      border-radius: 50px;
      box-shadow: 0 0 10px rgb(0, 0, 0, 5%);
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--text-color);
      text-align: center;
      p {
        font-size: 2rem;
        font-weight: 600;
        color: var(--hero-color);
      }
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    height: 45%;
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    height: 80%;
    gap: 6px;
    .order-stat-card{
      margin: 0 0;
    }
  }
`;

const OrderListContainerWrapper = styled.div`
  width: 98%;
  height: 62%;
  border: 1.5px solid var(--main-color);
  border-radius: 0.5rem;
  margin: 0 auto;
  overflow: scroll;

  table {
    width: 100%;
    border-collapse: collapse;
    thead {
      background: white;
      height: 40px;
      tr{
        th{
          color: var(--hero-color);
        }
      }
    }

   tbody{
    tr{
      background: var(--sky-blue-variant);
      text-align: center;
      td{
        padding: 15px 10px;
        color: var(--text-color);
        font-size: 15px;
        font-weight: 500;
      }
      .ico-box{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
      }
    }
   }
  }
  @media screen and (max-width: 430px) {
    table{
      display: none;
    }
  }
`;

const YourOrderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  @media screen and (max-width: 430px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px;
    .meta-data{
      background: rgb(255, 255, 255, 10%) ;
      box-shadow: 0 0 10px var(--main-color-variant);
      border-radius: .2rem;
      color: var(--sky-blue);
      font-size: 18px;
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      margin: 4px 0;
    }
  }
`

export default Orders;
