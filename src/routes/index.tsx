import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParameters } from './types';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import Theme from '../themes';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { Database } from '../services/database';
import { Preferences, ThemeName } from '../types';

const Stack = createStackNavigator<StackParameters>();

const Routes = () => {
  const systemThemeName = useColorScheme();
  const [preferences, setPreferences] = useState<Preferences>(
    Database.getPreferences(),
  );

  useEffect(() => {
    Database.addPreferencesListener((obj) => setPreferences(obj.toJSON()));
  }, []);

  let currentTheme;
  if (preferences.theme === ThemeName.AUTO) {
    currentTheme = Theme[systemThemeName ?? ThemeName.LIGHT];
  } else {
    currentTheme = Theme[preferences.theme];
  }

  return (
    <ThemeProvider theme={currentTheme.colors}>
      <NavigationContainer theme={currentTheme}>
        <Stack.Navigator initialRouteName={'HomeNavigator'}>
          <Stack.Screen
            name={'HomeNavigator'}
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={'Settings'} component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
