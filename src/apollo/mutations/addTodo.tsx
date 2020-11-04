import {gql, useMutation, Reference} from '@apollo/client';
import {AddTodoVariables, AddTodo} from '../types/AddTodo';
import {TODO} from '../fragments';
import {cache} from '../cache';

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      success
      todo {
        ...Todo
      }
      error {
        message
      }
    }
  }
  ${TODO}
`;

export function useAddTodo() {
  const [mutate, {data, error}] = useMutation<AddTodo, AddTodoVariables>(
    ADD_TODO,
    {
      update(cache, {data}) {
        cache.modify({
          fields: {
            todos(ex) {
              console.log('exxxxxx', ex);
              console.log('data', data);
              return {
                ...ex,
                edges: [
                  ...ex.edges,
                  {__typename: 'TodosEdge', node: data?.addTodo.todo},
                ],
              };
            },
          },
        });
      },
    },
  );
  return {mutate, data, error};
}
