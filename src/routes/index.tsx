import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParameters } from './types';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import Theme from '../themes';
import Home from '../screens/Home';
import Plans from '../screens/Plans';

const Stack = createStackNavigator<StackParameters>();

const Routes = () => {
  const scheme = useColorScheme();
  const theme = Theme[scheme ?? 'light'];

  return (
    <ThemeProvider theme={theme.colors}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen
            name={'Plans'}
            component={Plans}
            options={{ headerLeft: () => undefined }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
