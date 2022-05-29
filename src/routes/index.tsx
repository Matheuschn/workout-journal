import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParameters } from './types';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import Theme from '../themes';
import Home from '../screens/Home';
import Config from '../screens/Config';

const Stack = createStackNavigator<StackParameters>();

const Routes = () => {
  const scheme = useColorScheme();
  const theme = Theme[scheme ?? 'light'];

  return (
    <ThemeProvider theme={theme.colors}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={'HomeNavigator'}>
          <Stack.Screen
            name={'HomeNavigator'}
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={'Config'} component={Config} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
