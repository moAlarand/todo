import React from 'react';
import {useAddTodo} from '../apollo/mutations/addTodo';
import {TodoForm} from '../components/TodoFrom';

export const CeateTodo = () => {
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
