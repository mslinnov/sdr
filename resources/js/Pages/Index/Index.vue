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

