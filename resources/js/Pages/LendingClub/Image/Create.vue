<template>

    <div class="p-6 shadow-sm flex flex-col gap-4">
        <div class="text-gray-500 dark:text-gray-100 font-medium">
            <div> Ecusson du club </div>
        </div>
        <img :src="lendingClubImage.src" alt="Ecusson du club" class="rounded-full object-contain h-20 w-20 m-auto mt-4">
        <form @submit.prevent="upload">
            <section class="flex gap-2 justify-between items-center">
                <input class="border rounded-md file:px-4 file:py-2 border-blue-600 file:mr-4 file:bg-slate-100 file:hover:bg-slate-200 file:font-medium file:text-blue-600 file:border-0 file:cursor-pointer"
                       type="file" @input="addFiles"/>
                <div class="flex gap-2">
                    <button type="submit" class="btn-outline-small disabled:opacity-25 disabled:cursor-not-allowed" :disabled="!canUpload">Upload</button>
                    <button type="reset" @click="reset" class="btn-outline-small">Reset</button>
                </div>
            </section>
        </form>
    </div>

</template>

<script setup>
import {computed, reactive} from "vue";
import Box from "@/Components/UI/Box.vue";
import {useForm} from "@inertiajs/inertia-vue3";
import {Inertia} from "@inertiajs/inertia";
import NProgress from 'nprogress'

const props = defineProps({
    lendingClub: Object,
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

const lendingClubImage = reactive({
    src: '/image/club/none.png',
})

function resetImage(){
    if (props.lendingClub.image){
        lendingClubImage.src = props.lendingClub.image.src
    }
}
resetImage()

const form = useForm({
    images: [],
})
const canUpload = computed(() => form.images.length)

const upload = () =>{
    form.post(
        route('lendingClub.image.store', {lendingClub: props.lendingClub.id}),{
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
