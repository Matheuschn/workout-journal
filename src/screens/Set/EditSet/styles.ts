import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const TopContainer = styled.ScrollView`
  flex: 1;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 22px;
  padding-top: 4%;
  padding-bottom: 2%;
  padding-horizontal: 8%;
`;

export const SettingContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.card}
  border-radius: 15px;
  margin-top: 1%;
  overflow: hidden;
  align-self: center;
  width: 90%;
`;

export const Setting = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-color: ${({ theme }) => theme.border};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  padding-horizontal: 5%;
  padding-vertical: 5%;
`;

export const SettingText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 15px;
`;
