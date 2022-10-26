const HomeHeader = () => {
  return (
    <>
      <header className="homeheader">
        <h1 className="homeheader__title">Accueil</h1>
        <input
          type="text"
          className="homeheader__searchbar"
          placeholder="Recherche..."
        />
        {/* FILTER */}
      </header>
    </>
  );
};

export default HomeHeader;
