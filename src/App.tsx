import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { ContextType } from "./types";
import { AppContext } from "./AppContext";
import "./App.css";

function App() {
  const appContext = useContext(AppContext);
  const { searchTerm, search, century } = appContext as ContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (search === "" && searchTerm === "" && century === 0) {
      navigate("/");
    }
  }, [searchTerm, search, century, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
