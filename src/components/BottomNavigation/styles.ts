import styled from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MainContainer = styled.View`
  height: 11%;
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.TouchableNativeFeedback`
  flex: 1;
`;

export const ButtonContainer = styled.View`
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
