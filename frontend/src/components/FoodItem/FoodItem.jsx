import React, { useContext } from "react";
import "./FoodItem.css";
import { assest } from "../../assets/assest";
import { StoreContext } from "../../context/Context";
const FoodItem = ({ id, name, desc, price, image }) => {
  // console.log(id);
  const { cartItems, addToCart, removeToCart, url } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={`${url}/images/${image}`}
          alt=""
          className="food-item-image"
        />
        {!cartItems[id] ? (
          <img
            src={assest.arrow}
            className="add"
            alt=""
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img src={assest.delete1} alt="" onClick={() => removeToCart(id)} />
            <p>{cartItems[id]}</p>
            <img src={assest.add} alt="" onClick={() => addToCart(id)} />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assest.rate} alt="" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
