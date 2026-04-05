import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      welcome: "Xush kelibsiz!",
      inputSearchPlaceholder: "Izlash...",
      login: "Kirish",
      loginIsPending: "Kirilmoqda...",
      back: "Orqaga",
      homeText: "Uy",
      namePlaceholder: "Ism kiriting...",
      emailPlaceholder: "Elektron pochta kiriting...",
      passwordPlaceholder: "Parol kiriting...",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать!",
      inputSearchPlaceholder: "Поиск...",
      login: "Авторизоваться",
      loginIsPending: "Выполняется вход...",
      back: "Назад",
      homeText: "Главная",
      namePlaceholder: "Введите имя...",
      emailPlaceholder: "Введите адрес электронной почты...",
      passwordPlaceholder: "Введите пароль...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
