import { createStore } from "redux";

const initialState = {
  products: [],
  selected: null,
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, payload],
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.product.map((product) =>
          product.id === payload
            ? {
                id: product.id,
                name: payload.name,
                category: payload.category,
                price: payload.price,
                image: payload.image,
              }
            : product
        ),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.product.filter((product) => product.id !== payload),
      };
    case "SELECT_PRODUCT":
      return {
        // selected: (state.selected = payload),
        products: state.product.map((product) =>
          product.id === payload ? { product } : null
        ),
      };
    default:
      return state;
  }
}
// Actions
export const addProduct = (product) => ({
  type: "ADD_PRODUCT",
  payload: product,
});

export const updateProduct = (id) => ({
  type: "UPDATE_PRODUCT",
  payload: id,
});

export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  payload: id,
});
export const selectProduct = (id) => ({
  type: "SELECT_PRODUCT",
  payload: id,
});
