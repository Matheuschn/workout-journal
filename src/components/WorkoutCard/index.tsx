import React from 'react';
import {
  IconContainer,
  InfoContainer,
  MainButton,
  MainContainer,
  Icon,
  TitleText,
} from './styles';

interface Props {
  title: string;
}

const WorkoutCard: React.FC<Props> = ({ title }) => {
  return (
    <MainContainer>
      <MainButton rippleRadius={200} delayPressIn={100}>
        <IconContainer>
          <Icon name="dumbbell" size={40} />
        </IconContainer>
        <InfoContainer>
          <TitleText>{title}</TitleText>
        </InfoContainer>
      </MainButton>
    </MainContainer>
  );
};

export default WorkoutCard;
