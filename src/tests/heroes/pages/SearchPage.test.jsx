import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Tests in <SearchPage />", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should show making match with snapshow", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should show batman and input with queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const inputSearch = screen.getByRole("textbox");
    expect(inputSearch.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toBe("http://localhost/src/assets/heroes/dc-batman.jpg");

    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("none");
  });

  test("should show an error if error does not exist", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=safa"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("block");
  });

  test("should call the navigate to new screen", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const inputSearch = screen.getByRole("textbox");
    fireEvent.change(inputSearch, {
      target: { name: "searchText", value: "safa" },
    });

    const buttonSearch = screen.getByRole("button");
    fireEvent.click(buttonSearch);

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=safa");
  });
});
