import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
import { CASHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
  previousTodos: Todo[];
}
const useAddTodo = (onAdd: () => void) => {
  const queryclient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
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
