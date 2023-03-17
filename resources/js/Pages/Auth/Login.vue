<!--TODO: Ajouté la fonctionnalité de mot de passe oublié-->
<template>

    <form @submit.prevent="login">
        <div class="w-full md:w-1/2 mx-auto">
            <div>
                <label for="email" class="form-label">E-mail</label>
                <input id="email" type="text" class="form-input" v-model="form.email" />
                <div class="input-error" v-if="form.errors.email">{{form.errors.email}}</div>
            </div>
            <div class="mt-4">
                <label for="password" class="form-label">Password</label>
                <input id="password" type="password" class="form-input" v-model="form.password" autocomplete="on"/>
                <div class="input-error" v-if="form.errors.password">{{form.errors.password}}</div>
            </div>
            <div  class="mt-4">
                <button class="btn-primary-rounded w-full text-center" type="submit">Login</button>
            </div>
        </div>
    </form>

</template>

<script setup>
import {useForm} from "@inertiajs/inertia-vue3";

const form = useForm({
    email: null,
    password: null,
})

const login = () => form.post(route('login.store'))
</script>


<!-- Association du template de login -->
<script>
import LoginLayout from "@/Layouts/LoginLayout.vue";
export default {
    layout: LoginLayout
}
</script>
