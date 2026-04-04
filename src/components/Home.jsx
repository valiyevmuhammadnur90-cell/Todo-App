import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar />

      <h1>{t("welcome")}</h1>
    </div>
  );
}

export default Home;
