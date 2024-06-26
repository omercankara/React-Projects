import "../../src/assets/style/menu.scss";
import { Outlet } from "react-router";
import { addİtem } from "../redux/ProductReducers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const productItem = useSelector((state) => state.products.todos);
  const [filterTerm, setFilter] = useState("");

  useEffect(() => {
    dispatch(addİtem(productItem));
  }, []);

  const handleInputChange = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);
    if (filterValue !== "") {
      const filteredItems = productItem.filter((todo) =>
        todo.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      dispatch(addİtem(filteredItems));
      navigate(`/ProductList`);
    } else {
      dispatch(addİtem(productItem));
      navigate(`/ProductList`);
    }
  };
  const productListPage = () => {
    navigate(`/ProductList`);
  };

  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate(`/BallPage`);
  };

  return (
    <div className="app-container">
      <div className="app-header" onMouseLeave={() => setIsVisible(false)}>
        <div className="app-logo">
          <h1>CODEZON BAG</h1>
        </div>
        <div className="app-menu">
          <ul>
            <div className="openMenu">
              <li
                onClick={() => productListPage()}
                onMouseEnter={() => setIsVisible(true)}
                className="shopMenu"
              >
                SHOP
              </li>
              <li>CONTACT</li>
              <li>ABOUT</li>
              <li>STOCKIST</li>
            </div>
            {isVisible && (
              <div className="subMenu" onMouseLeave={() => setIsVisible(false)}>
                <div className="app-sub-left">
                  <div className="app-sub-title">
                    <h4>Accessories text</h4>
                  </div>
                  <div className="app-sub-description">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Doloremque saepe in accusamus.
                    </p>
                  </div>
                </div>
                <div className="app-sub-right">
                  <div className="app-categories">
                    <h5>All products</h5>
                    <p>All products in our store are listed here</p>
                  </div>
                  <div className="app-categories">
                    <h5>Appareal</h5>
                    <p>All products in our store are listed here</p>
                  </div>
                  <div className="app-categories">
                    <h5>Accessories</h5>
                    <p>All products in our store are listed here</p>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
        <div className="app-icon">
          <div className="search">
            <input
              type="text"
              value={filterTerm}
              onChange={handleInputChange}
              placeholder="Search..."
            />
            <i className="bx bx-search-alt-2"></i>
          </div>
          <div className="app-ball-icon">
            <p>CART</p>
            <i
              onClick={() => handleProductClick()}
              className="bx bx-shopping-bag"
            ></i>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
