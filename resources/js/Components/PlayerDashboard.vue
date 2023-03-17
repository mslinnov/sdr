<template>
    <div>
        <table class="w-full">
            <thead>
            <tr class="tr-head">
                <td class="td-head">Player</td>
                <td class="td-head"> Overall Condition</td>
                <td class="td-head"> Physique </td>
                <td class="td-head"> Sportif </td>
                <td class="td-head"> Vie quotidienne </td>
                <td class="td-head"> Blessure </td>
            </tr>
            </thead>
            <tbody>
                <tr class="tr-body" v-for="player in players">
                    <td class="td-body inline-flex items-center">
                        <img :src="'/image/joueur/ito_0.png'" alt="profil picture"
                             class="h-16 w-16 object-cover object-top">
                        {{player.first_name}} {{player.last_name}}</td>
                    <td class="td-body">
                        <div class="flex items-center justify-center flex-col">
                            <img :src="'/image/overall_condition_type/'+ getOverallConditionNameById(overall_condition_types, player.overall_conditions.slice(-1)) +'.png'"
                                 alt="Emoji of the last overall condition"
                                 class="w-8 h-8">
                            <span class="text-secondary"> {{ player.overall_conditions.slice(-1)[0] }} </span>
                        </div>
                    </td>
                    <td class="td-body"> Physique </td>
                    <td class="td-body"> Sportif </td>
                    <td class="td-body"> Vie quotidienne </td>
                    <td class="td-body"> Blessure </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script setup>
import {getOverallConditionNameById} from "@/Composables/getOverallConditionNameById";

const props = defineProps({
    players: Array,
    overall_condition_types: Array,
})


</script>
