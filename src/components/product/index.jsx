import React from "react";
import { useDispatch } from "react-redux";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch({
      type: "cart/add",
      payload: { ...item, amount: 1 },
    });
  };
  return (
    <div className="row product-container">
      {product?.map((item) => (
        <div className="col-4 product-item" onClick={() => addToCart(item)}>
          <p className="name">{item.name}</p>
          <img style={{ width: "100px" }} src={item.image} />
          <div className="price">
            {item.saleOffPrice} VNĐ
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
