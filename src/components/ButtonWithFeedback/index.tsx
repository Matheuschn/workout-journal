import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import { useTheme } from 'styled-components';

interface Props {
  rippleRadius: number;
}

const ButtonWithFeedback: React.FC<TouchableWithoutFeedbackProps & Props> = ({
  rippleRadius,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  const ripple = TouchableNativeFeedback.Ripple(theme.text, true, rippleRadius);

  return (
    <TouchableNativeFeedback background={ripple} {...props}>
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  );
};

export default ButtonWithFeedback;
