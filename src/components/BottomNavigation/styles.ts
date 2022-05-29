import styled from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonWithFeedback from '../ButtonWithFeedback';

export const MainContainer = styled.View`
  height: 11%;
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;


export const Button = styled(ButtonWithFeedback)`
  flex: 1;
  align-items: center;
`;

export const Icon = styled(VectorIcon)`
  color: ${({ theme }) => theme.text};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;
