import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
import { CASHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo>("/todos");
interface AddTodoContext {
  previousTodos: Todo[];
}


const useAddTodo = (onAdd: () => void) => {
  const queryclient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,
    onMutate: (newTodo) => {
      const previousTodos =
        queryclient.getQueryData<Todo[]>(CASHE_KEY_TODOS) || [];
      queryclient.setQueryData<Todo[]>(CASHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);
      onAdd();
      //   if (ref.current) ref.current.value = "";

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // queryclient.invalidateQueries({ queryKey: ["posts"] });
      queryclient.setQueryData<Todo[]>(CASHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryclient.setQueryData<Todo[]>(CASHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
