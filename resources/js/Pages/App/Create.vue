<template>
    <main class="bg-slate-50 w-full pb-10 pt-2">
        <div class="pb-4 m-4">
            <h1 v-t="'appCreate.welcome'"  class="font-medium text-2xl "></h1>
            <span v-t="'appCreate.hello'"></span> <span>{{user.first_name}}</span>
        </div>
        <div>
            <h2 v-t="'appCreate.how_are_you'" class="font-medium text-xl pb-4 ml-4"></h2>

            <div v-if="!datas.hadARespondThisWeek">
                <form @submit.prevent="create" id="overallConditionCreateForm">
                    <div class="flex items-center flex-row justify-center gap-4 ">
                        <div v-for="overall_condition_type in overall_condition_types">
                            <input type="radio"
                                   :id="overall_condition_type.id"
                                   :value="overall_condition_type.id"
                                   v-model="form.overall_condition_choice"
                                   :key="overall_condition_type.id"
                                   class="hidden peer cursor-pointer"
                            />
                            <label :for="overall_condition_type.id"
                                   class="overallCondition_btn flex items-center flex-col justify-between w-20 text-center rounded-md px-4 py-2 bg-white cursor-pointer border border-white drop-shadow-sm
                               peer-checked:border-blue-600 peer-checked:bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                            >
                                <img :src="'/image/overall_condition_type/' + overall_condition_type.image"
                                     :alt="overall_condition_type.name + ' emoji'"
                                     class="w-10 pb-3"
                                     :key="overall_condition_type.id">
                                <div class="text-sm text-gray-400 font-medium">
                                    <span v-t="overall_condition_type.name"></span>
                                </div>
                            </label>
                            <br>
                        </div>
                    </div>
                    <div class="flex items-center flex-col">
                        <button type="submit"
                                class="btn-primary-rounded"
                                :disabled="!form.overall_condition_choice">
                            <span v-t="'appCreate.submit'"></span>
                        </button>
                    </div>

                </form>
            </div>
            <div v-else-if="datas.editForm">
                <form @submit.prevent="update" id="overallConditionUpdateForm">
                    <div class="flex items-center flex-row justify-center gap-4 ">
                        <div v-for="overall_condition_type in overall_condition_types">
                            <input type="radio"
                                   :id="overall_condition_type.id"
                                   :value="overall_condition_type.id"
                                   v-model="updateForm.overall_condition_choice"
                                   :key="overall_condition_type.id"
                                   class="hidden peer cursor-pointer"
                            />
                            <label :for="overall_condition_type.id"
                                   class="overallCondition_btn flex items-center flex-col justify-between w-20 text-center rounded-md px-4 py-2 bg-white cursor-pointer border border-white drop-shadow-sm
                               peer-checked:border-blue-600 peer-checked:bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                            >
                                <img :src="'/image/overall_condition_type/' + overall_condition_type.image"
                                     :alt="overall_condition_type.name + ' emoji'"
                                     class="w-10 pb-3"
                                     :key="overall_condition_type.id">
                                <div class="text-sm text-gray-400 font-medium">
                                    {{overall_condition_type.name}}
                                </div>
                            </label>
                            <br>
                        </div>
                    </div>
                    <div class="flex items-center flex-col display-none">
                        <button type="submit"
                                id="update_condition"
                                class="btn-primary-rounded"
                                :disabled="!updateForm.overall_condition_choice">
                            <span v-t="'appCreate.update'"></span>
                        </button>
                    </div>

                </form>
            </div>
            <div v-else>
                <div class="flex items-center justify-between mx-12">
                    <div class="flex items-center">
                        <img :src="'/image/overall_condition_type/' + lastCondition.name.toLowerCase() + '.png'"
                             :alt="lastCondition.name + ' emoji'"
                             class="h-12 w-12">
                        <div class="text-gray-600 text-sm ">
                            {{ lastCondition.name }}
                        </div>
                    </div>
                    <div class="flex items-center flex-col">
                        <button type="submit"
                                class="btn-primary-rounded"
                                @click="editFormSwitch">
                            <span v-t="'appCreate.edit'"></span>
                        </button>
                    </div>

                </div>
            </div>

        </div>
        <div class="flex flex-col m-4 gap-4">
            <Link :href="route('survey.create')" class="flex justify-between px-4 py-2 bg-white items-center rounded-2xl drop-shadow-md">
                <div class="flex justify-start gap-4 items-center">
                    <div class="rounded-full bg-blue-100 p-3">
                        <img :src="'/image/icon/formulaire.png'" alt="Icone de formulaire" class="aspect-square w-10 object-contain object-center">
                    </div>
                    <div class="text-blue-600 font-bold"><span v-t="'appCreate.questionnaire'"></span></div>
                </div>
                <ChevronRightIcon class="h-6 w-6 text-gray-700"/>
            </Link>
            <Link :href="route('bodyParts')" class="flex justify-between px-4 py-2 bg-white items-center rounded-2xl drop-shadow-md">
                <div class="flex justify-start gap-4 items-center">
                    <div class="rounded-full bg-blue-100 p-3">
                        <img :src="'/image/icon/blessures.png'" alt="Icone de formulaire" class="aspect-square w-10 object-contain object-center">
                    </div>
                    <div class="text-blue-600 font-bold"><span v-t="'appCreate.injury'"></span></div>
                </div>
                <ChevronRightIcon class="h-6 w-6 text-gray-700"/>
            </Link>
        </div>
    </main>

</template>

<script setup>
import {useForm, Link, usePage} from '@inertiajs/inertia-vue3'
import {ChevronRightIcon } from '@heroicons/vue/24/solid'
import {computed, reactive, ref} from "vue";
import {getOverallConditionNameById} from "@/Composables/getOverallConditionNameById";
import {getHadRespondThisWeek} from "@/Composables/getHadRespondThisWeek";

const props = defineProps({
    overall_condition_types: Array,
    last_user_condition: Object,
})
const page = usePage()
const user = computed(
    () => page.props.value.user
)

let datas;
datas = reactive({
    editForm: false,
    hadARespondThisWeek: false,
});
const lastCondition = reactive({name: 'none',})

// Récupération du choix fais pas l'utilisateur
const form = useForm({
    'overall_condition_choice': null,
});
const updateForm = useForm({
    'overall_condition_choice': null,
})

if(props.last_user_condition){
    lastCondition.name = getOverallConditionNameById(props.overall_condition_types, props.last_user_condition.overall_condition_type_id)
    updateForm.overall_condition_choice = props.last_user_condition.overall_condition_type_id

    datas.hadARespondThisWeek = getHadRespondThisWeek(props.last_user_condition.updated_at)

}

function sumbitEditForm(){
    document.getElementById('overallConditionUpdateForm').submit()
}

function editFormSwitch(){
    datas.editForm = !datas.editForm
}

const emitter = defineEmits(['overallConditionUpdated'])

const create = () => {
        datas.hadARespondThisWeek = true,
        lastCondition.name = getOverallConditionNameById(props.overall_condition_types, form.overall_condition_choice),
        form.post('/overall-condition/store')
}
const update = () => {
    editFormSwitch(),
        emitter('overallConditionUpdated', true),
        lastCondition.name = getOverallConditionNameById(props.overall_condition_types, updateForm.overall_condition_choice),
        updateForm.put(`/overall-condition/update/${props.last_user_condition.id}`)
}


</script>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
export default {
    layout: AppLayout
}
</script>
