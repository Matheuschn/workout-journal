import React from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { MainContainer, TopContainer } from './styles';

const Config = ({}: Props<StackParameters, 'Config'>) => {
  return (
    <TopContainer>
      <MainContainer />
    </TopContainer>
  );
};

export default Config;
