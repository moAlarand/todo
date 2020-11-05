import React from 'react';
import {Todos} from '../models/Todos';
import {useGetAllTodos} from '../graphql/hooks';
import {AppText} from '../common';
import {TodoList} from '../components/TodoList';

export default function VisibleTodoList() {
  const {loading, data, error} = useGetAllTodos();

  console.log('error', data);

  if (loading) return <AppText>Loading..</AppText>;
  if (error)
    return <AppText>An error occurred {JSON.stringify(error)}</AppText>;
  if (!data) return <AppText>empty todos</AppText>;
  return <TodoList todos={data} />;
}
