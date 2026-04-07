import { useQuery } from "@tanstack/react-query";
import { todoService } from "../services/todos.service";

export function useTodosQuery() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: todoService.getAll,
  });
}
