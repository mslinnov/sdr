<template>
    <header class="flex justify-between items-end mb-4 border-b border-gray-400" >

        <div class="flex flex-col md:flex-row justify-center md:items-end gap-2 md:gap-4">
            <div class="flex items-end gap-4">
                <img :src="profil_picture_src"
                     :alt="'Photo de profile de '+ club.name"
                     class="w-28 object-cover object-top p-2">
                <h1 class="h1-title-primary pb-4">{{ club.name }}</h1>
            </div>
        </div>

        <Link :href="`/lending-club/${club.id}/edit`" class="btn-primary inline-flex mb-4">
            <PencilSquareIcon class="text-white w-6 h-6"/>
            <span class="text-sm font-semibold tracking-wide">Edit</span>
        </Link>

    </header>

    <main>
        <h1>Liste des joueurs prétés au club</h1>
    </main>

</template>

<script setup>
import {PencilSquareIcon} from "@heroicons/vue/24/outline";
import {Link} from "@inertiajs/inertia-vue3";

const props = defineProps({
    club: Object
})

const profil_picture_src = '/image/club/'+props.club.logo

</script>
