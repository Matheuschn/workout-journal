import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

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

export type TabProps<T extends keyof TabParameters> = CompositeScreenProps<
  BottomTabScreenProps<TabParameters, T>,
  StackScreenProps<StackParameters>
>;
