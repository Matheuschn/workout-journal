export enum TabScreens {
  HOME_TAB = 'HomeTab',
  HISTORY_TAB = 'HistoryTab',
  PLANS_TAB = 'PlansTab',
  STATISTICS_TAB = 'StatisticsTab',
}

export type TabParameters = {
  [TabScreens.HOME_TAB]: {};
  [TabScreens.HISTORY_TAB]: {};
  [TabScreens.PLANS_TAB]: {};
  [TabScreens.STATISTICS_TAB]: {};
};
