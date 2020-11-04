import React from 'react';
import {SafeAreaView} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {IconType, AppHeader} from '../../common';
import {appColors} from '../../common/Theme/colors';
import {AppIconButton} from '../../common/iconButton/IconButton';
import VisibleTodoList from '../../containers/VisibleTodoList';

export const Home: NavigationFunctionComponent = (props) => {
  const {componentId} = props;

  return (
    <>
      <AppHeader
        hideBack
        title="Todo"
        componentId={componentId}
        rightItem={
          <AppIconButton
            onPress={() =>
              Navigation.push(componentId, {
                component: {id: 'TODO_SCREEN', name: 'addToDo'},
              })
            }
            name="plus"
            type={IconType.entypo}
            size={25}
            color={appColors.primary}
          />
        }
      />
      <VisibleTodoList />
      <SafeAreaView />
    </>
  );
};
