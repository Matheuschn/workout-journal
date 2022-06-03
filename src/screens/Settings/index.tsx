import React from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters, StackScreens } from '../../routes/types';
import {
  HeaderText,
  MainContainer,
  SettingContainer,
  TopContainer,
} from './styles';
import Setting from '../../components/Setting';
import NativeDialog from 'react-native-native-dialog';
import { Database } from '../../services/database';
import { Preferences, ThemeName, Units } from '../../types';
import { translate } from '../../services/translation';
import { languages } from '../../services/translation/languages';
import { PreferencesSchema } from '../../services/database/schemas/preferences';

const { useObject } = Database.context;

const Settings = ({}: Props<StackParameters, StackScreens.SETTINGS>) => {
  const preferences: Preferences = useObject(
    PreferencesSchema.name,
    Database.getPreferences().id,
  )?.toJSON();

  const update = (
    property: keyof Preferences,
    value: Preferences[typeof property],
  ) => {
    const updated = { ...preferences, [property]: value };
    Database.setPreferences(updated);
  };

  return (
    <TopContainer>
      <MainContainer>
        <HeaderText>{translate('settings.general.header')}</HeaderText>
        <SettingContainer>
          <Setting
            title={translate('settings.general.language.title')}
            subtitle={languages.translations[preferences.language].name}
            onPress={() =>
              NativeDialog.showItemsDialog({
                title: translate('settings.general.language.dialog.title'),
                items: Object.entries(languages.translations).map(
                  ([tag, language]) => ({ id: tag, title: language.name }),
                ),
                onItemSelect: (id: any) => update('language', id),
              })
            }
          />
          <Setting
            title={translate('settings.general.theme.title')}
            subtitle={translate(`preferences.theme.${preferences.theme}`)}
            onPress={() =>
              NativeDialog.showItemsDialog({
                title: translate('settings.general.theme.dialog.title'),
                items: Object.values(ThemeName).map((theme) => ({
                  id: theme,
                  title: translate(`preferences.theme.${theme}`),
                })),
                onItemSelect: (id: any) => update('theme', id),
              })
            }
          />
          <Setting
            title={translate('settings.general.units.title')}
            subtitle={translate(`preferences.units.${preferences.units}`)}
            onPress={() =>
              NativeDialog.showItemsDialog({
                title: translate('settings.general.units.dialog.title'),
                items: Object.values(Units).map((unit) => ({
                  id: unit,
                  title: translate(`preferences.units.${unit}`),
                })),
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
