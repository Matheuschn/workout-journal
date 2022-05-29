import styled from 'styled-components/native';
import ButtonWithFeedback from '../ButtonWithFeedback';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MainContainer = styled.View`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.card};
  margin-bottom: 3%;
  border-radius: 15px;
`;

export const MainButton = styled(ButtonWithFeedback)`
  flex: 1;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(VectorIcon)`
  color: ${({ theme }) => theme.text};
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  margin-vertical: 5%;
`;

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
`;

export const SubtitleText = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
`;
