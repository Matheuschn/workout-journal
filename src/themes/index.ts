import {
  DefaultTheme as light,
  DarkTheme as dark,
  Theme as ThemeInterface,
} from '@react-navigation/native';

type ThemeColors = ThemeInterface['colors'];

declare module 'styled-components/native' {
  interface DefaultTheme extends ThemeColors {}
}

const Theme = {
  light,
  dark,
};

export default Theme;
