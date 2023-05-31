import { createContext, useState } from "react";
import { ContextType, IData } from "./types";
import suggestions from "./Artists/ArtistList";

const AppContext = createContext<ContextType | null>(null);

const AppProvider = ({ children }: any) => {
  const [data, setData] = useState<IData[]>([]);
  const [backgroundImage, setBackgroundImage] = useState("");

  let searchSuggest = suggestions;

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        searchSuggest,
        backgroundImage,
        setBackgroundImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
