<template>
    <div class="gap-x-24 items-center px-4 py-2 border-b border-gray-200">
        <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">
            Create a new player
        </h1>
    </div>

    <div>

        <form @submit.prevent="register">
            <div class="lg:grid lg:grid-cols-6 gap-4 mt-4">

                <div class="lg:col-span-3">
                    <label for="firstname" class="form-label">Firstname</label>
                    <input id="firstname" class="form-input"  v-model="form.first_name" type="text"/>
                    <div v-if="form.errors.first_name" class="input-error">{{ form.errors.first_name }}</div>
                </div>
                <div class="lg:col-span-3">
                    <label for="lastname" class="form-label">Lastname</label>
                    <input id="lastname" class="form-input" v-model="form.last_name" type="text"/>
                    <div v-if="form.errors.last_name" class="input-error">{{ form.errors.last_name }}</div>
                </div>
                <div class="lg:col-span-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input id="email" class="form-input" v-model="form.email" type="text"/>
                    <div v-if="form.errors.email" class="input-error">{{ form.errors.email }}</div>
                </div>
                <div class="lg:col-span-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input id="phone" class="form-input" v-model="form.phone" type="text"/>
                    <div v-if="form.errors.phone" class="input-error">{{ form.errors.phone }}</div>
                </div>
                <div class="lg:col-span-6">
                    <label for="lending_club" class="form-label">Lending club</label>
                    <select id="lending_club" class="form-input" v-model="form.lending_club_id">
                        <option v-for="club in clubs" :value="club.id">{{club.name}}</option>
                    </select>
                </div>
                <div class="lg:col-span-3">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" class="form-input" v-model="form.password" type="password"/>
                    <div v-if="form.errors.password" class="input-error">{{ form.errors.password }}</div>
                </div>

                <div class="lg:col-span-3">
                    <label for="password_confirmation" class="form-label">Confirm password</label>
                    <input id="password_confirmation" class="form-input" v-model="form.password_confirmation" type="password"/>
                </div>

            </div>

            <div class="flex col-span-6 mt-4 justify-center">
                <button class="btn-primary" type="submit">Create the player</button>
            </div>

        </form>
    </div>

</template>

<script setup>
import { useForm, Link } from '@inertiajs/inertia-vue3'

const props = defineProps({
    clubs: Array,
})

const form = useForm({
    first_name: null,
    last_name: null,
    email: null,
    phone: null,
    lending_club_id: null,
    password: null,
    password_confirmation: null,
})

const register = () => form.post(route('user.store'))

</script>
