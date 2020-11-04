import React from 'react';
import {View} from 'react-native';
import {AppText, styles} from '../common';

interface Props {
  id: number;
  text: string;
}

export const TodoItem: React.FC<Props> = (props) => {
  const {text, id} = props;

  return (
    <View
      style={[
        styles.shadow,
        {
          width: '100%',
          height: 150,
          padding: 20,
          margin: 30,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <AppText>{id}</AppText>
      <AppText>{text}</AppText>
    </View>
  );
};
