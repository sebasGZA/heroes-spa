export const HeroCard = ({ id, superhero, alter_ego, characters }) => {
  const heroImgUrl = `/src/assets/heroes/${id}.jpg`;

  return (
    <div key={id} className="card">
      <div className="row no-gutters" key={id}>
        <div className="col-4">
          <img src={heroImgUrl} className="card-img" alt={superhero} />
        </div>
        <div className="col">
          <div className="card-body">
            <div className="card-title">{superhero}</div>
            <div className="card-text">{alter_ego}</div>
            <p>{characters} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
