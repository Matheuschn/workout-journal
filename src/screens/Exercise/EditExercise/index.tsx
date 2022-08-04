import React, { useEffect, useState } from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters, StackScreens } from '../../../routes/types';
import {
  HeaderText,
  HeaderContainer,
  TextInput,
  TopContainer,
  SetList,
  AddSetButton,
  AddSetIcon,
  AddSetText,
} from './styles';
import Card from '../../../components/Card';
import preventBackUntilSaved from '../../../components/PreventBackUntilSaved';
import { Set } from '../../../types';
import { translate } from '../../../services/translation';

const EditExercise = ({
  navigation,
  route,
}: Props<StackParameters, StackScreens.EDIT_EXERCISE>) => {
  const [exercise, setExercise] = useState(route.params.exercise!);
  const [hasUnsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(
    () =>
      preventBackUntilSaved(
        hasUnsavedChanges,
        () => navigation.navigate(StackScreens.EDIT_WORKOUT, { exercise }),
        navigation,
      ),
    [navigation, hasUnsavedChanges, exercise],
  );

  const addSet = () => {
    const newSet = { id: new Realm.BSON.UUID(), rest_time: 60 };
    setExercise({ ...exercise, sets: [...exercise.sets, newSet] });
    setUnsavedChanges(true);
  };

  const renderSet = (set: Set, index: number) => {
    const minutes = Math.floor((set.rest_time ?? 0) / 60);
    const seconds = (set.rest_time ?? 0) - minutes * 60;

    return (
      <Card
        title={`${translate('exercise.edit.setList.card.title')} ${index + 1}`}
        subtitle={`${minutes}:${seconds
          .toString()
          .padStart(2, '0')} ${translate(
          'exercise.edit.setList.card.subtitle',
        )}`}
        showOptions={true}
        key={set.id.toHexString()}
        onPress={() =>
          navigation.navigate(StackScreens.EDIT_SET, { set: { ...set, index } })
        }
      />
    );
  };

  return (
    <TopContainer>
      <HeaderContainer>
        <HeaderText>{translate('exercise.edit.header.notes.text')}</HeaderText>
        <TextInput
          placeholder={translate('exercise.edit.header.notes.placeholder')}
          onChangeText={(text) => {
            setExercise({ ...exercise, notes: text });
            setUnsavedChanges(true);
          }}
          defaultValue={exercise.notes}
        />
      </HeaderContainer>

      <SetList>{exercise.sets.map(renderSet)}</SetList>

      <AddSetButton onPress={addSet}>
        <AddSetIcon name="plus-circle-outline" size={24} />
        <AddSetText>{translate('exercise.edit.addSet.buttonText')}</AddSetText>
      </AddSetButton>
    </TopContainer>
  );
};

export default EditExercise;
