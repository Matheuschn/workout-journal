import React from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { HeaderText, MainContainer, TopContainer } from './styles';
import BottomNavigation from '../../components/BottomNavigation';
import WorkoutCard from '../../components/WorkoutCard';
import { Database } from '../../services/database';

const Home = ({ navigation, route }: Props<StackParameters, 'Home'>) => {
  return (
    <TopContainer>
      <MainContainer>
        <HeaderText>My Plan</HeaderText>
        {
          // Using the exercises just as an example
          Database.getExercises()
            .slice(0, 10)
            .map(({ name, normalized_name }) => (
              <WorkoutCard title={name} key={normalized_name} />
            ))
        }
      </MainContainer>
      <BottomNavigation />
    </TopContainer>
  );
};

export default Home;
