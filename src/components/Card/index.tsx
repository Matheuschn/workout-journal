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
  OptionsButton,
} from './styles';

interface Props {
  title: string;
  showOptions?: boolean;
  subtitle?: string;
  icon?: string;
}

const Card: React.FC<TouchableWithoutFeedbackProps & Props> = ({
  title,
  subtitle,
  icon,
  showOptions = false,
  ...props
}) => {
  return (
    <MainContainer>
      <MainButton
        rippleRadius={200}
        delayPressIn={100}
        delayPressOut={100}
        {...props}>
        {icon && (
          <IconContainer>
            <Icon name={icon} size={40} />
          </IconContainer>
        )}
        <InfoContainer>
          <TitleText>{title}</TitleText>
          {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
        </InfoContainer>
        {showOptions && (
          <OptionsButton>
            <Icon name="dots-vertical" size={30} />
          </OptionsButton>
        )}
      </MainButton>
    </MainContainer>
  );
};

export default Card;
