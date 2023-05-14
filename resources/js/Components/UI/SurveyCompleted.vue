<template>

    <div v-if="currentSurveyResponses.length === 0" class="rounded-md shadow-sm text-gray-800 font-medium bg-white p-12 mx-auto mt-6 flex items-center">
        <CheckCircleIcon class="w-24 text-white bg-green-600 rounded-full mr-4"/>
        <p>Nous avons bien reçus ta réponse. Pense à bien remplir tous les formulaires.</p>
    </div>

    <div v-else class="relative rounded-md shadow-sm text-gray-800 font-medium bg-white p-12 mx-auto mt-6 flex flex-col gap-6 items-center">
        <CheckCircleIcon class="w-12 text-white bg-green-600 rounded-full mr-4 absolute -top-4 -left-4"/>
        <div v-for="duo in currentSurveyResponses" class="flex flex-col gap-2 w-full text-center items-center">
            <img :src="'/image/icon/'+ duo.emoji" class="img-survey-create">
            <div class="text-sm">
                {{duo.question}}
            </div>
            <div class="font-bold">
                {{duo.response}}
            </div>
            <div class="w-10/12 border-b border-gray-700"></div>
        </div>
    </div>

</template>

<script setup>
import {CheckCircleIcon} from "@heroicons/vue/24/outline";

const props = defineProps({
    surveyQuestions: Array,
    surveyResponses : Array
})

let currentSurveyResponses = []

if (props.surveyResponses){
    for (let response of props.surveyResponses){
        if (response.survey_id === props.surveyQuestions.id){
            for (let key in props.surveyQuestions.survey_elements){
                const duo = {
                    emoji: props.surveyQuestions.survey_elements[key].survey_input.image,
                    question: props.surveyQuestions.survey_elements[key].survey_input.title,
                    response:response.reponse_elements[key].value
                }
                currentSurveyResponses.push(duo)
            }
            break
        }
    }
}


</script>
