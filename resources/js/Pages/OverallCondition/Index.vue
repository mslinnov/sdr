<template>
    <div>
        <div class="gap-x-24 items-center px-4 py-2 border-b border-gray-200">
            <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">État de forme générale des joueurs</h1>
        </div>

        <Box class="col-span-12 lg:col-span-6 my-4">
            <OverallCondition
                :total_reviews="total_reviews"
                :overall_condition_types="overall_condition_types"
                :progressbar_height="64"
            />
        </Box>

    </div>
</template>

<script setup>
import OverallCondition from "@/Components/OverallCondition.vue";
import Box from "@/Components/UI/Box.vue";

const props = defineProps({
    total_reviews: Array,
    overall_condition_types: Array
})

</script>
