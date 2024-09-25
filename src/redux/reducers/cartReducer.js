const dummyProducts = [
  { id: 1, name: "Stylish Backpack with great battery and led", price: 49.99 },
  {
    id: 2,
    name: "Wireless Headphones black with additional pads",
    price: 89.99,
  },
  { id: 3, name: "Smartwatch", price: 199.99 },
  { id: 4, name: "Portable Charger", price: 29.99 },
  { id: 5, name: "Gaming Mouse", price: 39.99 },
];

const initialState = {
  items: [...dummyProducts],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
