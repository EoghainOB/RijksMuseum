import React, { useContext, useEffect } from "react";
import { ContextType } from "../types";
import { AppContext } from "../AppContext";

const Paging = () => {
  const appContext = useContext(AppContext);
  const { data, search, century, setPage, page } = appContext as ContextType;

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line
  }, [search, century]);

  return (
    <>
      {data.length > 9 && (
        <div className="paging">
          <div className="pagingNav">
            {page === 1 ? (
              ""
            ) : (
              <button onClick={handlePrevClick}>&#x003C; Prev</button>
            )}
            <h3>Page {page}</h3>
            {page === data.length ? (
              ""
            ) : (
              <button onClick={handleNextClick}>Next &#x003E;</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Paging;
