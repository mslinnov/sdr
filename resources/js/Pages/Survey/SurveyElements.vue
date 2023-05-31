<template>

    <div class="fixed top-10 mt-2 mr-2 z-20" v-if="formSubmit.error">
        <div class="bg-red-500 text-white py-2 px-4 rounded-lg">
            Veuillez sélectionner une réponse pour toutes les questions avant de valider le formulaire.
        </div>
    </div>

    <div v-if="!hadARespond.ThisWeek">
        <form @submit.prevent="createForm"
              class="flex flex-col items-center">
            <div class="w-full" v-for="surveyElement in survey.survey_elements" :id="'survey_element_'+surveyElement.id" :ref="'surveyElement'+surveyElement.id">
                <SurveyElementBox class="mt-8">
                    <template #image><img :src="'/image/icon/'+surveyElement.survey_input.image" class="img-survey-create"></template>
                    <template #title><div class="text-gray-500 font-medium text-sm text-center">  <span v-t="surveyElement.survey_input.title"></span></div></template>
                    <div v-if="surveyElement.element_type_id === 1" class="flex flex-row justify-evenly	 pt-3">
                        <div v-for="n in 10">
                            <input type="radio" :required="true"
                                   :id="'id_'+surveyElement.id+'_'+n"
                                   :value="n" :key="n"
                                   v-model="form[surveyElement.formid]"
                                   class="hidden peer cursor-pointer">

                                <label :for="'id_'+surveyElement.id+'_'+n"
                                       class="flex items-center flex-col justify-between w-7 text-center rounded-full p-1 cursor-pointer border-2 drop-shadow-sm
                              border-white hover:text-gray-600 hover:bg-blue-500
                              peer-checked:border-blue-500 peer-checked:border-2 peer-checked:bg-blue-600"
                                       :class="surveyElement.id === 5 ? 'survey-scale-selector-'+(11-n) :'survey-scale-selector-'+n"
                                @click="resetFormElement">
                                    <div class="text-xs text-gray-400 font-medium text-white">
                                        {{n}}
                                    </div>
                                </label>
                        </div>
                    </div>
                    <div v-if="surveyElement.element_type_id === 1"  class="w-full flex justify-between pt-1">
                        <div class="surveyLegend"><span v-t="surveyElement.survey_input.legend_1"></span></div>
                        <div class="surveyLegend"><span v-t="surveyElement.survey_input.legend_10"></span></div>
                    </div>
                    <div v-if="surveyElement.element_type_id === 2">
                        <input type="text"
                               :id="'id_'+surveyElement.id"
                               v-model="form[surveyElement.formid]"
                               class="form-input mt-4"
                               :placeholder="t(surveyElement.survey_input.placeholder)"
                               required>
                    </div>
                </SurveyElementBox>
            </div>

            <button type="submit" class="btn-primary-rounded mt-4 m-auto w-1/2">
                Submit
            </button>
        </form>
    </div>
    <div v-else>
        <SurveyCompleted/>
    </div>

</template>



<script setup>
import SurveyElementBox from "@/Components/UI/SurveyElementBox.vue";
import {useForm} from '@inertiajs/inertia-vue3'
import {reactive} from "vue";
import SurveyCompleted from "@/Components/UI/SurveyCompleted.vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
    survey: Object,
})


// Initialisation du tableau form qui contiendra les valeurs du formulaire
const formElement = {}
function resetFormElement() {
    for (const id in props.survey.survey_elements ){

        const surveyElement = props.survey.survey_elements[id]
        let surveyElementName = 'responseSurveyElement_'+surveyElement.id
        // Je rajouter un element formid au survey element courrant avec le nom du survey element à l'intérieur
        surveyElement['formid'] = surveyElementName
        if(surveyElement.element_type_id === 2 && surveyElement.survey_input.placeholder ){
            formElement[surveyElementName] = t(surveyElement.survey_input.placeholder)
        }
        else{
            formElement[surveyElementName] = null
        }
    }
    formElement['surveyId'] = props.survey.id
}
resetFormElement()

// Création d'une variable pour l'affichage d'un message d'erreur
const formSubmit = reactive({
    error: false
})

// Initialisation du formulaire pour récupérer les infos saisi par le joueur
const form = reactive(useForm(formElement));

// Vérification que tous les champs sont remplis avant d'envoyer le formulaire
const isFormValid = () => {
    const surveyElements = props.survey.survey_elements;

    for (let i = 0; i < surveyElements.length; i++) {
        const surveyElement = surveyElements[i];

        // If the survey element is a radio type, check if at least one radio button is checked
        if (surveyElement.element_type_id === 1) {
            const surveyElement_div = document.querySelector(`#survey_element_${surveyElement.id}`);
            const inputRadios = surveyElement_div.querySelectorAll('input[type="radio"]');
            let isSelected = Array.from(inputRadios).some(radio => radio.checked);

            if (!isSelected) {
                return false;
            }
        }
    }
    return true;
};


let hadARespond= reactive({ThisWeek:false})
const emitter = defineEmits(['surveyCompleted'])

let createForm;
createForm = () => {
    if (isFormValid()) {
        hadARespond.ThisWeek = true,
            emitter('surveyCompleted', props.survey.id),
            form.post(route('survey.store'));
    } else {
        formSubmit.error = true

        setTimeout(() => {
            formSubmit.error = false
        }, 3000)    }
};

</script>


