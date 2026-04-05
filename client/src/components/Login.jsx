import { useContext, useState } from "react";
import {
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
  LeftOutlined,
  SunFilled,
  MoonFilled,
} from "@ant-design/icons";
import { ThemeContext } from "./context/ThemeContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const { dark, setDark } = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function toggleDark() {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  }

  return (
    <div className={`loginPage ${dark ? "dark" : ""}`}>
      <form className="loginCard" onSubmit={handleSubmit}>
        <div className="loginAddon">
          <Link to={"/"} className="linkComponent">
            <LeftOutlined id="leftIcon" /> {t("back")}
          </Link>
          <button className="loginToggleDark" onClick={toggleDark}>
            {dark ? <SunFilled /> : <MoonFilled />}
          </button>
        </div>
        <span className="logoSpan">
          <img src="/public/taskflow_icon.png" alt="" />
          <h2 className="logo" onClick={() => navigate("/")}>
            Task<strong>flow</strong>
          </h2>
        </span>
        <h2>{t("login")}</h2>
        <div className="inputSpan">
          <UserOutlined className="inputIcon" />
          <input
            type="text"
            name="name"
            className="searchInput"
            placeholder={t("namePlaceholder")}
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputSpan">
          <MailOutlined className="inputIcon" />
          <input
            type="email"
            name="email"
            className="searchInput"
            placeholder={t("emailPlaceholder")}
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputSpan">
          <LockOutlined className="inputIcon" />
          <input
            type={show ? "text" : "password"}
            name="password"
            className="searchInput"
            placeholder={t("passwordPlaceholder")}
            value={form.password}
            onChange={handleChange}
          />

          <span className="eyeIcon" onClick={() => setShow(!show)}>
            {show ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
        </div>
        <button type="submit" className="loginBtn">
          {t("login")}
        </button>
      </form>
    </div>
  );
}

export default Login;
