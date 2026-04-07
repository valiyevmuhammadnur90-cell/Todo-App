import { Descriptions } from "antd";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      inputSearchPlaceholder: "Izlash...",
      login: "Kirish",
      loginIsPending: "Kirilmoqda...",
      back: "Orqaga",
      homeText: "Uy",
      namePlaceholder: "Ism kiriting...",
      emailPlaceholder: "Elektron pochta kiriting...",
      passwordPlaceholder: "Parol kiriting...",
      error: "Xato",
      sure: "Rostdan ham o‘chirmoqchimisiz?",
      notPossible: "Bu amalni qaytarib bo‘lmaydi!",
      delete: "O'chirish",
      edit: "Tahrirlash",
      connecting: "Ulanmoqda...",
      title: "Sarlavha",
      description: "Izoh",
    },
  },
  ru: {
    translation: {
      inputSearchPlaceholder: "Поиск...",
      login: "Авторизоваться",
      loginIsPending: "Выполняется вход...",
      back: "Назад",
      homeText: "Главная",
      namePlaceholder: "Введите имя...",
      emailPlaceholder: "Введите адрес электронной почты...",
      passwordPlaceholder: "Введите пароль...",
      error: "Ошибка",
      sure: "Вы уверены, что хотите удалить это?",
      notPossible: "Это действие необратимо!",
      delete: "Удалить",
      edit: "Редактировать",
      connecting: "Подключение...",
      title: "Заголовок",
      description: "Описание",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language"),
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
