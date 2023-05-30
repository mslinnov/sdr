<!-- TODO: Ajouter un bouton d'installation du projet sur smartphone -->
<template>
    <div class="w-full p-4">
        <h2 class="text-center"><span v-t="'AuthMyAccount.title'"></span></h2>
    </div>
    <div class="flex flex-col gap-4 items-center px-10">

        <img :src="user.image" v-if="user.image"
             :alt="'Photo de profil du joueur '+user.first_name"
             class="h-40 w-40 rounded-full object-cover object-top	">

        <form v-show="edit.profil" class="w-full flex flex-col items-center gap-4" @submit.prevent="update">
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <IdentificationIcon class="icon-primary"/>
                    <label for="firstname" class="text-primary"><span v-t="'AuthMyAccount.first_name'"></span></label>
                </div>
                <input id="firstname" class="edit-input" v-model="form.first_name" type="text"/>
                <div v-if="form.errors.first_name" class="input-error">{{ form.errors.first_name }}</div>
            </div>
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <IdentificationIcon class="icon-primary"/>
                    <label for="lastname" class="text-primary"><span v-t="'AuthMyAccount.last_name'"></span></label>
                </div>
                <input id="lastname" class="edit-input" v-model="form.last_name" type="text"/>
                <div v-if="form.errors.last_name" class="input-error">{{ form.errors.last_name }}</div>
            </div>
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <EnvelopeIcon class="icon-primary"/>
                    <label for="email" class="text-primary"><span v-t="'AuthMyAccount.email'"></span></label>
                </div>
                <input id="email" class="edit-input" v-model="form.email" type="text"/>
                <div v-if="form.errors.email" class="input-error">{{ form.errors.email }}</div>
            </div>
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <PhoneIcon class="icon-primary"/>
                    <label for="phone" class="text-primary"><span v-t="'AuthMyAccount.phone'"></span></label>
                </div>
                <input id="phone" class="edit-input" v-model="form.phone" type="tel"/>
                <div v-if="form.errors.phone" class="input-error">{{ form.errors.phone }}</div>
            </div>

            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <LockClosedIcon class="icon-primary"/>
                    <label for="password" class="text-primary"><span v-t="'AuthMyAccount.password'"></span></label>
                </div>
                <input id="password" class="edit-input" v-model="form.password" type="password"  placeholder="********"/>
            </div>
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <LockClosedIcon class="icon-primary"/>
                    <label for="password_confirmation" class="text-primary"><span v-t="'AuthMyAccount.confirmation'"></span></label>
                </div>
                <input id="password_confirmation" class="edit-input" v-model="form.password_confirmation" type="password" placeholder="********"/>
            </div>
            <div v-if="form.errors.password" class="input-error">{{ form.errors.password }}</div>

            <div class="flex gap-4 items-center w-full md:w-1/2">
                <button class="btn-primary-rounded w-2/3 md:w-2/3 text-center" type="submit">
                    <span v-t="'AuthMyAccount.save'"></span>
                </button>
                <button class="alert-primary-rounded w-2/3 md:w-2/3 text-center" type="button" @click="showEditProfil">
                    <span v-t="'AuthMyAccount.cancel'"></span>
                </button>
            </div>
        </form>

        <section v-show="!edit.profil"  class="w-full flex flex-col items-center gap-4">
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <IdentificationIcon class="icon-primary"/>
                    <label for="show_firstname" class="text-primary"><span v-t="'AuthMyAccount.first_name'"></span></label>
                </div>
                <input id="show_firstname" class="no-edit-input" v-model="form.first_name" type="text"/>
            </div>
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <IdentificationIcon class="icon-primary"/>
                    <label for="show_lastname" class="text-primary"><span v-t="'AuthMyAccount.last_name'"></span></label>
                </div>
                <input id="show_lastname" class="no-edit-input" v-model="form.last_name" type="text"/>
                <div v-if="form.errors.last_name" class="input-error">{{ form.errors.last_name }}</div>
            </div>
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <EnvelopeIcon class="icon-primary"/>
                    <label for="show_email" class="text-primary"><span v-t="'AuthMyAccount.email'"></span></label>
                </div>
                <input id="show_email" class="no-edit-input" v-model="form.email" type="text"/>
                <div v-if="form.errors.email" class="input-error">{{ form.errors.email }}</div>
            </div>
            <div class="my-account-input-box">
                <div class="inline-flex gap-2 items-center">
                    <PhoneIcon class="icon-primary"/>
                    <label for="show_phone" class="text-primary"><span v-t="'AuthMyAccount.phone'"></span></label>
                </div>
                <input id="show_phone" class="no-edit-input" v-model="form.phone" type="tel"/>
                <div v-if="form.errors.phone" class="input-error">{{ form.errors.phone }}</div>
            </div>
            <div class="flex flex-col items-center w-full md:w-1/2">
                <button class="btn-primary-rounded w-2/3 md:w-2/3 text-center" type="button" @click="showEditProfil">
                    <span v-t="'AuthMyAccount.edit'"></span>
                </button>
            </div>
        </section>
    </div>


    <div class="flex flex-col gap-4 items-center p-10">
        <div><Link class="text-center text-md" v-if="showInstallButton" @click="installPWA"> <span v-t="'AuthMyAccount.install'"></span></Link></div>
        <div id="push-permission"></div>
        <div><Link class="text-center text-xs" :href="route('logout')" method="delete" as="button"> <span v-t="'AuthMyAccount.log_out'"></span> </Link></div>
    </div>

</template>

<script setup>
import { IdentificationIcon, EnvelopeIcon, PhoneIcon, LockClosedIcon } from '@heroicons/vue/24/solid'
import {Link, usePage, useForm} from "@inertiajs/inertia-vue3";
import {computed, reactive, ref} from "vue";
import { onMounted } from 'vue';
import { main } from '/public/app.js';
onMounted(() => {
    main();
});

const edit = reactive({profil: false});
const page = usePage()
const user = computed(
    () => page.props.value.user
)

const form = useForm({
    first_name: user.value.first_name,
    last_name: user.value.last_name,
    email: user.value.email,
    phone: user.value.phone,
    password: user.value.password,
    password_confirmation: null,
})

const update = () => form.put(`/user/${page.props.value.user.id}`)

function showEditProfil(){
    edit.profil = !edit.profil
}

const showInstallButton = ref(false);
const deferredPrompt = ref(null);

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt.value = event;
    showInstallButton.value = true;
});

function installPWA() {
    deferredPrompt.value.prompt();
    deferredPrompt.value.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('L\'application a été installée.');
        } else {
            console.log('L\'application n\'a pas été installée.');
        }
        showInstallButton.value = false;
        deferredPrompt.value = null;
    });
}

</script>



<!-- Association du template d'application à la vue -->
<script>
import AppLayout from "@/Layouts/AppLayout.vue";
export default {
    layout: AppLayout
}
</script>
