import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {AppHeader} from '../../common';
import {AddNewTodo} from '../../containers';

interface formProps {
  // employee?: Employee;
}

export const AddTODo: NavigationFunctionComponent<formProps> = ({
  componentId,
}) => {
  return (
    <>
      <AppHeader componentId={componentId} title="New Todo" />
      <AddNewTodo />
    </>
  );
};
