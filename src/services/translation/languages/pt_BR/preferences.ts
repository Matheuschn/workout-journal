import { ThemeName, Units } from '../../../../types';

export default {
  theme: {
    [ThemeName.LIGHT]: 'Claro',
    [ThemeName.DARK]: 'Escuro',
    [ThemeName.AUTO]: 'Automático (Sistema)',
  },
  units: {
    [Units.IMPERIAL]: 'Imperial',
    [Units.METRIC]: 'Métrico',
  },
};
