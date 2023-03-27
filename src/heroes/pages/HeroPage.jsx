import { useParams } from "react-router-dom";
import { HeroCard } from "../components";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  );
};
