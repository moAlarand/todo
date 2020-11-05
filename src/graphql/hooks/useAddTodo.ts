import { useMutation } from "@apollo/client";
import { AddTodoVariables, AddTodo } from '../types/AddTodo';
import { cache } from '../cache';
import { ADD_TODO } from '../mutations';

export function useAddTodo() {
  const [mutate, { data, error }] = useMutation<AddTodo, AddTodoVariables>(
    ADD_TODO,
    {
      update(cache, { data }) {
        cache.modify({
          fields: {
            todos(ex) {
              return {
                ...ex,
                edges: [
                  ...ex.edges,
                  { __typename: 'TodosEdge', node: data?.addTodo.todo },
                ],
              };
            },
          },
        });
      },
    },
  );
  return { mutate, data, error };
}
