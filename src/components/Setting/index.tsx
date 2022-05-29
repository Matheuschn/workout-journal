import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { MainButton, MainContainer, TitleText, SubtitleText } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

const Setting: React.FC<TouchableWithoutFeedbackProps & Props> = ({
  title,
  subtitle,
  ...props
}) => {
  return (
    <MainContainer>
      <MainButton
        rippleRadius={400}
        delayPressIn={100}
        delayPressOut={100}
        {...props}>
        <TitleText>{title}</TitleText>
        <SubtitleText>{subtitle}</SubtitleText>
      </MainButton>
    </MainContainer>
  );
};

export default Setting;
