import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { ContextType } from "../types";
import Detail from "../components/Detail";
import Search from "../components/Search";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { data, backgroundImage, setBackgroundImage } = useContext(
    AppContext
  ) as ContextType;
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const [itemOffset, setItemOffset] = useState<number>(0);
  const [itemsPerPage] = useState<number>(10);

  const pageCount = data.length / itemsPerPage;
  const endOffset = itemOffset + itemsPerPage;

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 11);
    setBackgroundImage(data[randomNumber]?.webImage?.url);
  }, [data, setBackgroundImage]);

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
      <div className="searchInput">
        <div className="titlesmall">
          <h1>
            <a href="/" onClick={handleHomeClick}>
              RijksMaster
            </a>
          </h1>
        </div>
        <Search />
      </div>
      {data.slice(itemOffset, endOffset).map((data, index) => (
        <div key={index}>{data.webImage?.url && <Detail data={data} />}</div>
      ))}
      {pageCount > 1 && (
        <div className="paging">
          <ReactPaginate
            breakLabel=".."
            nextLabel="Next>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={Math.ceil(pageCount)}
            previousLabel="<Prev"
          />
        </div>
      )}
    </div>
  );
};

export default Results;
