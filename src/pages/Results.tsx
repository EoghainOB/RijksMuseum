import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { ContextType } from "../types";
import Detail from "../components/Detail";
import Search from "../components/Search";
import Paging from "../components/Paging";

const Results = () => {
  const appContext = useContext(AppContext);
  const { century, searchTerm, data } = appContext as ContextType;

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

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
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)))`,
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
      {data
        //@ts-ignore
        .sort((a, b) => a.index - b.index)
        .map((result, index) => {
          if (result.hasImage) {
            return (
              <div key={index}>
                <Detail data={result} />
              </div>
            );
          } else {
            return null;
          }
        })}
      <Paging />
    </div>
  );
};

export default Results;
