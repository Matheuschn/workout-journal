import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, ButtonText, MainContainer, Icon } from './styles';
import { StackNavigationProp as NavigationProp } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

const BottomNavigation: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParameters>>();

  return (
    <MainContainer>
      <Button rippleRadius={40} onPress={() => navigation.navigate('Home', {})}>
        <Icon name="home" size={28} />
        <ButtonText>Home</ButtonText>
      </Button>

      <Button rippleRadius={40}>
        <Icon name="history" size={28} />
        <ButtonText>History</ButtonText>
      </Button>

      <Button
        rippleRadius={40}
        onPress={() => navigation.navigate('Plans', {})}>
        <Icon name="notebook" size={28} />
        <ButtonText>Plans</ButtonText>
      </Button>

      <Button rippleRadius={40}>
        <Icon name="poll" size={28} />
        <ButtonText>Progression</ButtonText>
      </Button>
    </MainContainer>
  );
};

export default BottomNavigation;
