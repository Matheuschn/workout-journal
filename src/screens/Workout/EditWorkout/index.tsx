import React, { useState } from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters, StackScreens } from '../../../routes/types';
import {
  ExerciseList,
  HeaderContainer,
  HeaderText,
  TextInput,
  TopContainer,
} from './styles';
import { useEffect } from 'react';
import PlusButton from '../../../components/PlusButton';
import { Workout } from '../../../types';
import Card from '../../../components/Card';
import preventBackUntilSaved from '../../../components/PreventBackUntilSaved';
import { translate } from '../../../services/translation';

const EditWorkout = ({
  navigation,
  route,
}: Props<StackParameters, StackScreens.EDIT_WORKOUT>) => {
  const [workout, setWorkout] = useState<Workout>(route.params.workout!);
  const [hasUnsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    if (route.params.exercise) {
      const exercise = route.params.exercise;
      const exercisesArray = [...workout.exercises];

      //  If we have a index, update the exercise at that index
      if (exercise.index !== undefined) {
        exercisesArray[exercise.index] = exercise;
      } else {
        //  Fill the new exercise sets (3 by default) with the default rest time values
        exercise.sets = [...Array(3)].map(() => ({
          id: new Realm.BSON.UUID(),
          rest_time: 60,
        }));

        exercisesArray.push(exercise);
      }

      setWorkout({
        ...workout,
        exercises: exercisesArray,
      });

      navigation.setParams({ exercise: undefined });
    }

    return preventBackUntilSaved(
      hasUnsavedChanges,
      () => navigation.navigate(StackScreens.ADD_PLAN, { workout }),
      navigation,
    );
  }, [hasUnsavedChanges, navigation, route.params.exercise, workout]);

  return (
    <TopContainer>
      <HeaderContainer>
        <HeaderText>{translate('workout.edit.header.name.text')}</HeaderText>
        <TextInput
          defaultValue={workout.name}
          placeholder={translate('workout.edit.header.name.placeholder')}
          onChangeText={(name) => {
            setWorkout({
              ...workout,
              name,
            });
            setUnsavedChanges(true);
          }}
        />
      </HeaderContainer>

      <ExerciseList>
        {workout.exercises.map((exercise, index) => (
          <Card
            title={exercise.name}
            subtitle={`${exercise.sets.length} ${translate(
              'workout.edit.sets',
            )}`}
            showOptions={true}
            key={exercise.id.toHexString() + index}
            onPress={() =>
              navigation.navigate(StackScreens.EDIT_EXERCISE, {
                exercise: {
                  ...exercise,
                  index,
                },
              })
            }
          />
        ))}
      </ExerciseList>

      <PlusButton
        onPress={() => {
          navigation.navigate(StackScreens.ADD_EXERCISE, {});
          setUnsavedChanges(true);
        }}
      />
    </TopContainer>
  );
};

export default EditWorkout;
