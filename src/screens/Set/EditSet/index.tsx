import React, { useEffect, useState } from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters, StackScreens } from '../../../routes/types';
import {
  HeaderText,
  TopContainer,
  SettingContainer,
  Setting,
  SettingText,
} from './styles';
import preventBackUntilSaved from '../../../components/PreventBackUntilSaved';
import { translate } from '../../../services/translation';

const EditSet = ({
  navigation,
  route,
}: Props<StackParameters, StackScreens.EDIT_EXERCISE>) => {
  const [set, setSet] = useState(route.params.set);
  const [hasUnsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(
    () =>
      preventBackUntilSaved(
        hasUnsavedChanges,
        () => navigation.navigate(StackScreens.EDIT_EXERCISE, { set }),
        navigation,
      ),
    [navigation, hasUnsavedChanges, set],
  );

  return (
    <TopContainer>
      <HeaderText>{`${translate('set.edit.header.text')} ${
        set?.index! + 1
      }`}</HeaderText>
      <SettingContainer>
        <Setting>
          <SettingText>{translate('set.edit.settings.minReps')}</SettingText>
        </Setting>
        <Setting>
          <SettingText>{translate('set.edit.settings.maxReps')}</SettingText>
        </Setting>
        <Setting>
          <SettingText>{translate('set.edit.settings.restTime')}</SettingText>
        </Setting>
      </SettingContainer>
    </TopContainer>
  );
};

export default EditSet;
