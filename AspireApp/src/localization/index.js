import LocalizedStrings from 'react-localization';

// Localization introdused, Incase if we want to give multi language support in future, It helps
export const Constants = new LocalizedStrings({
  en: require('./i18n/en.json'),
});
