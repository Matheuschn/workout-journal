import React, { useEffect, useState } from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters, StackScreens } from '../../../routes/types';
import {
  HeaderText,
  HeaderContainer,
  TextInput,
  TopContainer,
  WorkoutList,
  AddWorkoutButton,
  AddWorkoutText,
  AddWorkoutIcon,
} from './styles';
import { Workout } from '../../../types';
import Card from '../../../components/Card';
import preventBackUntilSaved from '../../../components/PreventBackUntilSaved';
import { translate } from '../../../services/translation';

const AddPlan = ({
  navigation,
  route,
}: Props<StackParameters, StackScreens.ADD_PLAN>) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [hasUnsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    if (route.params.workout) {
      const updatedWorkout = route.params.workout;

      const updatedWorkoutArray = workouts.map((workout) =>
        workout.id.equals(updatedWorkout.id) ? updatedWorkout : workout,
      );

      setWorkouts(updatedWorkoutArray);

      navigation.setParams({ workout: undefined });
    }

    return preventBackUntilSaved(
      hasUnsavedChanges,
      () => navigation.goBack(), //  TODO: SAVE TO DATABASE
      navigation,
    );
  }, [navigation, hasUnsavedChanges, route.params.workout, workouts]);

  const addWorkout = () => {
    const name = `${translate('plan.add.addWorkout.day')} ${
      workouts.length + 1
    }`;

    const workout: Workout = {
      id: new Realm.BSON.UUID(),
      name,
      exercises: [],
    };

    setWorkouts([...workouts, workout]);
    setUnsavedChanges(true);
  };

  return (
    <TopContainer>
      <HeaderContainer>
        <HeaderText>{translate('plan.add.header.name.text')}</HeaderText>
        <TextInput
          placeholder={translate('plan.add.header.name.placeholder')}
          onChangeText={() => setUnsavedChanges(true)}
        />

        <HeaderText>{translate('plan.add.header.description.text')}</HeaderText>
        <TextInput
          placeholder={translate('plan.add.header.description.placeholder')}
          onChangeText={() => setUnsavedChanges(true)}
        />
      </HeaderContainer>

      <WorkoutList>
        {workouts.map((workout) => (
          <Card
            title={workout.name}
            key={workout.id.toHexString()}
            showOptions={true}
            onPress={() =>
              navigation.navigate(StackScreens.EDIT_WORKOUT, { workout })
            }
          />
        ))}
      </WorkoutList>

      <AddWorkoutButton onPress={addWorkout}>
        <AddWorkoutIcon name="plus-circle-outline" size={24} />
        <AddWorkoutText>
          {translate('plan.add.addWorkout.buttonText')}
        </AddWorkoutText>
      </AddWorkoutButton>
    </TopContainer>
  );
};

export default AddPlan;
