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

export const HelperText = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  font-size: 16px;
  margin-bottom: 5%;
  text-align: center;
`;
