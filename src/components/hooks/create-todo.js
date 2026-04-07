import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoService } from "../services/todos.service";

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create todo"],
    mutationFn: (data) => todoService.create(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}
