import i18n from 'i18n-js';
import { Database } from '../database';
import { Language, languages } from './languages';

i18n.translations = languages.translations;
i18n.defaultLocale = languages.default;
i18n.fallbacks = true;

export const setLocale = (locale: Language) => {
  if (locale !== i18n.locale) {
    i18n.locale = locale;
  }
};

Database.addPreferencesListener(({ language }) => setLocale(language));

export const translate = (
  scope: i18n.Scope,
  options?: i18n.TranslateOptions,
): string => i18n.t(scope, options);
