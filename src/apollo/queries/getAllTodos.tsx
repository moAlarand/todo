import {gql, useQuery} from '@apollo/client';
import {GetAllTodos} from '../types/GetAllTodos';
import {TODO} from '../fragments';
import {Todos, Todo} from '../../models/Todos';
export const GET_ALL_TODOS = gql`
  query GetAllTodos($after: String) {
    todos(after: $after) {
      edges {
        node {
          ...Todo
        }
      }
    }
  }
  ${TODO}
`;

export const useGetAllTodos = () => {
  const {loading, data, error} = useQuery<GetAllTodos>(GET_ALL_TODOS);
  let newData: Todo[] | null = data ? [] : null;
  data?.todos.edges.forEach((edge) => {
    if (edge && edge.node && newData) newData = [edge.node, ...newData];
  });

  return {loading, data: newData, error};
};
