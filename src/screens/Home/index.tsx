import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParameters } from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from './HomeTab';
import PlansTab from './PlansTab';

const Tab = createBottomTabNavigator<TabParameters>();

const Home = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
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
};

export default Home;
