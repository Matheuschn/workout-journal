import { StackScreens } from '../../../../routes/types';
import { TabScreens } from '../../../../screens/Home/types';
import settings from './settings';
import preferences from './preferences';
import home from './home';
import plans from './plans';

export default {
  name: 'Português (Brasil)',
  screens: {
    [TabScreens.HOME_TAB]: 'Início',
    [TabScreens.HISTORY_TAB]: 'Histórico',
    [TabScreens.PLANS_TAB]: 'Planos',
    [TabScreens.STATISTICS_TAB]: 'Estatísticas',
    [StackScreens.SETTINGS]: 'Configurações',
    [StackScreens.ADD_PLAN]: 'Adicionar plano',
  },
  preferences,
  home,
  plans,
  settings,
};
