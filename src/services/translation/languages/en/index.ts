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
  name: 'English',
  screens: {
    [TabScreens.HOME_TAB]: 'Home',
    [TabScreens.HISTORY_TAB]: 'History',
    [TabScreens.PLANS_TAB]: 'Plans',
    [TabScreens.STATISTICS_TAB]: 'Statistics',
    [StackScreens.SETTINGS]: 'Settings',
    [StackScreens.ADD_PLAN]: 'Add plan',
    [StackScreens.EDIT_WORKOUT]: 'Edit workout',
    [StackScreens.ADD_EXERCISE]: 'Add exercise',
    [StackScreens.EDIT_EXERCISE]: 'Edit exercise',
    [StackScreens.EDIT_SET]: 'Edit set',
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
