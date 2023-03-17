<template>

    <nav>
        <div class="h-12 px-8 m-auto flex gap-4 pt-4 pb-[1.3rem] items-center">
            <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                    <a  v-on:click="toggleTabs(1)"  v-bind:class="{'inactive-tab': openTab !== 1, 'active-tab': openTab === 1}">Exports</a>
                </li>
                <li class="mr-2">
                    <a  v-on:click="toggleTabs(2)"  v-bind:class="{'inactive-tab': openTab !== 2, 'active-tab': openTab === 2}">Vue d'ensemble</a>
                </li>
<!--                <li class="mr-2">-->
<!--                    <a  v-on:click="toggleTabs(3)"  v-bind:class="{'inactive-tab': openTab !== 3, 'active-tab': openTab === 3}">Joueurs</a>-->
<!--                </li>-->
            </ul>
        </div>

    </nav>

    <main>
        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
            <slot name="export"></slot>
        </div>
        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
            <slot name="summary"></slot>
        </div>
<!--        <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">-->
<!--            <slot name="players"></slot>-->
<!--        </div>-->
    </main>
</template>


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
