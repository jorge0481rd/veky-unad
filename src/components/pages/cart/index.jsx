import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { formatCurrency } from "../../../utils/formatCurrency";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import QtyControl from "../../compositions/qty-control";
import MyContainer from "../../compositions/my-container";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import productImg from "./product_img.jpg";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((total, item) => {
    const subtotal = item.price * item.qty;
    return total + subtotal;
  }, 0);

  return (
    <MyContainer id="cart">
      {items.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <ShoppingBasketIcon sx={{ fontSize: "10rem", color: "#dedede" }} />
          <Typography variant="h3">Su carrito está vacío</Typography>
          <Typography variant="h5">
            Utilice el botón de más abajo para ver y agregar productos.
          </Typography>
          <Link to="/products">
            <Button variant="contained">Ver catálogo de productos</Button>
          </Link>
        </Box>
      ) : (
        <Box>
          <h2>Carrito de compras</h2>
          <div>
            <table className="cart-table">
              {/* header */}
              <thead>
                <tr className="header-row">
                  <th className="header-cell"></th>
                  <th className="header-cell header-cell-name">Artículo</th>
                  <th className="header-cell">Cantidad</th>
                  <th className="header-cell header-cell-price">Precio</th>
                  <th className="header-cell header-cell-subtotal">Subtotal</th>
                  <th className="header-cell"></th>
                </tr>
              </thead>

              {/* data */}
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="data-row">
                    <td className="data-cell">
                      <img src={productImg} alt="" />
                    </td>
                    <td className="data-cell data-cell-name">{item.name}</td>
                    <td className="data-cell">
                      <QtyControl prodId={item.id} />
                    </td>
                    <td className="data-cell data-cell-price">
                      <div>{formatCurrency(item.price, false)}</div>
                    </td>
                    <td className="data-cell data-cell-subtotal">
                      <div>{formatCurrency(item.price * item.qty, false)}</div>
                    </td>
                    <td className="data-cell data-cell-actions">
                      <button onClick={() => dispatch(removeFromCart(item.id))}>
                        <DeleteIcon
                          sx={{ color: "gray", fontSize: "1.3rem" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* foot */}
              <tfoot>
                <tr className="foot-row">
                  <td className="foot-cell"></td>
                  <td className="foot-cell"></td>
                  <td className="foot-cell"></td>
                  <td className="foot-cell">Precio total:</td>
                  <td className="foot-cell">{formatCurrency(totalPrice)}</td>
                  <td className="foot-cell"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Box>
      )}
    </MyContainer>
  );
};

export default Cart;
