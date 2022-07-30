import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from "antd";
import {currency} from "../../helper.js";
import cartSlice from "./cartSlice.js";
const Cart = () => {
  const {cart} = useSelector(store => store)
  const dispatch = useDispatch()

  const increase = (id) => {
    dispatch(cartSlice.actions.increase(id))
  }
  const decrease = (id) => {
    dispatch(cartSlice.actions.decrease(id))
  }
  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <table className="all-cart">
        <tbody>
          {cart.cart?.map((item) => (
            <tr className="cart-item">
              <td >
                <p className="name">{item.name}</p>
                <img style={{ width: "30%" }} src={item.image} alt="" />
              </td>
              <td>
                <p className="sl">Số lượng</p>
                <div className="quantity">
                  <button onClick={() => decrease(item.id)}>
                    -
                  </button>
                  <input disabled type="text" value={item.amount}/>
                  <button onClick={() => increase(item.id)}>
                    +
                  </button>
                </div>
              </td>
              <td width={400}>
                <p className="price-cart">
                  {currency(item.amount * item.saleOffPrice)}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className="Tongia">
        <p>Tổng giá</p>
        <p className="tt">{currency(cart.total)}</p>
      </div>
    </div>
  );
};

export default Cart;
