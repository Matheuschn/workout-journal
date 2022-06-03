import React, { useEffect, useState } from 'react';
import { BottomTabNavigationProp as Props } from '@react-navigation/bottom-tabs';
import { TabParameters, TabScreens } from '../types';
import { HeaderText, MainContainer, TopContainer } from './styles';
import { Database } from '../../../services/database';
import WorkoutCard from '../../../components/WorkoutCard';
import { useIsFocused } from '@react-navigation/native';
import { Plan } from '../../../types';
import { translate } from '../../../services/translation';

const HomeTab = ({}: Props<TabParameters, TabScreens.HOME_TAB>) => {
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
        <HeaderText>{translate('home.plans.header')}</HeaderText>
        {plan ? (
          <></>
        ) : (
          <WorkoutCard
            title={translate('home.plans.card.title.no_plans')}
            subtitle={translate('home.plans.card.subtitle.no_plans')}
            icon="plus"
          />
        )}
      </MainContainer>
    </TopContainer>
  );
};

export default HomeTab;
