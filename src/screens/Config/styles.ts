import styled from 'styled-components/native';

export const TopContainer = styled.View`
  flex: 1;
`;

export const MainContainer = styled.ScrollView`
  flex: 1;
  margin: 5%;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 22px;
  margin-bottom: 5%;
`;
