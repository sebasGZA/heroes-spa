import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../auth/context";
import { PublicRouter } from "../../router/PublicRouter";

describe("Test inn <PublicRouter />", () => {
  test("should show children if it is not authenticated", () => {
    const contextValue = {
      logged: false,
    };

    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Public routes</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText("Public routes")).toBeTruthy();
  });

  test("should navigate if it is authenticated", () => {
    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: "Sebas",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRouter>
                  <h1>Public routes</h1>
                </PublicRouter>
              }
            />

            <Route path="/marvel" element={<h1>marvel page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("marvel page")).toBeTruthy();
  });
});
