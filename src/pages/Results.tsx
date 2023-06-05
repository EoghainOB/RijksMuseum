import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { ContextType } from "../types";
import Detail from "../components/Detail";
import Search from "../components/Search";
import Paging from "../components/Paging";

const Results = () => {
  const appContext = useContext(AppContext);
  const { century, searchTerm, data, backgroundImage, setBackgroundImage } =
    appContext as ContextType;

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 11);
    setBackgroundImage(data[randomNumber]?.webImage?.url);
  }, [data, setBackgroundImage]);

  useEffect(() => {
    if (data[0]?.webImage?.url !== undefined)
      document.getElementById("titlesmall")?.scrollIntoView();
  }, [data]);

  return (
    <div
      className="details"
      style={{
        position: "fixed",
        backgroundSize: "100vw",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${backgroundImage})`,
        zIndex: -1,
        overflow: "auto",
      }}
    >
      <div className="titleContainer">
        <div className="titlesmall" id="titlesmall">
          <h1>
            <a href="/" onClick={handleHomeClick}>
              RijksMaster
            </a>
          </h1>
        </div>
      </div>
      <div className="searchInput" id="searchInput">
        <Search />
        {data && searchTerm ? (
          <div className="searchTerm">
            <h3>Showing results for "{searchTerm}"</h3>
          </div>
        ) : (
          <div className="searchTerm">
            <h4>Showing results for "{century}th Century"</h4>
          </div>
        )}
      </div>
      {data.map((result, index) => (
        <div key={index}>{result.hasImage && <Detail data={result} />}</div>
      ))}
      <Paging />
    </div>
  );
};

export default Results;
