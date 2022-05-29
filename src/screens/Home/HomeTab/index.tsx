import React, { useEffect, useState } from 'react';
import { BottomTabNavigationProp as Props } from '@react-navigation/bottom-tabs';
import { TabParameters } from '../types';
import { HeaderText, MainContainer, TopContainer } from './styles';
import { Database } from '../../../services/database';
import WorkoutCard from '../../../components/WorkoutCard';
import { useIsFocused } from '@react-navigation/native';
import { Plan } from '../../../types';

const HomeTab = ({}: Props<TabParameters, 'HomeTab'>) => {
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
    </TopContainer>
  );
};

export default HomeTab;
