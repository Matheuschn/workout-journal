export enum StackScreens {
  HOME_NAVIGATOR = 'HomeNavigator',
  SETTINGS = 'Settings',
  ADD_PLAN = 'AddPlan',
}

export type StackParameters = {
  [StackScreens.HOME_NAVIGATOR]: {};
  [StackScreens.SETTINGS]: {};
  [StackScreens.ADD_PLAN]: {};
};
