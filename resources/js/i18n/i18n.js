import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        appCreate: {
            welcome: 'Happy to see you again!',
            hello: 'Hi,',
            how_are_you: 'How are you?',
            submit: 'Submit',
            update: 'Update',
            edit: 'Edit',
            questionnaire: 'Questionnaire',
            injury: 'Injury',
        },
        days: {
            mon: 'Mon',
            tue: 'Tue',
            wed: 'Wed',
            thu: 'Thu',
            fri: 'Fri',
            sat: 'Sat',
            sun: 'Sun',
        },
    },
    fr: {
        appCreate: {
            welcome: 'Content de te revoir!',
            hello: 'Salut,',
            how_are_you: 'Comment vas-tu ?',
            submit: 'Soumettre',
            update: 'Mettre à jour',
            edit: 'Modifier',
            questionnaire: 'Questionnaire',
            injury: 'Blessure',
        },
        days: {
            mon: 'Lun',
            tue: 'Mar',
            wed: 'Mer',
            thu: 'Jeu',
            fri: 'Ven',
            sat: 'Sam',
            sun: 'Dim',
        },
    }
    // Vous pouvez ajouter d'autres langues ici
}

export const i18n = createI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})
