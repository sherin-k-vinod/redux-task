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
        products: state.products.map((product) =>
          product.id === payload.id
            ? {
                id: product.id,
                title: payload.title,
                category: payload.category,
                description: payload.description,
                price: payload.price,
                image: payload.image,
              }
            : product
        ),
      };
    case "DELETE_PRODUCT":
      const newProduct = [...state.products];
      const index = state.products.findIndex(
        (product) => product.id === payload
      );
      if (index >= 0) {
        newProduct.splice(index, 1);
      }
      state.products = newProduct;
      return { ...state, products: newProduct };
    case "SELECT_PRODUCT":
      return {
        ...state,
        selected: payload - 1,
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

export const updateProduct = (product) => ({
  type: "UPDATE_PRODUCT",
  payload: product,
});

export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  payload: id,
});
export const selectProduct = (id) => ({
  type: "SELECT_PRODUCT",
  payload: id,
});
