import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { formatPrice } from "../../../utils/formatPrice";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import QtyControl from "../../compositions/qty-control";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {items.length === 0 ? (
        <p>Su carrito está vacío</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr className="thead">
                <th></th>
                <th>Artículo</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      <DeleteIcon sx={{ color: "red", fontSize: "0.9rem" }} />
                    </button>
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <QtyControl />
                  </td>
                  <td>{formatPrice(item.price, false)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="total-row">
                <td
                  colSpan="2"
                  style={{ textAlign: "right", fontWeight: "bold" }}
                >
                  Precio total:
                </td>
                <td>{formatPrice(totalPrice)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
