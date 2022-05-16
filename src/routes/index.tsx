import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParameters } from './types';
import Home from '../screens/Home';
import { useColorScheme } from 'react-native';
import Theme from '../themes';

const Stack = createStackNavigator<StackParameters>();

const Routes = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={Theme[scheme ?? 'light']}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
