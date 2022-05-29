import React from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import {
  HeaderText,
  MainContainer,
  SettingContainer,
  TopContainer,
} from './styles';
import Setting from '../../components/Setting';

const Settings = ({}: Props<StackParameters, 'Settings'>) => {
  return (
    <TopContainer>
      <MainContainer>
        <HeaderText>General</HeaderText>
        <SettingContainer>
          <Setting title="Language" subtitle="English" />
          <Setting title="Theme" subtitle="Auto" />
          <Setting title="Units" subtitle="Metric" />
        </SettingContainer>
      </MainContainer>
    </TopContainer>
  );
};

export default Settings;
