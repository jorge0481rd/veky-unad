const initialState = {
  items: [
    {
      id: 2,
      name: "Wireless Headphones black with additional pads and multiple connectors. Supports USB, Bluetooth and Wifi",
      price: 89.99,
      qty: 1,
    },
    {
      id: 3,
      name: "Smartwatch",
      price: 199.99,
      qty: 1,
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload,
            qty: 1,
          },
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_QTY":
      const updatedProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      updatedProduct.qty = action.payload.newQty;
      return {
        ...state,
        items: state.items.map((product) =>
          product.id === action.payload.id ? updatedProduct : product
        ),
      };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
    default:
      return state;
  }
};

export default cartReducer;
