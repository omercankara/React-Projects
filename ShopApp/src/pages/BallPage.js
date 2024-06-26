import React from "react";
import "../assets/style/Ball.scss";
import { useSelector } from "react-redux";

export const BallPage = () => {
  const ballList = useSelector((state) => state.products.ball);
  const ballTotalCount = useSelector((state) => state.products.totalCount);

  return (
    <div className="app-ball-container">
      <div className="app-ball-content">
        <div className="app-ball-title">
          <h1>Your Cart</h1>
        </div>
        <div className="app-ball-table">
          <table>
            <thead>
              <tr>
                <th className="product-image-cell">Product</th>
                <th className="other-cells">Price</th>
                <th className="other-cells">Piecer</th>
              </tr>
            </thead>
            <tbody>
              {ballList.map((item, index) => (
                <tr key={index}>
                  <td className="product-image-cell">
                    <img src={item.image} alt="" />
                  </td>
                  {/* <td className="product-image-cell"><img src={item.image} alt="" /></td> */}
                  <td className="other-cells">{item.price}</td>
                  <td className="other-cells">
                    <input type="number" value={item.count}></input>                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="app-total-ball">
          <div className="result">
            <strong>
              <p>Total</p>
            </strong>
            <p>{ballTotalCount}$</p>
          </div>
        </div>

        <div className="app-ball-form">
          <div className="app-form-content">
            <div className="app-form-title">
              <h1>Checkout</h1>
              <p>Provide billing and shipping details below</p>
            </div>
            <div className="input-group">
              <label>E mail adress</label>
              <input placeholder="E Mail address" type="text" />
            </div>
            <div className="input-group">
              <label>Full Name</label>
              <input placeholder="First and last name" type="text" />
            </div>
            <div className="input-group">
              <label>Country or region</label>
              <input placeholder="Country or region" type="text" />
            </div>
            <div className="input-group">
              <label>Address</label>
              <input placeholder="Address" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
