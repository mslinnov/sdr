<template>
    <Box>
        <template #header> {{ title }}</template>
        <img :src="user.user_image.src" v-if="user.user_image" alt="Photo de profil du joueur" class="rounded-full object-top object-cover h-60 w-60 m-auto mt-4">
        <form @submit.prevent="upload">
            <section class="flex-col sm:flex-row flex gap-2 justify-between items-center">
                <input class="w-full border rounded-md file:px-4 file:py-2 border-blue-600 file:mr-4 file:bg-slate-100 file:hover:bg-slate-200 file:font-medium file:text-blue-600 file:border-0 file:cursor-pointer"
                    type="file" @input="addFiles"/>
                <div class="flex gap-2">
                    <button type="submit" class="btn-outline-small disabled:opacity-25 disabled:cursor-not-allowed" :disabled="!canUpload">Upload</button>
                    <button type="reset" @click="reset" class="btn-outline-small">Reset</button>
                </div>
            </section>
        </form>

    </Box>
</template>

<script setup>
import {computed, reactive} from "vue";
import Box from "@/Components/UI/Box.vue";
import {useForm} from "@inertiajs/inertia-vue3";
import {Inertia} from "@inertiajs/inertia";
import NProgress from 'nprogress'
import moment from "moment";

const props = defineProps({
    user: Object,
    title: Object,
})

Inertia.on('progress', (event) => {
    if (event.detail.progress.percentage){
        NProgress.set((event.detail.progress.percentage/100)*0.9)
    }
    if (event.detail.progress.percentage === 100){
        setTimeout(function () { resetImage() }.bind(this), 1000)
    }
})

const userImage = reactive({
    src: '/image/joueur/silhouette.png',
})

function resetImage(){
    if (props.user.user_image){
        userImage.src = props.user.user_image.src
    }
}
resetImage()

const form = useForm({
    images: [],
})
const canUpload = computed(() => form.images.length)

const upload = () =>{
    form.post(
        route('user.image.store', {user: props.user.id}),{
            onSuccess: () => form.reset('images'),
        },
    )
}

const addFiles = (event) =>{
    for (const image of event.target.files){
        form.images.push(image)
    }
}

const reset = () => form.reset('images')

</script>
