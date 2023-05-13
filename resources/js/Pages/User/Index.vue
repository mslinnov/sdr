<template>
    <main class="flex justify-between items-start">
        <div class="flex flex-col justify-between pb-7">
            <h1 class="h1-title-primary">Players list</h1>
        </div>
        <div>
            <Link :href="('user/create')" class="btn-primary inline-flex">
                <PlusIcon class="text-white w-6 h-6"/>
                <span class="text-sm font-semibold tracking-wide">Add a player</span>
            </Link>
        </div>
    </main>


    <table  class="w-full ">
        <thead>
            <tr class="tr-head">
                <td class="td-head">Photo</td>
                <td class="td-head">Nom</td>
                <td class="td-head">Dernier état générale</td>
                <td class="td-head">Club de prêt</td>
                <td class="td-head"></td>
            </tr>
        </thead>

        <tbody>
        <tr v-for="user in players.data" class="tr-body">
            <td class="td-body w-6 h-6">
                <img v-if="user.user_image" :src="user.user_image.src" alt="profil picture">
                <img v-else :src="'/image/joueur/silhouette.png'" alt="profil picture">
            </td>
            <td class="td-body">{{user.first_name}} {{user.last_name}}</td>
            <td class=" td-body">
                <div class="flex items-center justify-center flex-col">
                    <img :src="'/image/overall_condition_type/'+getOverallConditionNameById(overall_condition_types, getLastOverallConditionType(total_reviews, user)).toLowerCase()+'.png'"
                         alt="Emoji of the last overall condition"
                         class="w-8 h-8">
                    <span class="text-secondary">{{
                            getOverallConditionNameById(overall_condition_types, getLastOverallConditionType(total_reviews, user))
                        }}</span>
                </div>
            </td>
            <td class="td-body">
                <div class="flex gap-x-2 items-center justify-center">
                    <Link :href="`/lending-club/${user.lending_club_id}`" class="flex gap-x-2 items-center justify-center">
<!--                        <img :src="'/image/club/'+getLendingClubById(props.clubs, user.lending_club_id).logo" alt="Ecusson du club emprunteur" class="h-10">-->
                        <img v-if="clubs[user.lending_club_id - 1].image" :src="clubs[user.lending_club_id - 1].image.src" alt="Ecusson du club emprunteur" class="h-10">
                        <span>{{ getLendingClubById(props.clubs, user.lending_club_id).name }}</span>
                    </Link>
                </div>
            </td>
            <td class="td-body">
                <div class="flex gap-x-2 items-center">
                    <Link :href="`/user/${user.id}`"><EyeIcon class="w-6 h-6 color text-blue-700"/></Link>
                    <Link :href="`/user/${user.id}/edit`"><PencilSquareIcon class="w-6 h-6 color text-blue-700"/></Link>
                </div>
            </td>
        </tr>
        </tbody>
    </table>

    <div v-if="players.data.length" class="w-full flex justify-center my-8">
        <Pagination :links="players.links"/>
    </div>
</template>

<script setup>
import {PlusIcon, EllipsisVerticalIcon, EyeIcon, PencilSquareIcon} from "@heroicons/vue/24/outline";
import {Link} from "@inertiajs/inertia-vue3";
import {getLastOverallConditionType} from "@/Composables/getLastOverallConditionType";
import {getOverallConditionNameById} from "../../Composables/getOverallConditionNameById";
import {getLendingClubById} from "@/Composables/getLendingClubById";
import Pagination from "@/Components/UI/Pagination.vue";

const props = defineProps({
    players: Object,
    total_reviews: Array,
    overall_condition_types: Array,
    clubs: Array
})

console.log(props.clubs[1])

</script>
