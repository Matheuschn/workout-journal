import React from 'react';
import { TabProps, TabScreens } from '../types';
import { MainContainer, TopContainer } from './styles';

const HistoryTab = ({}: TabProps<TabScreens.HISTORY_TAB>) => {
  return (
    <TopContainer>
      <MainContainer />
    </TopContainer>
  );
};

export default HistoryTab;
