<template>
    <div class="gap-x-24 items-center px-4 py-2 border-b border-gray-200">
        <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">
            Edit the club
        </h1>
    </div>

    <div>

        <form @submit.prevent="update">
            <div class="flex flex-col items-center md:w-1/2 gap-4 m-auto">
                <div class="w-full">
                    <label for="name" class="form-label w-full">Nom</label>
                    <input id="name" class="form-input"  v-model="form.name" type="text"/>
                </div>
                <Create :lending-club="club"/>

            </div>

            <div class="flex col-span-6 mt-4 justify-center">
                <button class="btn-primary" type="submit">Update the club</button>
            </div>

        </form>
    </div>

</template>

<script setup>
import { useForm, Link } from '@inertiajs/inertia-vue3'
import Create from "@/Pages/LendingClub/Image/Create.vue";

const props = defineProps({
    club: Object,
})

console.log(props.club.name)

const form = useForm({
    name: props.club.name,
})

const update = () => form.put(route('lending-club.update', props.club.id))

</script>
