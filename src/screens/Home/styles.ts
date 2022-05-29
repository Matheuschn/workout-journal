import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ConfigContainer = styled.TouchableOpacity`
  margin-horizontal: 15px;
`;

export const ConfigIcon = styled(Icon)`
  color: ${({ theme }) => theme.text};
`;
