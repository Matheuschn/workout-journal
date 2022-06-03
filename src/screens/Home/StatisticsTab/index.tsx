import React from 'react';
import { BottomTabNavigationProp as Props } from '@react-navigation/bottom-tabs';
import { TabParameters, TabScreens } from '../types';
import { MainContainer, TopContainer } from './styles';

const StatisticsTab = ({}: Props<TabParameters, TabScreens.STATISTICS_TAB>) => {
  return (
    <TopContainer>
      <MainContainer />
    </TopContainer>
  );
};

export default StatisticsTab;
