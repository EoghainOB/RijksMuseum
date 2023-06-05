import { createContext, useState } from "react";
import { ContextType, IData } from "./types";
import suggestions from "./Artists/ArtistList";

const AppContext = createContext<ContextType | null>(null);

const AppProvider = ({ children }: any) => {
  const [data, setData] = useState<IData[]>([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [page, setPage] = useState(1);
  const [century, setCentury] = useState(0);
  const [search, setSearch] = useState("" as string);
  const [searchTerm, setSearchTerm] = useState("" as string);

  let searchSuggest = suggestions;

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        searchSuggest,
        backgroundImage,
        setBackgroundImage,
        page,
        setPage,
        search,
        setSearch,
        century,
        setCentury,
        setSearchTerm,
        searchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
