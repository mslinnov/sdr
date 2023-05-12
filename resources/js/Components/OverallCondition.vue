<template>
    <div>
        <div class="flex items-center flex-row justify-center">
            <div v-for="overall_condition_type in overall_condition_type_values"
                 class="w-32 flex items-center flex-col">
                <div class="text-gray-600 text-2xl font-bold pb-4">
                    {{overall_condition_type.value}} %
                </div>
                <div class=" h-64 flex flex-col flex-nowrap justify-end w-16 bg-gray-200 rounded-md overflow-hidden">
                    <div class="bg-sky-800 overflow-hidden" role="progressbar"
                         :style="{'height': overall_condition_type.value_string}"
                         style="width: 100%" aria-valuenow="{{overall_condition_type.value}}"
                         aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
                <img :src="'/image/overall_condition_type/' + overall_condition_type.name.valueOf() + '.png'"
                     :alt="overall_condition_type.name + ' emoji'"
                     class="img_radio mt-6">
                <div class="text-gray-600 text-sm ">
                    {{ overall_condition_type.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useCalculatePercent} from "@/Composables/useCalculatePercent";

const props = defineProps({
    total_reviews: Array,
    overall_condition_types: Array,
})

const overall_condition_type_values = []

for (const overall_condition_type of props.overall_condition_types){
    const item = useCalculatePercent(props.total_reviews,overall_condition_type.id,0)
    overall_condition_type_values.push({
        name: overall_condition_type.name,
        value: item.percent.value,
        value_string: item.percent_string
    })
}

</script>
