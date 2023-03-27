import { useLocation, useNavigate } from "react-router-dom";

import queryString from "query-string";
import { useForm } from "../../shared/hooks/useForm";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();

  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
    onResetForm();
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">
            There is no result with <b>{q}</b>
          </div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
