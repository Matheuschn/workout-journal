import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParameters, TabScreens } from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from './HomeTab';
import PlansTab from './PlansTab';
import ButtonWithFeedback from '../../components/ButtonWithFeedback';
import { ConfigContainer, ConfigIcon } from './styles';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters, StackScreens } from '../../routes/types';
import { translate } from '../../services/translation';
import { Database } from '../../services/database';
import { PreferencesSchema } from '../../services/database/schemas/preferences';
import HistoryTab from './HistoryTab';
import StatisticsTab from './StatisticsTab';

const Tab = createBottomTabNavigator<TabParameters>();

const { useObject } = Database.context;

const Home = ({
  navigation,
}: Props<StackParameters, StackScreens.HOME_NAVIGATOR>) => {
  useObject(PreferencesSchema.name, Database.getPreferences().id);

  return (
    <Tab.Navigator
      initialRouteName={TabScreens.HOME_TAB}
      screenOptions={{
        tabBarButton: (props) => (
          <ButtonWithFeedback rippleRadius={40} {...props} />
        ),
        headerRight: () => (
          <ConfigContainer
            onPress={() => navigation.navigate(StackScreens.SETTINGS, {})}>
            <ConfigIcon name="cog" size={28} />
          </ConfigContainer>
        ),
      }}>
      <Tab.Screen
        name={TabScreens.HOME_TAB}
        component={HomeTab}
        options={{
          tabBarIcon: (props) => <Icon name="home" {...props} />,
          title: translate(`screens.${TabScreens.HOME_TAB}`),
        }}
      />
      <Tab.Screen
        name={TabScreens.HISTORY_TAB}
        component={HistoryTab}
        options={{
          tabBarIcon: (props) => <Icon name="history" {...props} />,
          title: translate(`screens.${TabScreens.HISTORY_TAB}`),
        }}
      />
      <Tab.Screen
        name={TabScreens.PLANS_TAB}
        component={PlansTab}
        options={{
          tabBarIcon: (props) => <Icon name="notebook" {...props} />,
          title: translate(`screens.${TabScreens.PLANS_TAB}`),
        }}
      />
      <Tab.Screen
        name={TabScreens.STATISTICS_TAB}
        component={StatisticsTab}
        options={{
          tabBarIcon: (props) => <Icon name="poll" {...props} />,
          title: translate(`screens.${TabScreens.STATISTICS_TAB}`),
        }}
      />
    </Tab.Navigator>
  );
};
export default Home;
