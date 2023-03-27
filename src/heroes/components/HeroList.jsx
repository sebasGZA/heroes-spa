import { useMemo } from "react";
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row g-3">
      {heroes.map((hero) => (
        <div key={hero.id} className="col-3">
          <HeroCard key={hero.id} {...hero} />
        </div>
      ))}
    </div>
  );
};
