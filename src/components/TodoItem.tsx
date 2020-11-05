import React from 'react';
import {View} from 'react-native';
import {AppText, styles} from '../common';
import {Todo} from '../models/Todos';

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = (props) => {
  const {
    todo: {text, id},
  } = props;

  return (
    <View
      style={[
        styles.shadow,
        {
          height: 150,
          padding: 20,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <AppText>{id}</AppText>
      <AppText>{text}</AppText>
    </View>
  );
};
