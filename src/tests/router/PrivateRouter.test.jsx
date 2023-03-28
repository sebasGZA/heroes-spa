import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../auth/context";
import { PrivateRouter } from "../../router/PrivateRouter";

describe("Test in <PrivateRouter />", () => {
  test("should show children if it is not authenticated", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: "Sebas",
      },
    };

    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRouter>
            <h1>private routes</h1>
          </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText("private routes")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
  });
});
