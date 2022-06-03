import { ThemeName, Units } from '../../../../types';

export default {
  theme: {
    [ThemeName.LIGHT]: 'Light',
    [ThemeName.DARK]: 'Dark',
    [ThemeName.AUTO]: 'Auto (System)',
  },
  units: {
    [Units.IMPERIAL]: 'Imperial',
    [Units.METRIC]: 'Metric',
  },
};
