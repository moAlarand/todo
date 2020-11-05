import React from 'react';
import {useAddTodo} from '../graphql/hooks';
import {TodoForm} from '../components/TodoFrom';

export const AddNewTodo = () => {
  const {mutate, error, data} = useAddTodo();
  console.log('data', data);
  console.log('error', error);

  return (
    <TodoForm
      onSumbit={(todo: string) => {
        mutate({variables: {text: todo}});
      }}
    />
  );
};
