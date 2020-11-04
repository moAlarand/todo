import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../app/store';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from '../apollo';

export interface Screen {
  name: string;
  component: NavigationFunctionComponent<any>;
}

// create Screen
export const createScreen = (screen: Screen) => {
  const {name, component: Component} = screen;

  let ScreenWraper: NavigationFunctionComponent;
  ScreenWraper = (props) => (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </ApolloProvider>
  );

  Navigation.registerComponent(name, () => gestureHandlerRootHOC(ScreenWraper));
};
