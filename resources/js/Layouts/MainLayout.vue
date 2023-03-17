<template>
    <div class="success_message" v-if="page.props.value.flash.success">
        {{page.props.value.flash.success}}
    </div>
    <div class="relative min-h-screen md:flex font-sans text-gray-900 bg-gray-50 dark:bg-gray-800 dark:text-gray-200">

        <!-- Mobile menu bar -->
        <div class="py-2 px-4 bg-white dark:bg-slate-800 dark:text-gray-200 flex justify-between md:hidden">
            <!-- Logo -->
            <Link :href="route('dashboard')">
                <img :src="'/image/sdr.png'" alt="Logo du stade de reims" class=" h-12">
            </Link>

            <!-- Nav -->
            <button class="focus:bg-slate-100 dark:focus:bg-slate-800 p-4 rounded" @click="displaySideBar">
                <Bars3Icon class="h-5 w-5"/>
            </button>
        </div>

        <!--sidebar-->
        <aside class="sidebar absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out
         bg-white dark:bg-slate-800 py-6 px-10 w-64 border-r border-gray-200 dark:border-gray-700 min-h-screen dark:border-gray-600">
            <!-- Logo -->
            <Link :href="route('dashboard')">
                <img :src="'/image/logo.png'" alt="Logo du stade de reims" class=" h-20">
            </Link>

            <!--Nav bar-->
            <nav>
                <ul class="flex flex-col gap-y-2 pt-20">
                    <li class="item-menu group" v-for="item in mainMenu" :class="item.activeClass">
                        <span :class="$page.component.startsWith(item.component) ? 'active-menu' : 'item-menu' "></span>
                        <Link :href="item.url" class="block" @click="displaySideBar">{{ item.name }}</Link>
                    </li>
                </ul>

                <div class="my-6 text-sm font-medium text-gray-800 dark:text-gray-400 w-full border-t border-gray-100"></div>
                <ul>
                    <li class="item-menu group">
                        <span class="item-menu"></span>
                        <Link href="/app"  @click="displaySideBar">Application Joueur</Link>
                    </li>
                </ul>
            </nav>
        </aside>

        <!-- Main section -->
        <main class="flex-1 p-6">
            <div class="items-center justify-between">
                <slot></slot>
            </div>
        </main>

    </div>

</template>

<script setup>
import {Link, usePage} from '@inertiajs/inertia-vue3'
import {Bars3Icon} from '@heroicons/vue/24/solid'

const page = usePage()

const mainMenu = [
    {name: 'Dashboard', url: '/', component: 'Index'},
    {name: 'Joueurs', url: '/user', component: 'User'},
    {name: 'Clubs', url: '/lending-club', component: 'LendingClub'},
]
//{name: 'Overall condition', url: '/overall-condition', component: 'OverallCondition'},
//{name: 'Survey', url: '/survey', component: 'Survey'},
</script>


<script>

//Grab everything we need
const btn = document.querySelector(".mobile-menu-button");

//add event listener on the click event
export default {
    methods: {
        displaySideBar() {
            document.querySelector(".sidebar").classList.toggle('-translate-x-full');
        }
    }
};


</script>
