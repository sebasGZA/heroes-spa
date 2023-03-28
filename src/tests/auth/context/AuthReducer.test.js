import { AuthReducer } from "../../../auth/context/AuthReducer";
import { types } from "../../../auth/types/types";

describe("Tests in AuthReducer", () => {
  const initState = {
    logged: false,
  };

  test("Should return a default state", () => {
    const state = AuthReducer(initState, {});
    expect(state).toEqual(initState);
  });

  test("Should call login auth and set an user and logged in true", () => {
    const action = {
      type: types.login,
      payload: {
        id: 123,
        name: "Sebas",
      },
    };

    const state = AuthReducer(initState, action);

    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test("should call logout and remove user data and set logged in false", () => {
    const state = {
      logged: true,
      user: {
        id: 123,
        name: "Sebas",
      },
    };

    const action = {
      type: types.logout,
    };

    const newState = AuthReducer(state, action);

    expect(newState).toEqual(initState);
  });
});
