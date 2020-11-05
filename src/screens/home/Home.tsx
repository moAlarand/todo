import React, {Fragment} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {IconType, AppHeader} from '../../common';
import {appColors} from '../../common/Theme/colors';
import {AppIconButton} from '../../common/iconButton/IconButton';
import VisibleTodoList from '../../containers/VisibleTodoList';
import {AddNewTodo} from '../../containers';

export const Home: NavigationFunctionComponent = (props) => {
  const {componentId} = props;

  return (
    <View style={{flex: 1, backgroundColor: '#00000011'}}>
      <AppHeader hideBack title="Todo" componentId={componentId} />
      <AddNewTodo />
      <VisibleTodoList />
      <SafeAreaView />
    </View>
  );
};
