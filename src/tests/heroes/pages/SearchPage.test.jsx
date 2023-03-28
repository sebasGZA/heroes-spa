import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages/SearchPage";

describe("Tests in <SearchPage />", () => {
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

    const img = screen.getByRole("img")
    expect(img.src).toBe("http://localhost/src/assets/heroes/dc-batman.jpg")
  
     const alert = screen.getByLabelText("alert-danger")
     expect(alert.style.display).toBe("none")   
});
});
