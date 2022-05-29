import React, { useEffect, useState } from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { HeaderText, MainContainer, TopContainer } from './styles';
import BottomNavigation from '../../components/BottomNavigation';
import { Database } from '../../services/database';
import WorkoutCard from '../../components/WorkoutCard';
import { useIsFocused } from '@react-navigation/native';
import { Plan } from '../../types';

const Home = ({}: Props<StackParameters, 'Home'>) => {
  const isFocused = useIsFocused();
  const [plan, setPlan] = useState<Plan | undefined>(undefined);

  useEffect(() => {
    if (isFocused) {
      setPlan(Database.getActivePlan());
    }
  }, [isFocused]);

  return (
    <TopContainer>
      <MainContainer>
        <HeaderText>My Plan</HeaderText>
        {plan ? (
          <></>
        ) : (
          <WorkoutCard
            title="You don't have a plan yet!"
            subtitle="Click here to create one."
            icon="plus"
          />
        )}
      </MainContainer>
      <BottomNavigation />
    </TopContainer>
  );
};

export default Home;
