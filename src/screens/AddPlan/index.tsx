import React from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters, StackScreens } from '../../routes/types';
import { MainContainer, TopContainer } from './styles';

const AddPlan = ({}: Props<StackParameters, StackScreens.ADD_PLAN>) => {
  return (
    <TopContainer>
      <MainContainer />
    </TopContainer>
  );
};

export default AddPlan;
