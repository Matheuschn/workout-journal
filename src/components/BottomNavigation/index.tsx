import React from 'react';
import {
  Button,
  ButtonContainer,
  ButtonText,
  MainContainer,
  Icon,
} from './styles';
import { TouchableNativeFeedback } from 'react-native';
import { useTheme } from 'styled-components';

const BottomNavigation = () => {
  const theme = useTheme();

  const ripple = TouchableNativeFeedback.Ripple(theme.text, true, 40);

  return (
    <MainContainer>
      <Button background={ripple}>
        <ButtonContainer>
          <Icon name="home" size={28} />
          <ButtonText>Home</ButtonText>
        </ButtonContainer>
      </Button>

      <Button background={ripple}>
        <ButtonContainer>
          <Icon name="history" size={28} />
          <ButtonText>History</ButtonText>
        </ButtonContainer>
      </Button>

      <Button background={ripple}>
        <ButtonContainer>
          <Icon name="notebook" size={28} />
          <ButtonText>Plans</ButtonText>
        </ButtonContainer>
      </Button>

      <Button background={ripple}>
        <ButtonContainer>
          <Icon name="poll" size={28} />
          <ButtonText>Progression</ButtonText>
        </ButtonContainer>
      </Button>
    </MainContainer>
  );
};

export default BottomNavigation;
