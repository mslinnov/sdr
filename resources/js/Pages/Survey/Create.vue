<template>
    <div class="h-12 max-w-screen-xl px-8 m-auto flex gap-4 items-center justify-center">
        <ul class="flex flex-wrap -mb-px">
            <li class="mr-2 flex" v-for="survey in surveys">
                <a  v-on:click="toggleTabs(survey.order)"  v-bind:class="{'app-inactive-tab': openTab !== survey.order, 'app-active-tab': openTab === survey.order}">{{ survey.name }}</a>
                <CheckCircleIcon v-if="hadARespondThisWeek[survey.id] || datas.surveyStatus[survey.id]" class="h-4 w-4 text-white bg-green-600 rounded-full -ml-2"/>
            </li>
        </ul>
    </div>

    <main class="max-w-screen-xl px-4 mx-auto">
        <div v-for="survey in surveys" v-bind:class="{'hidden': openTab !== survey.order, 'block': openTab === survey.order}">
            <div v-if="hadARespondThisWeek[survey.id]">
                <SurveyCompleted
                    :survey-questions="survey"
                    :survey-responses="surveyResponses"
                />
            </div>
            <div v-else>
                <SurveyElements
                    :survey="survey"
                    v-on:surveyCompleted="handle"/>
            </div>
        </div>
    </main>

</template>

<script setup>
import {CheckCircleIcon} from "@heroicons/vue/24/outline";
import moment from "moment/moment";
import {reactive} from "vue";
import SurveyCompleted from "@/Components/UI/SurveyCompleted.vue";
import {getHadRespondThisWeek} from "@/Composables/getHadRespondThisWeek";

const props = defineProps({
    surveys: Array,
    surveyResponses: Array,
})

const responses = props.surveyResponses

const datas = reactive({
    lastWeekTuesday: moment().day(-5),
    thisWeekTuesday: moment().day(2),
    editForm: false,
    surveyStatus: {},
})

function handle(surveyCompletedId){
    datas.surveyStatus[surveyCompletedId] = true
}

// Création d'un objet qui contient la date de la dernière réponse pour chaque formulaire
const hadARespondThisWeek = reactive({})
for (let survey of props.surveys){
    var id = survey.id
    const lastResponse = responses.filter(obj => {
        return obj.survey_id === id;
    })
    // Getting the last answer of the current survey
    const lastAnswer = lastResponse.slice(-1)[0]
    // If there is an answer
    if(lastResponse.length > 0){
        hadARespondThisWeek[id] = getHadRespondThisWeek(lastAnswer.updated_at) // Check if the answer was given this week
    }// If there is no answer
    else{ hadARespondThisWeek[id] = false }
}


</script>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import SurveyElements from "@/Pages/Survey/SurveyElements.vue";

export default {
    layout: AppLayout,
    name: "slate-tabs",
    components: { SurveyElements },
    data() {
        return {
            openTab: 1,
        }
    },
    methods: {
        toggleTabs: function(tabNumber){
            this.openTab = tabNumber
        }
    }
}


</script>

