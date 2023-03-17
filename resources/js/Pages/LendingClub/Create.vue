<template>
    <div class="gap-x-24 items-center px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <h1 class="text-2xl font-semibold leading-relaxed text-gray-800 dark:text-gray-200">
            Create a new player
        </h1>
    </div>

    <div>

        <form @submit.prevent="register">
            <div class="flex flex-col items-center md:w-1/2 gap-4 m-auto">
                <div class="w-full mt-4">
                    <label for="name" class="form-label w-full">Name</label>
                    <input id="name" class="form-input"  v-model="form.name" type="text"/>
                </div>

            </div>

            <div class="flex col-span-6 mt-4 justify-center">
                <button class="btn-primary" type="submit">Create the club</button>
            </div>

        </form>
    </div>

</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3'

const form = useForm({
    name: null,
})

const register = () => form.post(route('lending-club.store'))

</script>
