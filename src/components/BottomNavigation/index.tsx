import React from 'react';
import { Button, ButtonText, MainContainer, Icon } from './styles';

const BottomNavigation: React.FC = () => {
  return (
    <MainContainer>
      <Button rippleRadius={40}>
        <Icon name="home" size={28} />
        <ButtonText>Home</ButtonText>
      </Button>

      <Button rippleRadius={40}>
        <Icon name="history" size={28} />
        <ButtonText>History</ButtonText>
      </Button>

      <Button rippleRadius={40}>
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
