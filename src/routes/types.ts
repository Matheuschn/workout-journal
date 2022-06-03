export enum StackScreens {
  HOME_NAVIGATOR = 'HomeNavigator',
  SETTINGS = 'Settings',
}

export type StackParameters = {
  [StackScreens.HOME_NAVIGATOR]: {};
  [StackScreens.SETTINGS]: {};
};
