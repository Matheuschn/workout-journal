import { StackScreens } from '../../../../routes/types';
import { TabScreens } from '../../../../screens/Home/types';
import settings from './Settings/Settings';
import homeTab from './Home/HomeTab';
import plansTab from './Home/PlansTab';
import addPlan from './Plan/AddPlan';
import editWorkout from './Workout/EditWorkout';
import addExercise from './Exercise/AddExercise';
import editExercise from './Exercise/EditExercise';
import editSet from './Set/EditSet';
import preventBack from './Components/PreventBack';

export default {
  name: 'Português (Brasil)',
  screens: {
    [TabScreens.HOME_TAB]: 'Início',
    [TabScreens.HISTORY_TAB]: 'Histórico',
    [TabScreens.PLANS_TAB]: 'Planos',
    [TabScreens.STATISTICS_TAB]: 'Estatísticas',
    [StackScreens.SETTINGS]: 'Configurações',
    [StackScreens.ADD_PLAN]: 'Adicionar plano',
    [StackScreens.EDIT_WORKOUT]: 'Editar treino',
    [StackScreens.ADD_EXERCISE]: 'Adicionar exercício',
    [StackScreens.EDIT_EXERCISE]: 'Editar exercício',
    [StackScreens.EDIT_SET]: 'Editar série',
  },
  home: {
    homeTab,
    plansTab,
  },
  settings,
  plan: {
    add: addPlan,
  },
  workout: {
    edit: editWorkout,
  },
  exercise: {
    add: addExercise,
    edit: editExercise,
  },
  set: {
    edit: editSet,
  },
  components: {
    preventBack,
  },
};
