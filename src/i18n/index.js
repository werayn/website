import { I18n } from 'react-i18nify';
import en from './en';
import fr from './fr';

/**
 * @ignore
 */
const locale = navigator.language.split('-');

if (locale[0] !== 'en' && locale[0] !== 'fr') {
    locale[0] = 'en';
}

/**
 * @ignore
 */
I18n.setTranslations({
    fr,
    en,
});
//I18n.setLocale(locale[0]);
I18n.setLocale('fr');

export { I18n, locale };
