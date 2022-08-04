import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeaderButtonContainer = styled.TouchableOpacity`
  margin-horizontal: 15px;
`;

export const HeaderButtonIcon = styled(Icon)`
  color: ${({ theme }) => theme.text};
  padding-horizontal: 1%;
`;
