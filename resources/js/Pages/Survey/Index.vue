<template>
    <main class="flex justify-between items-start border-b py-6 border-gray-200 dark:border-gray-400">
        <div class="flex flex-col justify-between pb-7">
            <h1 class="h1-title-primary">Surveys List</h1>
        </div>
        <div>
            <Link :href="route('survey.create')" class="btn-primary inline-flex">
                <PlusIcon class="text-white w-6 h-6"/>
                <span class="text-sm font-semibold tracking-wide">Create a new survey</span>
            </Link>
        </div>
    </main>

    <div class="grid grid-cols-6 gap-4 md:px-10 py-12 ">
        <Link class="col-span-6 md:col-span-2" v-for="survey in surveys" :href="'/survey/'+survey.id">
            <Box>
                <template #header>{{survey.name}}</template>
                <div class="text-xs font-medium text-gray-400 mt-4">
                    Dernière réponse le 14/02/2022
                </div>
            </Box>
        </Link>
    </div>


</template>

<script setup>
import {PlusIcon} from "@heroicons/vue/24/outline";
import {Link} from "@inertiajs/inertia-vue3";
import Box from "@/Components/UI/Box.vue";


const props = defineProps({
    surveys: Array
})

</script>
