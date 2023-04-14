import { useContext } from "react";
import { myContext } from "../context";
import SingleCard from "../SingleCard/SingleCard";
import "./Cart.css";
const Cart = () => {
  const { cart } = useContext(myContext);
  return (
    <div className="cart-container">
      {cart.length !== 0 ? (
        cart.map((e) => {
          return <SingleCard key={e[0].id} {...e[0]} />;
        })
      ) : (
        <h1 style={{ color: "red", marginTop: "4rem" }}>
          Cart is empty!
          <span role="img" aria-label="sad">
            😏
          </span>
        </h1>
      )}
    </div>
  );
};

export default Cart;
