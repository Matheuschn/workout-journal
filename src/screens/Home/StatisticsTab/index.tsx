import React from 'react';
import { TabProps, TabScreens } from '../types';
import { MainContainer, TopContainer } from './styles';

const StatisticsTab = ({}: TabProps<TabScreens.STATISTICS_TAB>) => {
  return (
    <TopContainer>
      <MainContainer />
    </TopContainer>
  );
};

export default StatisticsTab;
