import "./Product.css";
import { useContext, useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";
import { myContext } from "../context";
const Product = () => {
  // const [product, setProduct] = useState([]);
  const { product, setProduct } = useContext(myContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  // console.log("product", product);

  return (
    <div className="product-container">
      {product.map((element, i) => {
        return <SingleCard key={element.id} {...element} />;
      })}
    </div>
  );
};

export default Product;
