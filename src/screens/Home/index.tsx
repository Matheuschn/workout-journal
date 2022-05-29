import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParameters } from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from './HomeTab';
import PlansTab from './PlansTab';
import ButtonWithFeedback from '../../components/ButtonWithFeedback';
import { ConfigContainer, ConfigIcon } from './styles';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

const Tab = createBottomTabNavigator<TabParameters>();

const Home = ({ navigation }: Props<StackParameters, 'HomeNavigator'>) => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    screenOptions={{
      tabBarButton: (props) => (
        <ButtonWithFeedback rippleRadius={40} {...props} />
      ),
      headerRight: () => (
        <ConfigContainer onPress={() => navigation.navigate('Config', {})}>
          <ConfigIcon name="cog" size={28} />
        </ConfigContainer>
      ),
    }}>
    <Tab.Screen
      name="HomeTab"
      component={HomeTab}
      options={{
        tabBarIcon: (props) => <Icon name="home" {...props} />,
        title: 'Home',
      }}
    />
    <Tab.Screen
      name="HistoryTab"
      component={PlansTab}
      options={{
        tabBarIcon: (props) => <Icon name="history" {...props} />,
        title: 'History',
      }}
    />
    <Tab.Screen
      name="PlansTab"
      component={PlansTab}
      options={{
        tabBarIcon: (props) => <Icon name="notebook" {...props} />,
        title: 'Plans',
      }}
    />
    <Tab.Screen
      name="ProgressionTab"
      component={PlansTab}
      options={{
        tabBarIcon: (props) => <Icon name="poll" {...props} />,
        title: 'Progression',
      }}
    />
  </Tab.Navigator>
);
export default Home;
