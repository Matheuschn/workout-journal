import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RGBtoHex } from '../../../utils';

export const TopContainer = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: 3%;
  padding-bottom: 3%;
  background-color: ${({ theme }) => theme.card};
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  padding-top: 4%;
  padding-bottom: 2%;
  padding-horizontal: 8%;
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: RGBtoHex(theme.text) + '99',
}))`
  margin-horizontal: 5%;
  padding-left: 3%;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.border};
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

export const ExerciseList = styled.ScrollView`
  padding-top: 3%;
  padding-horizontal: 5%;
`;
