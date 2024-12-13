import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './English.json';
import dutch from './Dutch.json';

const resources = {
    dh: {
        translation: dutch
    },
    eg: {
        translation: english
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'dh',
        fallbackLng: 'dh',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
