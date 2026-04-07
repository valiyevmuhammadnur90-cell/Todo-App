import {
  ArrowRightOutlined,
  LoginOutlined,
  MoonFilled,
  SearchOutlined,
  SunFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const navigate = useNavigate();
  const { dark, setDark } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  function toggleDark() {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  }

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="navbar">
        <span className="logoSpan">
          <img src="/public/taskflow_icon.png" alt="" />
          <h2 className="logo" onClick={() => window.location.reload()}>
            Task<strong>flow</strong>
          </h2>
        </span>

        <span className="inputSpan">
          <SearchOutlined />
          <input
            type="text"
            className="searchInput"
            placeholder={t("inputSearchPlaceholder")}
          />
          <button>
            <ArrowRightOutlined />
          </button>
        </span>

        <ul>
          <button onClick={() => navigate("/kirish")}>
            {<LoginOutlined />}
          </button>
          <button onClick={toggleDark}>
            {dark ? <SunFilled /> : <MoonFilled />}
          </button>
          <select onChange={changeLanguage} value={i18n.language}>
            <option value="uz">Uz</option>
            <option value="ru">Ру</option>
          </select>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
