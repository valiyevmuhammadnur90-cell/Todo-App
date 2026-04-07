import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import AddModal from "./modals/Add.modal";
import { useTodosQuery } from "./hooks/get-todos";
import { useDeleteTodo } from "./hooks/delete-todo";
import { Button, Modal } from "antd";
import UpdateModal from "./modals/Update.modal";

function Home() {
  const { t } = useTranslation();
  const { dark } = useContext(ThemeContext);

  const { data, isLoading, error } = useTodosQuery();
  const { mutate: deleteTodo, isPending: deleting } = useDeleteTodo();

  const handleDelete = (id) => {
    Modal.confirm({
      title: `${t("sure")}`,
      content: `${t("notPossible")}`,
      okText: "Ha, o‘chir",
      okType: "danger",
      cancelText: "Bekor qilish",
      onOk: () => {
        deleteTodo(id);
      },
    });
  };

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar />

      <AddModal />

      {isLoading && <p>{t("connecting")}</p>}

      {error && (
        <p style={{ color: "red" }}>
          {t("error")}: {error.message}
        </p>
      )}

      <div className="home">
        {data?.map((todo) => (
          <div key={todo.id} className="task">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>

            <div className="actionFlex">
              <Button
                onClick={() => handleDelete(todo.id)}
                color="danger"
                variant="solid"
                disabled={deleting}
              >
                {t("delete")}
              </Button>

              <UpdateModal todo={todo} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
