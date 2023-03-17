<template>
    <div class="success_message" v-if="page.props.value.flash.success">
        {{page.props.value.flash.success}}
    </div>

    <nav class="w-full bg-white dark:bg-slate-800 z-20 fixed top-O border-b border-slate-100 dark:border-slate-700">
        <div class="p-2 h-10 flex justify-between text-xs md:text-sm items-center border-b border-slate-100 dark:border-slate-700">
            <Link :href="route('survey.index')">Dashbord / <slot name="header"></slot></Link>
            <div></div>
            <div></div>
        </div>

        <div class="h-12 max-w-screen-xl px-8 m-auto flex gap-4 pt-4 pb-[1.3rem] items-center">
            <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                    <a  v-on:click="toggleTabs(1)"  v-bind:class="{'inactive-tab': openTab !== 1, 'active-tab': openTab === 1}">Summary</a>
                </li>
                <li class="mr-2">
                    <a  v-on:click="toggleTabs(2)"  v-bind:class="{'inactive-tab': openTab !== 2, 'active-tab': openTab === 2}">Table</a>
                </li>
            </ul>
        </div>

    </nav>

    <main class="max-w-screen-xl px-8 mx-auto pt-32 bg-gray-100">
        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
            <slot name="tab1"></slot>
        </div>
        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
            <slot name="tab2"></slot>
        </div>
    </main>

</template>

<script setup>
import {Link, usePage} from '@inertiajs/inertia-vue3'

const page = usePage()

</script>

<script>
export default {
    name: "slate-tabs",
    data() {
        return {
            openTab: 1
        }
    },
    methods: {
        toggleTabs: function(tabNumber){
            this.openTab = tabNumber
        }
    }
}
</script>

