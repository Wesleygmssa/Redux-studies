import React from "react";
import { useSelector } from "react-redux";

const Cart: React.FC = () => {
  const state = useSelector((state) => state);
  console.log("Cart.tsx: state", state);
  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Cart;
