import Filters from "./Filters/Filters";

const HomeHeader = () => {
  return (
    <>
      <header className="homeheader">
        <div className="top">
          <h1 className="homeheader__title">Accueil</h1>
          <input
            type="text"
            className="homeheader__searchbar"
            placeholder="Recherche..."
          />
        </div>
        <Filters />
      </header>
    </>
  );
};

export default HomeHeader;
