import React, { useState } from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import {
  HeaderText,
  MainContainer,
  SettingContainer,
  TopContainer,
} from './styles';
import Setting from '../../components/Setting';
import NativeDialog from 'react-native-native-dialog';
import { Database } from '../../services/database';
import { Language, Preferences, ThemeName, Units } from '../../types';

const Settings = ({}: Props<StackParameters, 'Settings'>) => {
  const [preferences, setPreferences] = useState(Database.getPreferences());

  const update = (
    property: keyof Preferences,
    value: Preferences[typeof property],
  ) => {
    const updated = { ...preferences, [property]: value };
    Database.setPreferences(updated);
    setPreferences(updated);
  };

  return (
    <TopContainer>
      <MainContainer>
        <HeaderText>General</HeaderText>
        <SettingContainer>
          <Setting
            title="Language"
            subtitle={preferences.language}
            onPress={() =>
              NativeDialog.showItemsDialog({
                title: 'Select your language:',
                items: [{ id: Language.ENGLISH, title: 'English' }],
                onItemSelect: (id: any) => update('language', id),
              })
            }
          />
          <Setting
            title="Theme"
            subtitle={preferences.theme}
            onPress={() =>
              NativeDialog.showItemsDialog({
                title: 'Select theme:',
                items: [
                  { id: ThemeName.LIGHT, title: 'Light' },
                  { id: ThemeName.DARK, title: 'Dark' },
                  { id: ThemeName.AUTO, title: 'Auto (System)' },
                ],
                onItemSelect: (id: any) => update('theme', id),
              })
            }
          />
          <Setting
            title="Units"
            subtitle={preferences.units}
            onPress={() =>
              NativeDialog.showItemsDialog({
                title: 'Select units:',
                items: [
                  { id: Units.IMPERIAL, title: 'Imperial' },
                  { id: Units.METRIC, title: 'Metric' },
                ],
                onItemSelect: (id: any) => update('units', id),
              })
            }
          />
        </SettingContainer>
      </MainContainer>
    </TopContainer>
  );
};

export default Settings;
