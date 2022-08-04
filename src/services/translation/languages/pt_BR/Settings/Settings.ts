import { ThemeName, Units } from '../../../../../types';

export default {
  general: {
    header: 'Geral',
    language: {
      title: 'Idioma',
      dialog: {
        title: 'Selecione seu idioma:',
      },
    },
    theme: {
      title: 'Tema',
      dialog: {
        title: 'Selecione seu tema:',
      },
    },
    units: {
      title: 'Sistema de unidades',
      dialog: {
        title: 'Selecione seu sistema de unidades:',
      },
    },
  },
  preferences: {
    theme: {
      [ThemeName.LIGHT]: 'Claro',
      [ThemeName.DARK]: 'Escuro',
      [ThemeName.AUTO]: 'Automático (Sistema)',
    },
    units: {
      [Units.IMPERIAL]: 'Imperial',
      [Units.METRIC]: 'Métrico',
    },
  },
};
