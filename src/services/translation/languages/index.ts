import pt_BR from './pt_BR';
import en from './en';

//  Language tags that contain _ must be changed to -.
const translations = {
  'pt-BR': pt_BR,
  en,
} as const;

export const languages = {
  translations,
  tags: Object.keys(translations) as Array<Language>,
  default: 'en',
} as const;

export type Language = keyof typeof translations;
