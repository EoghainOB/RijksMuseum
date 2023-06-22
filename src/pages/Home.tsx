import Search from "../components/Search";

const Home = () => {
  return (
    <div className="background">
      <div className="main">
        <div className="searchInputHome">
          <div className="title">
            <h1>RijksMaster</h1>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
