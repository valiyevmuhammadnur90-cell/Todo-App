import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useContext } from "react";
import { ThemeContext } from "./components/context/ThemeContext";

function App() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className={`app ${dark ? "dark" : setDark}`}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
