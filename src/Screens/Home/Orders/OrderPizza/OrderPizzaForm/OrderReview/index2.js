import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderPizzaForm from "..";
import OrderReview from ".";

const OrderPizza = () => {
   
  return (
    <>
        <Routes>
          <Route path="/" element={<OrderPizzaForm/>} />
          <Route path="review" element={<OrderReview/>} />
        </Routes>
    </>
  );
};
export default OrderPizza;