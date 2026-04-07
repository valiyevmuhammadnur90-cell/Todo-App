import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoService } from "../services/todos.service";

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update todo"],
    mutationFn: ({ id, data }) => todoService.update(id, data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}
