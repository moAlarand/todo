import React, {useEffect} from 'react';
import {AppList} from '../common';
import {Todos} from '../models/Todos';
import {TodoItem} from './TodoItem';
import {View} from 'react-native';

interface Props {
  todos: Todos;
}

export const TodoList: React.FC<Props> = (props) => {
  const {todos} = props;
  console.log('todos', todos);

  return (
    <AppList
      style={{flex: 1}}
      contentContainerStyle={{
        padding: 10,
      }}
      data={todos}
      renderItem={({item}) => (
        <TodoItem key={item.id} text={item.text} id={item.id} />
      )}
    />
  );
};
