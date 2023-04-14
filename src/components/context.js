import { createContext, useState } from "react";

export const myContext = createContext();

const DataProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <myContext.Provider value={{ product, setProduct, cart, setCart }}>
      {children}
    </myContext.Provider>
  );
};

export default DataProvider;
