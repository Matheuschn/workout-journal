import { StackScreens } from '../../../../routes/types';
import { TabScreens } from '../../../../screens/Home/types';
import settings from './settings';
import preferences from './preferences';
import home from './home';

export default {
  name: 'Português (Brasil)',
  screens: {
    [TabScreens.HOME_TAB]: 'Início',
    [TabScreens.HISTORY_TAB]: 'Histórico',
    [TabScreens.PLANS_TAB]: 'Planos',
    [TabScreens.STATISTICS_TAB]: 'Estatísticas',
    [StackScreens.SETTINGS]: 'Configurações',
  },
  preferences,
  home,
  settings,
};
