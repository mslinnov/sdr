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
        bodyPartsCreate: {
            select: 'Selects the painful body part',
            frontSelect: 'Front injuries',
            backSelect: 'Back injuries ',
            intensity: 'Pain intensity: ',
            rea: 'Are you in reathletization: ',
            Avant_Tete_Gauche: 'Left Forehead',
            Avant_Cou_Gauche: 'Left Fore Neck',
            Avant_Epaule_Gauche: 'Front Left Shoulder',
            Avant_Pectoraux_Gauche: 'Left Front Pectorals',
            Avant_Biceps_Gauche: 'Front Left Biceps',
            Avant_Coude_Gauche: 'Front Left Elbow',
            Avant_Bras_Gauche: 'Left Forearm',
            Avant_Poignet_Gauche: 'Front Left Wrist',
            Avant_Main_Gauche: 'Forearm Left Hand',
            Avant_Pectoraux_Gauche_2: 'Front Left Pectorals',
            Psoas_Gauche: 'Left Psoas',
            Aine_Gauche: 'Left Groin',
            Avant_Adducteur_Gauche: 'Front Left Adductor',
            Quadriceps_Gauche: 'Left Quadriceps',
            Avant_Genou_Gauche: 'Front Left Knee',
            Avant_Mollet_Gauche: 'Front Calf Left',
            Cheville_Gauche: 'Ankle Left',
            Pied_Gauche: 'Left Foot',
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
        global: {
            yes: 'Yes',
            no: 'No',
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
        bodyPartsCreate: {
            select: 'Sélectionne la partie du corps douloureuse',
            frontSelect: 'Blessures de face',
            backSelect: 'Blessures de dos ',
            intensity: 'Intensité de la douleur : ',
            rea: 'Es-tu en réathlétisation : ',
            Avant_Tete_Gauche: 'Avant Tete Gauche',
            Avant_Cou_Gauche: 'Avant Cou Gauche',
            Avant_Epaule_Gauche: 'Avant Epaule Gauche',
            Avant_Pectoraux_Gauche: 'Avant Pectoraux Gauche',
            Avant_Biceps_Gauche: 'Avant Biceps Gauche',
            Avant_Coude_Gauche: 'Avant Coude Gauche',
            Avant_Bras_Gauche: 'Avant Avant-Bras Gauche',
            Avant_Poignet_Gauche: 'Avant Poignet Gauche',
            Avant_Main_Gauche: 'Avant Main Gauche',
            Avant_Pectoraux_Gauche_2: 'Avant Pectoraux Gauche',
            Psoas_Gauche: 'Psoas Gauche',
            Aine_Gauche: 'Aine Gauche',
            Avant_Adducteur_Gauche: 'Avant Adducteur Gauche',
            Quadriceps_Gauche: 'Quadriceps Gauche',
            Avant_Genou_Gauche: 'Avant Genou Gauche',
            Avant_Mollet_Gauche: 'Avant Mollet Gauche',
            Cheville_Gauche: 'Cheville Gauche',
            Pied_Gauche: 'Pied Gauche',
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
        global: {
            yes: 'Oui',
            no: 'Non',
        },
    }
    // Vous pouvez ajouter d'autres langues ici
}

export const i18n = createI18n({
    legacy: false,
    locale: window.navigator.language, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})
