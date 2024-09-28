const initialState = {
  items: [],
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
    default:
      return state;
  }
};

export default cartReducer;
