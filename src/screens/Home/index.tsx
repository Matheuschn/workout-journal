import React from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { HeaderText, MainContainer, TopContainer } from './styles';
import BottomNavigation from '../../components/BottomNavigation';

const Home = ({ navigation, route }: Props<StackParameters, 'Home'>) => {
  return (
    <TopContainer>
      <MainContainer>
        <HeaderText>My Plan</HeaderText>
      </MainContainer>
      <BottomNavigation />
    </TopContainer>
  );
};

export default Home;
