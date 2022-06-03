import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreens, StackParameters } from './types';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import Theme from '../themes';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { Database } from '../services/database';
import { Preferences, ThemeName } from '../types';
import { setLocale, translate } from '../services/translation';
import { PreferencesSchema } from '../services/database/schemas/preferences';

const Stack = createStackNavigator<StackParameters>();
const { useObject } = Database.context;

const Routes = () => {
  const systemThemeName = useColorScheme();

  const preferences: Preferences = useObject(
    PreferencesSchema.name,
    Database.getPreferences().id,
  )?.toJSON();

  setLocale(preferences.language);

  let currentTheme;
  if (preferences.theme === ThemeName.AUTO) {
    currentTheme = Theme[systemThemeName ?? ThemeName.LIGHT];
  } else {
    currentTheme = Theme[preferences.theme];
  }

  return (
    <ThemeProvider theme={currentTheme.colors}>
      <NavigationContainer theme={currentTheme}>
        <Stack.Navigator initialRouteName={StackScreens.HOME_NAVIGATOR}>
          <Stack.Screen
            name={StackScreens.HOME_NAVIGATOR}
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={StackScreens.SETTINGS}
            component={Settings}
            options={{
              title: translate(`screens.${StackScreens.SETTINGS}`),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
