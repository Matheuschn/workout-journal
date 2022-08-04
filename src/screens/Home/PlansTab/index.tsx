import React, { useEffect, useState } from 'react';
import { TabScreens, TabProps } from '../types';
import { HeaderText, MainContainer, HelperText, TopContainer } from './styles';
import { Database } from '../../../services/database';
import { useIsFocused } from '@react-navigation/native';
import { Plan } from '../../../types';
import { translate } from '../../../services/translation';
import PlusButton from '../../../components/PlusButton';
import { StackScreens } from '../../../routes/types';

const PlansTab = ({ navigation }: TabProps<TabScreens.PLANS_TAB>) => {
  const isFocused = useIsFocused();
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    if (isFocused) {
      setPlans(Database.getPlans());
    }
  }, [isFocused]);

  return (
    <TopContainer>
      <MainContainer>
        <HeaderText>
          {translate('home.plansTab.custom_plans.header')}
        </HeaderText>
        {plans.length ? (
          <></>
        ) : (
          <HelperText>
            {translate('home.plansTab.custom_plans.no_plans')}
          </HelperText>
        )}
      </MainContainer>
      <PlusButton
        onPress={() => navigation.navigate(StackScreens.ADD_PLAN, {})}
      />
    </TopContainer>
  );
};

export default PlansTab;
