import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../router/AppRouter";

describe("Tests in <AppRouter />", () => {
  test("should show login when there is no authentication", () => {
    const contextValue = {
      logged: false,
    };

    const { container } = render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();

    expect(screen.findByText("Login")).toBeTruthy();
  });

  test("Should show marvelpage when it is authenticated", () => {
    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: "Sebas",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
