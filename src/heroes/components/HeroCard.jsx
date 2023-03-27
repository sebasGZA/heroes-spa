import { Link } from "react-router-dom";

const CharactersByHero = ({ characters, alter_ego }) =>
  alter_ego === characters ? <></> : <p>{characters} </p>;

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  characters,
  first_appearance,
}) => {
  const heroImgUrl = `/src/assets/heroes/${id}.jpg`;

  return (
    <div key={id} className="card animate__animated animate__fadeIn">
      <img
        src={heroImgUrl}
        className="card-img-top"
        alt={superhero}
      />

      <div className="card-body">
        <div className="card-title">{superhero}</div>
        <div className="card-text">{alter_ego}</div>
        <CharactersByHero characters={characters} alter_ego={alter_ego} />
        <p className="card-text">
          <small className="text-muted">{first_appearance}</small>
        </p>
        <Link to={`/hero/${id}`}>More details...</Link>
      </div>
    </div>
  );
};
