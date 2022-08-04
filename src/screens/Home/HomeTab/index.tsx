import React, { useEffect, useState } from 'react';
import { TabProps, TabScreens } from '../types';
import { HeaderText, MainContainer, TopContainer } from './styles';
import { Database } from '../../../services/database';
import Card from '../../../components/Card';
import { useIsFocused } from '@react-navigation/native';
import { Plan } from '../../../types';
import { translate } from '../../../services/translation';
import { StackScreens } from '../../../routes/types';

const HomeTab = ({ navigation }: TabProps<TabScreens.HOME_TAB>) => {
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
        <HeaderText>{translate('home.homeTab.plans.header')}</HeaderText>
        {plan ? (
          <></>
        ) : (
          <Card
            title={translate('home.homeTab.plans.card.title.no_plans')}
            subtitle={translate('home.homeTab.plans.card.subtitle.no_plans')}
            icon="plus"
            onPress={() => navigation.navigate(StackScreens.ADD_PLAN, {})}
          />
        )}
      </MainContainer>
    </TopContainer>
  );
};

export default HomeTab;
