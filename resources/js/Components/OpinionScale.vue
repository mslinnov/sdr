<template>
    <div>
        <div class="flex items-center flex-row">
            <div v-for="answer in answers"
                 class="w-12 flex items-center flex-col">
                <div class="text-gray-600 text-sm pb-2">
                    {{answer.quantity}} %
                </div>
                <div class=" h-32 flex flex-col flex-nowrap justify-end w-8 bg-gray-200rounded-sm overflow-hidden">
                    <div class="bg-sky-800 overflow-hidden" role="progressbar"
                         :style="{'height': answer.quantity_string}"
                         style="width: 100%" aria-valuenow="{{answer.quantity}}"
                         aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
                <div class="text-gray-600 text-sm pt-2">
                    {{ answer.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useCalculatePercent} from "@/Composables/useCalculatePercent";

const props = defineProps({
    responseElements: Array,
    current_survey_element: Object,
})

// Création des variable qui contiennent le total de toutes les réponses et un tableau avec les réponses courrantes
var totalAnswers = 0
var currentResponses = []

// Incrémentation du nombre total de recherche et du tableau de réponses courrantes
for (let [key, value] of props.responseElements){
    const intKey = parseInt(key)
    if(intKey === props.current_survey_element){
        totalAnswers = totalAnswers+1
        currentResponses.push(value)
    }
}


for (let rep of currentResponses){
}

// Calcule du pourcentage



const answers = [
    {name: 0, quantity: 0, quantity_string: "0%",},
    {name: 1, quantity: 0, quantity_string: "0%",},
    {name: 2, quantity: 0, quantity_string: "0%",},
    {name: 3, quantity: 0, quantity_string: "0%",},
    {name: 4, quantity: 0, quantity_string: "0%",},
    {name: 5, quantity: 0, quantity_string: "0%",},
    {name: 6, quantity: 5, quantity_string: "5%",},
    {name: 7, quantity: 10, quantity_string: "10%",},
    {name: 8, quantity: 46, quantity_string: "46%",},
    {name: 9, quantity: 27, quantity_string: "27%",},
    {name: 10, quantity: 12, quantity_string: "12%",},
]


</script>
