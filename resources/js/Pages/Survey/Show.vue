<template>
    <SurveyAnswerLayout>

        <template #header>{{current_survey.name}}</template>

        <template #tab1>
            <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 my-4 gap-12">

                <div class="lg:col-span-8">
                    <div class="flex flex-col gap-4">
                        <div class="mb-2 text-xl">Response summary</div>
                        <div v-for="surveyElement in surveyElements">
                            <ResponseBox>
                                <template #average v-if="surveyElement.element_type_id === 1">
                                    <div class="avg-pil">
                                        Avg. 8.5
                                    </div>
                                </template>
                                <template #icon_number>
                                    <div  class="flex gap-2 items-center justify-end">
                                        <div class="flex rounded-md px-2 py-1.5 bg-sky-200 justify-between gap-3">
                                            <img class="icon-survey" :src="'/image/icon/'+ surveyElement.survey_input.image">
                                            {{surveyElement.order}}
                                        </div>
                                    </div>
                                </template>
                                <template #header>
                                    {{ surveyElement.survey_input.title }}
                                </template>
                                <div v-if="surveyElement.element_type_id === 1">
                                    <OpinionScale
                                    :response-elements="responseElements"
                                    :current_survey_element="surveyElement.id"/>
                                </div>
                            </ResponseBox>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 bg-green-600">
                    <div>Exporter les données</div>
                </div>

            </div>
        </template>

        <template #tab2>
            Tab 2
        </template>

    </SurveyAnswerLayout>
</template>

<script setup>
import {PlusIcon} from "@heroicons/vue/24/outline";
import {Link} from "@inertiajs/inertia-vue3";
import Box from "@/Components/UI/Box.vue";
import SurveyAnswerLayout from "@/Layouts/SurveyAnswerLayout.vue";
import ResponseBox from "@/Components/UI/ResponseBox.vue";
import {getElementTypeById} from "../../Composables/getElementTypeById";
import {getSurveyInputById} from "../../Composables/getSurveyInputById";
import OpinionScale from "@/Components/OpinionScale.vue";


const props = defineProps({
    survey: Array,
    surveyResponses: Array,
})

const current_survey = props.survey[0]
const surveyElements = current_survey.survey_elements
const responseElements = []

for (var surveyResponse in props.surveyResponses){
    for (var responseElement in props.surveyResponses[surveyResponse].reponse_elements){
        const response = props.surveyResponses[surveyResponse].reponse_elements[responseElement]
        var value = null

        if (response.survey_element.element_type_id === 1){
            value = parseInt(response.value)
        }else{
            value = response.value
        }

        responseElements.push([response.survey_element_id, value])
    }
}

</script>

<script>
import EmptyLayout from "@/Layouts/EmptyLayout.vue";

export default {
    layout: EmptyLayout
}
</script>
