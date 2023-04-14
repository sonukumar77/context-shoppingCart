import { useContext } from "react";
import { myContext } from "../context";
import "./SingleCard.css";

const SingleCard = ({
  id,
  description,
  price,
  category,
  image,
  title,
  rating,
  cartItem
}) => {
  const { product, cart, setCart } = useContext(myContext);

  const addProductToCart = (id) => {
    const filterData = product.filter((element) => {
      if (element.id === id) {
        element.cartItem = "cart";
        return element;
      }
    });
    setCart((prev) => {
      return [...prev, filterData];
    });
  };
  const removeProductToCart = (id) => {
    const remainingData = cart.filter((element) => element[0].id !== id);
    setCart(remainingData);
  };
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt="product_image" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>
          Desc :
          {description.length > 30
            ? `${description.substring(0, 30)}...`
            : description}
        </p>
        <p>Category :{category}</p>
        <p>Rating : {rating.rate}</p>
        <p>$ {price}</p>
        <p>Qty : {rating.count}</p>
        {cartItem ? (
          <button onClick={() => removeProductToCart(id)}>Remove Item</button>
        ) : (
          <button onClick={() => addProductToCart(id)}>Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default SingleCard;
