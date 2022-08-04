import { Exercise, Set, Workout } from '../types';

export enum StackScreens {
  HOME_NAVIGATOR = 'HomeNavigator',
  SETTINGS = 'Settings',
  ADD_PLAN = 'AddPlan',
  EDIT_WORKOUT = 'EditWorkout',
  ADD_EXERCISE = 'AddExercise',
  EDIT_EXERCISE = 'EditExercise',
  EDIT_SET = 'EditSet',
}

export type StackParameters = {
  [StackScreens.HOME_NAVIGATOR]: {};
  [StackScreens.SETTINGS]: {};
  [StackScreens.ADD_PLAN]: {
    workout?: Workout;
  };
  [StackScreens.EDIT_WORKOUT]: {
    workout?: Workout;
    exercise?: Exercise & { index?: number };
  };
  [StackScreens.ADD_EXERCISE]: {};
  [StackScreens.EDIT_EXERCISE]: {
    exercise?: Exercise & { index?: number };
    set?: Set & { index?: number };
  };
  [StackScreens.EDIT_SET]: {
    set: Set & { index?: number };
  };
};
