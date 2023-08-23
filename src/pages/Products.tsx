import React from "react";
import { PRODUCTS } from "../constants/Products";
import ProductItem from "../components/ProductItem";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="my-10">
      <div className="container mx-auto">
        <h2 className="text-4xl">Our products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
          {PRODUCTS.map((product) => (
            <ProductItem
              name={product.name}
              id={product._id}
              image={product.image}
              price={product.price}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
