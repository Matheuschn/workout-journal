import React, { useEffect, useState } from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { MainContainer, TopContainer } from './styles';
import BottomNavigation from '../../components/BottomNavigation';
import { Database } from '../../services/database';
import { useIsFocused } from '@react-navigation/native';
import { Plan } from '../../types';

const Plans = ({}: Props<StackParameters, 'Plans'>) => {
  const isFocused = useIsFocused();
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    if (isFocused) {
      setPlans(Database.getPlans());
    }
  }, [isFocused]);

  return (
    <TopContainer>
      <MainContainer />
      <BottomNavigation />
    </TopContainer>
  );
};

export default Plans;
