import React, { createContext, useContext, useReducer } from "react";


const initialState = {
    user: [],
    error: null
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      email: "",
      avatar: "",
      display: "",
      score: 0
    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };

export const Context = createContext(initialState);
export default Store;