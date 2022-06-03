import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { MainButton, MainContainer, Icon } from './styles';

const PlusButton: React.FC<TouchableWithoutFeedbackProps> = (props) => {
  return (
    <MainContainer>
      <MainButton rippleRadius={100} {...props}>
        <Icon name="plus" size={30} />
      </MainButton>
    </MainContainer>
  );
};

export default PlusButton;
