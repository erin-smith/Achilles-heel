import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  user: {
    email: "",
    display_name: "",
    avatar: "",
    score: 0
  }
};

const StoreContext = createContext();
const {Provider} = StoreContext

const reducer = (state, action) => {
  console.log("am i in reducer");
  switch (action.type) {
    case "LogIn":
      return {
        email: action.user.email,
        display_name: action.user.display_name,
        avatar: action.user.avatar,
        score: action.user.score
      }
      case "getUser":
        console.log("am i getting user");
        console.log("what's state.user", state.user);
        return {
          user: state.user
        }
    default:
      return state;
  }
}

//  export const Store = ({ children }) => {
  

//   return (
//     <StoreContext.Provider value={{ state, dispatch }}>
//       {children}
//     </StoreContext.Provider>
//   )
// }

export function StoreProvider ({value , ...props}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("in storeprovider", {state});
  console.log("in storeprovider", {dispatch})
  return <Provider value={[state, dispatch]} {...props} />
}
console.log({StoreContext});

export const useStore = () => useContext(StoreContext);
