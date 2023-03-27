import { types } from "../types/types";

const initState = {
  logged: false,
};

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
