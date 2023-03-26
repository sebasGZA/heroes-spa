import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  console.log("Here we go");
  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}> {hero.superhero}</li>
      ))}
    </ul>
  );
};
