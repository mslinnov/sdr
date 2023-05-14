<template>
    <div class="gap-x-24 items-center px-4 py-2 border-b border-gray-200">
        <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">
            Edit player
        </h1>
    </div>

    <div>

        <form @submit.prevent="update">
            <div class="lg:grid lg:grid-cols-6">

                <div class="lg:col-span-3 p-4">
                    <Create
                    :user="user"
                    :title="'Photo de profile'"/>
                </div>


                <div class="lg:col-span-3 flex flex-col lg:p-4 gap-2">
                    <div>
                        <label for="firstname" class="form-label">Firstname</label>
                        <input id="firstname" class="form-input"  v-model="form.first_name" type="text"/>
                        <div v-if="form.errors.first_name" class="input-error">{{ form.errors.first_name }}</div>
                    </div>
                    <div>
                        <label for="lastname" class="form-label">Lastname</label>
                        <input id="lastname" class="form-input" v-model="form.last_name" type="text"/>
                        <div v-if="form.errors.last_name" class="input-error">{{ form.errors.last_name }}</div>
                    </div>
                    <div>
                        <label for="email" class="form-label">E-mail</label>
                        <input id="email" class="form-input" v-model="form.email" type="text"/>
                        <div v-if="form.errors.email" class="input-error">{{ form.errors.email }}</div>
                    </div>
                    <div>
                        <label for="phone" class="form-label">Phone</label>
                        <input id="phone" class="form-input" v-model="form.phone" type="text"/>
                        <div v-if="form.errors.phone" class="input-error">{{ form.errors.phone }}</div>
                    </div>
                    <div>
                        <label for="lending-club" class="form-label">Lending club</label>
                        <select id="lending-club" class="form-input" v-model="form.lending_club_id">
                            <option v-for="club in clubs" :value="club.id">{{club.name}}</option>
                        </select>
                        <div v-if="form.errors.lending_club_id" class="input-error">{{ form.errors.lending_club_id }}</div>
                    </div>
                    <div>
                        <label for="password" class="form-label">Password</label>
                        <input id="password" class="form-input" v-model="form.password" type="password" autocomplete="new-password"/>
                        <div v-if="form.errors.password" class="input-error">{{ form.errors.password }}</div>
                    </div>

                    <div>
                        <label for="password_confirmation" class="form-label">Confirm password</label>
                        <input id="password_confirmation" class="form-input" v-model="form.password_confirmation" type="password"/>
                    </div>
                </div>
            </div>

            <div class="flex col-span-6 mt-4 justify-center">
                <button class="btn-primary" type="submit">Update player</button>
            </div>

        </form>

    </div>

</template>

<script setup>
import { useForm, Link } from '@inertiajs/inertia-vue3'
import Create from "@/Pages/User/UserImage/Create.vue";


const props = defineProps({
    user: Object,
    clubs: Array,
})

const form = useForm({
    first_name: props.user.first_name,
    last_name: props.user.last_name,
    email: props.user.email,
    phone: props.user.phone,
    lending_club_id: props.user.lending_club_id,
    password: '',
    password_confirmation: '',
})

const update = () => form.put(`/user/${props.user.id}`)

</script>
