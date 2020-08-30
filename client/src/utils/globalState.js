import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  user: {
    email: "",
    display_name: "",
    avatar: "",
    score: 0
  },
  currentWorld: {
    name: ""
  },
  currentLevel: {
    id: ""
  }
};

const StoreContext = createContext();
const {Provider} = StoreContext

const reducer = (state, action) => {
  switch (action.type) {
    case "SetUser":
      return {...state, user: action.user};
    case "SetWorld":
      return { ...state, currentWorld: { name: action.worldName} };
    case "SetLevel":
      return { ...state, currentLevel: action.levelId };
    default:
      console.log("default dispatch action detected");
      return state;
  }
}

export function StoreProvider ({value = {} , ...props}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={[state, dispatch]} {...props} />
}

export const useStore = () => useContext(StoreContext);
