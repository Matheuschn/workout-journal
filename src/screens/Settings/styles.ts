import styled from 'styled-components/native';

export const TopContainer = styled.View`
  flex: 1;
`;

export const MainContainer = styled.ScrollView`
  flex: 1;
  margin-horizontal: 3%;
  margin-bottom: 3%;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  padding-top: 4%;
  padding-horizontal: 5%;
`;

export const SettingContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.card}
  border-radius: 15px;
  margin-top: 1%;
  overflow: hidden;
`;
