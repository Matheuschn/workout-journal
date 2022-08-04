import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Alert } from 'react-native';
import { StackParameters } from '../../routes/types';
import { translate } from '../../services/translation';
import { HeaderButtonContainer, HeaderButtonIcon } from './styles';

/**
 * This is not a real component per se, but a function that uses JSX and styled-components.
 * Because of that, it was better to place it with the other components.
 *
 * @param hasUnsavedChanges Boolean indicating whether to prevent the back button.
 * @param onSave Funcion to run after the user clicked the save button on the header.
 * @param navigation The navigation prop used in the screen.
 * @returns A listener that should be discarded by returning it in useEffect.
 */
const preventBackUntilSaved = (
  hasUnsavedChanges: boolean,
  onSave: () => void,
  navigation: StackNavigationProp<StackParameters, keyof StackParameters>,
) => {
  const listener = navigation.addListener('beforeRemove', (e) => {
    if (!hasUnsavedChanges) {
      return;
    }

    e.preventDefault();

    Alert.alert(
      translate('components.preventBack.title'),
      translate('components.preventBack.message'),
      [
        { text: translate('components.preventBack.cancel'), style: 'cancel' },
        {
          text: translate('components.preventBack.discard'),
          style: 'destructive',
          onPress: () => navigation.dispatch(e.data.action),
        },
      ],
    );
  });

  if (hasUnsavedChanges) {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtonContainer
          onPress={() => {
            navigation.removeListener('beforeRemove', listener);
            onSave();
          }}>
          <HeaderButtonIcon name="check" size={28} />
        </HeaderButtonContainer>
      ),
    });
  }

  return listener;
};

export default preventBackUntilSaved;
