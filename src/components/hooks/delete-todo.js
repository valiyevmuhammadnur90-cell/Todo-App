import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoService } from "../services/todos.service";

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete todo"],
    mutationFn: (id) => todoService.delete(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}
