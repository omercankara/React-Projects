import React, { useEffect, useState } from "react";
import "../../src/assets/style/product.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProductList = () => {
  const [appError, setError] = useState(false);
  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate(`/ProductDetails/${productId}`);
  };

  const productList = useSelector((state) => state.products.filteredList);

  useEffect(() => {
    // productList değiştiğinde çalışacak kodlar
    if (productList.length === 0) {
      setError(true); // Eğer productList boşsa appError'u true yap
    } else {
      setError(false); // Eğer productList doluysa appError'u false yap
    }
  }, [productList]);

  return (
    <div className="app-product-content">
      <div className="app-product-item">
        {productList.map((product, index) => (
          <div
            key={index}
            className="app-product"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="product-image">
              <img src={product.image} alt="" />
            </div>
            <div className="app-product-title">
              <h5>{product.name}</h5>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
        {appError && (
          <div className="ErrorElement">
            <div className="app-Message">
              No products were found matching your search criteria.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
