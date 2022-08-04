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
import AddPlan from '../screens/Plan/AddPlan';
import EditWorkout from '../screens/Workout/EditWorkout';
import AddExercise from '../screens/Exercise/AddExercise';
import EditExercise from '../screens/Exercise/EditExercise';
import EditSet from '../screens/Set/EditSet';

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
          <Stack.Screen
            name={StackScreens.ADD_PLAN}
            component={AddPlan}
            options={{
              title: translate(`screens.${StackScreens.ADD_PLAN}`),
            }}
          />
          <Stack.Screen
            name={StackScreens.EDIT_WORKOUT}
            component={EditWorkout}
            options={{
              title: translate(`screens.${StackScreens.EDIT_WORKOUT}`),
            }}
          />
          <Stack.Screen
            name={StackScreens.ADD_EXERCISE}
            component={AddExercise}
            options={{
              title: translate(`screens.${StackScreens.ADD_EXERCISE}`),
            }}
          />
          <Stack.Screen
            name={StackScreens.EDIT_EXERCISE}
            component={EditExercise}
            options={{
              title: translate(`screens.${StackScreens.EDIT_EXERCISE}`),
            }}
          />
          <Stack.Screen
            name={StackScreens.EDIT_SET}
            component={EditSet}
            options={{
              title: translate(`screens.${StackScreens.EDIT_SET}`),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
