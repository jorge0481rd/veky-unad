import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { formatPrice } from "../../../utils/formatPrice";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import QtyControl from "../../compositions/qty-control";
import MyContainer from "../../compositions/my-container";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

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
                      <QtyControl prodId={item.id} />
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
        </Box>
      )}
    </MyContainer>
  );
};

export default Cart;
