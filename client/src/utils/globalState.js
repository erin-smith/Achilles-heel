import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  user: {
    email: "",
    display_name: "",
    avatar: "",
    score: 0
  }
};

const StoreContext = createContext(
  {
  email: "",
  display_name: "",
  avatar: "",
  score: 0
});

const reducer = (state, action) => {
  switch (action.type) {
    case "LogIn":
      return {
        email: action.user.email,
        display_name: action.user.display_name,
        avatar: action.user.avatar,
        score: action.user.score
      }
      case "getUser":
        return {
          user: state.user
        }
    default:
      return state;
  }
}

 export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
console.log(StoreContext);

// console.log(useContext(StoreContext));

export const useStore = () => useContext(StoreContext);
