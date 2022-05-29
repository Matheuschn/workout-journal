import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import {
  IconContainer,
  InfoContainer,
  MainButton,
  MainContainer,
  Icon,
  TitleText,
  SubtitleText,
} from './styles';

interface Props {
  title: string;
  subtitle?: string;
  icon?: string;
}

const WorkoutCard: React.FC<TouchableWithoutFeedbackProps & Props> = ({
  title,
  subtitle,
  icon = 'dumbbell',
  ...props
}) => {
  return (
    <MainContainer>
      <MainButton rippleRadius={200} delayPressIn={100} {...props}>
        <IconContainer>
          <Icon name={icon} size={40} />
        </IconContainer>
        <InfoContainer>
          <TitleText>{title}</TitleText>
          {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
        </InfoContainer>
      </MainButton>
    </MainContainer>
  );
};

export default WorkoutCard;
