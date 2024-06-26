import { configureStore } from "@reduxjs/toolkit";
import ProductReducers from "./ProductReducers";

export default configureStore({
  reducer: {
    products: ProductReducers
  }
});
