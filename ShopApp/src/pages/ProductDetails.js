import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { addBall } from "../redux/ProductReducers"
import 'react-toastify/dist/ReactToastify.css';
import '../../src/assets/style/details.scss'
const image = require("../assets/bag1.jpg")





export const ProductDetails = () => {
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.products.todos);
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // ID'ye göre ürünü filtrele
    let filteredItem = productItem.find(item => item.id == id);
    setItem(filteredItem); // Filtrelenmiş ürünü state'e ayarla
  }, [id, productItem]); // id veya productItem değiştiğinde useEffect yeniden çalışacak


  const notify = () => {
    toast.success("Başarılı")
    dispatch(addBall(item))
  }

  return (
    <div className="app-details-container">
      <ToastContainer />

      <div className="app-details-content">
        <div className="app-details-image">
          <img src={item ? item.image : ""} alt="" />
        </div>
        <div className="app-info-content">
          <div className="app-info-title">
            <h1>{item ? item.name : ""}</h1> {/* Ürün başlığı */}
            <p>{item ? item.price : ""}$</p> {/* Ürün fiyatı */}
            <p>{item ? item.description : ""}</p> {/* Ürün fiyatı */}
            
          </div>
          <div className="app-info-button">
            <button onClick={notify}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>

  )
}

