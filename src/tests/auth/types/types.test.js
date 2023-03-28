import { types } from "../../../auth/types/types";

describe("Tests in types.js", () => {
  test("should return types", () => {
    expect(types).toEqual({
      login: "[Auth] login",
      logout: "[Auth] logout",
    });
  });
});
