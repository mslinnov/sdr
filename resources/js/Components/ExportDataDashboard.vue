<template>
    <section class="grid grid-cols-4 gap-4">
        <Box class="col-span-2 hover:cursor-pointer"
             @click="downloadData(lastWeek.day(1).format('YYYY-MM-DD'), lastWeek.day(7).format('YYYY-MM-DD'))">
            <div class="flex gap-4">
                <ArrowDownOnSquareIcon class="w-12"/>
                <div>
                    <h2 class="text-2xl font-medium">Semaine {{lastWeek.week()}}</h2>
                    <p class="text-sm">du {{lastWeek.day(1).format("DD MM YYYY")}} au {{lastWeek.day(7).format("DD MM YYYY")}}</p>
                </div>
            </div>
        </Box>
        <Box class="col-span-2 hover:cursor-pointer"
             @click="downloadData(thisWeek.day(1).format('YYYY-MM-DD'), thisWeek.day(7).format('YYYY-MM-DD'))">
            <div class="flex gap-4">
                <ArrowDownOnSquareIcon class="w-12"/>
                <div>
                    <h2 class="text-2xl font-medium">Semaine {{thisWeek.week()}}</h2>
                    <p class="text-sm">du {{thisWeek.day(1).format("DD MM YYYY")}} au {{thisWeek.day(7).format("DD MM YYYY")}}</p>
                </div>
            </div>
        </Box>
        <Box class="col-span-4">
            <div class="flex gap-4 w-full">
                <ArrowDownOnSquareIcon class="w-12"/>
                <div class="w-full">
                    <h2 class="text-2xl font-medium col-span-5">Dates personnalisées</h2>
                    <div class="flex w-full gap-4">
                        <vue-tailwind-datepicker as-single use-range
                                                 :formatter="formatter" :shortcuts="false"
                                                 v-model="rangeValue"/>
                        <button class="btn-outline-small disabled:opacity-25 disabled:cursor-not-allowed"
                                :disabled="rangeValue.length < 2"
                                @click="downloadRangeData">Télécharger</button>
                    </div>
                </div>
            </div>
        </Box>

    </section>

</template>


<script setup>
import moment from "moment";
import Box from "@/Components/UI/Box.vue";
import {ArrowDownOnSquareIcon} from "@heroicons/vue/24/outline";
import {ref} from "vue";
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

// Création des variables pour cette semaine et la précédentes
const thisWeek = moment()
const lastWeek = moment().add(-1,'weeks')
const rangeValue = ref([])
const formatter = ref({
    date: 'DD MMM YYYY',
    month: 'MMM'
})

function downloadRangeData(){
    downloadData(rangeValue.value[0], rangeValue.value[1])
}

function downloadData(startDate, endDate){
    const url = route('export', { startDate: startDate, endDate: endDate });
    window.open(url, '_blank');
}

</script>
