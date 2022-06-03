import { StackScreens } from '../../../../routes/types';
import { TabScreens } from '../../../../screens/Home/types';
import settings from './settings';
import preferences from './preferences';
import home from './home';

export default {
  name: 'English',
  screens: {
    [TabScreens.HOME_TAB]: 'Home',
    [TabScreens.HISTORY_TAB]: 'History',
    [TabScreens.PLANS_TAB]: 'Plans',
    [TabScreens.STATISTICS_TAB]: 'Statistics',
    [StackScreens.SETTINGS]: 'Settings',
  },
  preferences,
  home,
  settings,
};