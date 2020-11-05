import { useQuery } from "@apollo/client";
import { GetAllTodos } from '../types/GetAllTodos';
import { GET_ALL_TODOS } from '../queries'
import { Todos, Todo } from '../../models/Todos';

export const useGetAllTodos = () => {
  const { loading, data, error } = useQuery<GetAllTodos>(GET_ALL_TODOS);
  let newData: Todo[] | null = data ? [] : null;
  data?.todos.edges.forEach((edge) => {
    if (edge && edge.node && newData) newData = [edge.node, ...newData];
  });

  return { loading, data: newData, error };
};
