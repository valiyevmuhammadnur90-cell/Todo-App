import { api } from "../api/api";

class TodoService {
  async getAll() {
    const { data: todos } = await api.get("/todos");

    return todos;
  }

  async create(data) {
    const { data: createTodo } = await api.post("/todos", data);

    return createTodo;
  }

  async update(id, data) {
    const { data: updateTodo } = await api.patch(`/todos/${id}`, data);

    return updateTodo;
  }

  async delete(id) {
    const { data: deleteTodo } = await api.delete(`/todos/${id}`);

    return deleteTodo;
  }
}

export const todoService = new TodoService();
