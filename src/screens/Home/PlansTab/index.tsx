import React, { useEffect, useState } from 'react';
import { BottomTabNavigationProp as Props } from '@react-navigation/bottom-tabs';
import { TabParameters } from '../types';
import { MainContainer, TopContainer } from './styles';
import { Database } from '../../../services/database';
import { useIsFocused } from '@react-navigation/native';
import { Plan } from '../../../types';

const PlansTab = ({}: Props<TabParameters, 'PlansTab'>) => {
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
    </TopContainer>
  );
};

export default PlansTab;
