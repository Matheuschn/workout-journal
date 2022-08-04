import React, { useEffect, useState } from 'react';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters, StackScreens } from '../../../routes/types';
import {
  ExerciseCard,
  ExerciseCardIcon,
  ExerciseCardText,
  ExerciseList,
  FilterButton,
  FilterContainer,
  FilterIcon,
  FilterText,
  LoadingIndicator,
  TopContainer,
} from './styles';
import { Database } from '../../../services/database';
import { HeaderContainer } from '../../Plan/AddPlan/styles';
import { ListRenderItem } from 'react-native';
import { Exercise } from '../../../types';
import { translate } from '../../../services/translation';

const AddExercise = ({
  navigation,
}: Props<StackParameters, StackScreens.ADD_EXERCISE>) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => setExercises(Database.getExercises()), []);

  const renderExercise: ListRenderItem<Exercise> = ({ item }) => (
    <ExerciseCard
      key={item.normalized_name}
      onPress={() =>
        navigation.navigate(StackScreens.EDIT_WORKOUT, { exercise: item })
      }>
      <ExerciseCardText>{item.name}</ExerciseCardText>
      <ExerciseCardIcon name="plus" size={30} />
    </ExerciseCard>
  );

  return (
    <TopContainer>
      <HeaderContainer>
        <FilterButton>
          <FilterContainer>
            <FilterIcon name="filter-variant" size={28} />
            <FilterText>
              {translate('exercise.add.header.filter.text')}
            </FilterText>
          </FilterContainer>
        </FilterButton>
      </HeaderContainer>
      {exercises.length ? (
        <ExerciseList
          data={exercises}
          renderItem={renderExercise}
          initialNumToRender={20}
          maxToRenderPerBatch={100}
        />
      ) : (
        <LoadingIndicator size={'large'} />
      )}
    </TopContainer>
  );
};

export default AddExercise;
