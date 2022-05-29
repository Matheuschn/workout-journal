import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import ButtonWithFeedback from '../ButtonWithFeedback';

export const MainContainer = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.card};
  padding-horizontal: 5%;
  padding-top: 3%;
  margin-vertical: ${StyleSheet.hairlineWidth}px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.border};
`;

export const MainButton = styled(ButtonWithFeedback)`
  flex: 1;
`;

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 17px;
`;

export const SubtitleText = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-size: 13px;
`;
