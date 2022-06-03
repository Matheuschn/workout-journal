import styled from 'styled-components/native';
import ButtonWithFeedback from '../ButtonWithFeedback';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MainContainer = styled.View`
  width: 55px;
  height: 55px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 28px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const MainButton = styled(ButtonWithFeedback)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(VectorIcon)`
  color: white;
`;
