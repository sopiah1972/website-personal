import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";
import { cartModel } from "../models/cart";
import { modalModel } from "../models/modal";

const initialState = {
  cart: { ...cartModel() },
  modal: { ...modalModel() },
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
