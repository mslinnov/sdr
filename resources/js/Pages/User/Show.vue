<template>
    <header class="flex justify-between items-start mb-4 border-b border-gray-400">

        <div class="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-4">
            <div>
                <img :src="profil_picture_src"
                     :alt="'Photo de profile de '+ user.first_name +' '+ user.last_name"
                     class="w-28 h-28 object-cover object-top">
            </div>
            <div class="flex flex-col">
                <h1 class="h1-title-primary">{{user.first_name}} {{user.last_name}}</h1>
                <p class="text-primary">Attaquant</p>
                <p class="text-secondary"> Club de prêt : {{ getLendingClubById(clubs, user.lending_club_id).name }}</p>
            </div>
            <div class="flex flex-col md:flex-row gap-2 md:gap-4">
                <p class="text-secondary">Email : {{user.email}}</p>
                <p class="text-secondary">Téléphone : {{user.phone}}</p>
            </div>
        </div>

        <div class="h-28 items-center flex">
            <Link :href="`/user/${user.id}/edit`" class="btn-primary inline-flex">
                <PencilSquareIcon class="text-white w-6 h-6"/>
                <span class="text-sm font-semibold tracking-wide">Edit</span>
            </Link>
        </div>

    </header>

    <main  class="grid grid-cols-12 py-8 gap-8">
        <Box class="col-span-12 lg:col-span-6">
            <template #header>
                Overall Condition
            </template>
            <OverallCondition
                :total_reviews="total_reviews"
                :overall_condition_types="overall_condition_types"
                :progressbar_height="64"/>
        </Box>
    </main>

</template>

<script setup>
import {PencilSquareIcon} from "@heroicons/vue/24/outline";
import {Link} from "@inertiajs/inertia-vue3";
import OverallCondition from "@/Components/OverallCondition.vue";
import Box from "@/Components/UI/Box.vue";
import {getLendingClubById} from "@/Composables/getLendingClubById";

const props = defineProps({
    total_reviews: Array,
    overall_condition_types: Array,
    user: Object,
    clubs: Array
})

let profil_picture_src = '/image/joueur/silhouette.png'

if (props.user.user_image){
    profil_picture_src = props.user.user_image.src
}

</script>
