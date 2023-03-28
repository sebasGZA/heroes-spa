import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRouter } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
