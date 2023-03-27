import { useReducer } from "react";

import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, initialState);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: 123,
        name,
      },
    };
    authDispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login }}>
      {children}
    </AuthContext.Provider>
  );
};
