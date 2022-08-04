import { ThemeName, Units } from '../../../../../types';

export default {
  general: {
    header: 'General',
    language: {
      title: 'Language',
      dialog: {
        title: 'Select your language:',
      },
    },
    theme: {
      title: 'Theme',
      dialog: {
        title: 'Select your theme:',
      },
    },
    units: {
      title: 'System of measurement',
      dialog: {
        title: 'Select your system of measurement:',
      },
    },
  },
  preferences: {
    theme: {
      [ThemeName.LIGHT]: 'Light',
      [ThemeName.DARK]: 'Dark',
      [ThemeName.AUTO]: 'Auto (System)',
    },
    units: {
      [Units.IMPERIAL]: 'Imperial',
      [Units.METRIC]: 'Metric',
    },
  },
};
