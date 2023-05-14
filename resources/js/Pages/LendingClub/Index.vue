<template>
    <main class="flex justify-between items-start">
        <div class="flex flex-col justify-between pb-7">
            <h1 class="h1-title-primary">Club list</h1>
        </div>
        <div>
            <Link :href="('lending-club/create')" class="btn-primary inline-flex">
                <PlusIcon class="text-white w-6 h-6"/>
                <span class="text-sm font-semibold tracking-wide">Add a club</span>
            </Link>
        </div>
    </main>


    <table  class="w-full ">
        <thead>
        <tr class="tr-head">
<!--            <td class="td-head">Club</td>-->
<!--            <td class="td-head">Players</td>-->
            <td class="td-head"></td>
        </tr>
        </thead>

        <tbody>
        <tr v-for="club in clubs.data" class="tr-body">
            <td class="td-body flex items-center justify-start gap-x-4">
                <img v-if="club.image" :src="club.image.src" alt="Logo du club emprunteur" class="w-8">
                <img v-else :src="'/image/club/none.png'" alt="Logo du club emprunteur" class="w-8">
                <span>{{club.name}}</span>
            </td>
<!--            <td class="td-body flex gap-4">-->
<!--                <div class="flex gap-4 items-center justify-center" v-for="(user, index) in club.users" :key="index">-->
<!--                    <Link :href="`/user/${user.id}`" class="flex-col gap-4">-->
<!--                        <img src="/image/joueur/ito_0.png" alt="Photo de profil du joueur prété" class="h-10 w-10 m-auto object-cover object-top">-->
<!--                        <div class="text-xs">{{ user.first_name }}</div>-->
<!--                        <div class="text-xs">{{ user.last_name }}</div>-->
<!--                    </Link>-->
<!--                </div>-->
<!--            </td>-->
            <td class="td-body">
                <div class="flex gap-x-2 items-center">
                    <Link :href="`/lending-club/${club.id}`"><EyeIcon class="w-6 h-6 color text-blue-700"/></Link>
                    <Link :href="`/lending-club/${club.id}/edit`"> <PencilSquareIcon class="w-6 h-6 color text-blue-700"/></Link>
                </div>
            </td>
        </tr>
        </tbody>
    </table>

    <div v-if="clubs.data.length" class="w-full flex justify-center my-8">
        <Pagination :links="clubs.links"/>
    </div>
</template>

<script setup>
import {PlusIcon, EllipsisVerticalIcon, EyeIcon, PencilSquareIcon} from "@heroicons/vue/24/outline";
import {Link} from "@inertiajs/inertia-vue3";
import Pagination from "@/Components/UI/Pagination.vue";

const props = defineProps({
    clubs: Object,
})

</script>
