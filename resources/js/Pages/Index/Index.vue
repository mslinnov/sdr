<template>
    <div class="gap-x-24 items-center px-4 py-2 border-gray-200 flex justify-between">
        <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">
            Export des données
        </h1>
    </div>

    <div>
        <ExportDataDashboard :weeks="weeks"/>
    </div>

    <div class="mt-4">
        <Link class="btn-primary-rounded" :href="route('notifyAllPlayers')">Envoyer notification</Link>
    </div>
<!--    <DashbordLayout>-->
<!--        <template #summary>-->

<!--            <div class="grid grid-cols-12 py-8 gap-8">-->
<!--                <Box class="col-span-12 lg:col-span-6">-->
<!--                    <template #header>Overall Condition</template>-->
<!--                    <OverallCondition-->
<!--                        :total_reviews="overall_condition"-->
<!--                        :overall_condition_types="overall_condition_types"-->
<!--                    />-->
<!--                </Box>-->
<!--                <Box class="col-span-6">-->
<!--                    <template #header>Survey</template>-->
<!--                    <div> <h2>Contenue</h2> </div>-->
<!--                </Box>-->
<!--                <Box class="col-span-6">-->
<!--                    <template #header>-->
<!--                        Injuries-->
<!--                    </template>-->
<!--                    <div> <h2>Contenue</h2> </div>-->
<!--                </Box>-->
<!--            </div>-->

<!--        </template>-->
<!--        <template #players>-->
<!--            <PlayerDashboard-->
<!--            :players="players"-->
<!--            :overall_condition_types="overall_condition_types"/>-->
<!--        </template>-->
<!--        <template #export>-->
<!--            <ExportDataDashboard :weeks="weeks"/>-->
<!--        </template>-->
<!--    </DashbordLayout>-->



</template>

<script setup>
import ExportDataDashboard from "@/Components/ExportDataDashboard.vue";
import {Link} from "@inertiajs/inertia-vue3";

const props = defineProps({
    overall_condition: Array,
    overall_condition_types: Array,
    players: Array,
    weeks: Array,
})


</script>

