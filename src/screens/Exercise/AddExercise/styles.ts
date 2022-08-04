import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native';

export const TopContainer = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.card};
`;

export const FilterButton = styled.TouchableOpacity``;

export const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 3%;
`;

export const FilterText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  padding-left: 4%;
`;

export const FilterIcon = styled(Icon)`
  color: ${({ theme }) => theme.text};
`;

export const ExerciseList = styled.FlatList`
  padding-top: 3%;
` as unknown as typeof FlatList;

export const ExerciseCard = styled.TouchableOpacity`
  flex-direction: row;
  width: 90%;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 3%;
  padding-vertical: 5%;
  margin-vertical: 2%;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
`;

export const ExerciseCardText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 19px;
  padding-left: 4%;
`;

export const ExerciseCardIcon = styled(Icon)`
  color: ${({ theme }) => theme.text};
  padding-horizontal: 2%;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.primary,
}))`
  flex: 1;
`;
