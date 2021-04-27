import React from "react";
const productListItem = ({ product }) => {
  return (
    <>
      <li key={product.id}>
        <h2>Name:{product.name}</h2>
        <p>Model:{product.model}</p>
        <p>
          Colors:
          <ul>
            {product.colors.map((color) => (
              <li key={color}>
                <span>{color}</span>
              </li>
            ))}
          </ul>
        </p>
        <p>Price:{product.price}</p>
      </li>
    </>
  );
};

export default productListItem;
