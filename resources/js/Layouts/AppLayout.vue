<template>

    <div class="fixed top-10 mt-2 mx-2 z-20">
        <div ref="successMessage" class="success_message" v-if="page.props.value.flash.success">
            {{page.props.value.flash.success}}
        </div>
    </div>

    <div class="w-full h-full">

        <header class="rounded-b-lg bg-neutral-50 dark:bg-slate-900 drop-shadow-md container mx-auto">
            <div class="grid grid-cols-3  p-2 justify-between align-middle items-center">
                <Link class="relative inline-block" :href="route('notifications')">
                    <BellIcon class="h-10 w-10 text-gray-800 dark:text-gray-200"/>
                    <span v-show="unreadNotificationsCount>0" class="notification-count-badge">{{ unreadNotificationsCount[0] }}</span>
                </Link>
                <div class="flex flex-col items-center">
                    <img :src="'image/sdr.png'" class="w-5">
                    <h1 class="text-red-600 font-bold w-full text-center">Loan Player</h1>
                </div>
                <div class="flex gap-2 align-middle items-center h-16">
                    <div class="text-red-600 font-bold pr-2">{{user.first_name}} {{user.last_name}}</div>
                    <img :src="user.image[0].src" v-if="user.image[0]"
                         alt="Photo de profil de joueur"
                         class="rounded-full aspect-square w-16 object-cover object-top	">
                </div>
            </div>
            <div class="flex p-4 justify-between align-middle items-center">
                <div v-for="day in week"
                     class="flex px-2 py-5 flex-col items-center drop-shadow-md rounded-full w-12"
                     :class="day.actif">
                    <span class="text-2xl font-bold">{{day.date}}</span>
                    <span class="text-s">{{ day.day }}</span>
                </div>
            </div>
        </header>

        <section class="bg-slate-50 container mx-auto dark:bg-gray-800 pb-20">
            <slot>
            </slot>
        </section>

        <menu class=" py-4 px-12 border-solid border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 w-full fixed bottom-0 left-0 right-0
        text-white flex justify-between container mx-auto">
            <Link :href="route('app-index')">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21.005 21.837">
                    <g id="Home" transform="translate(0 0)"
                       :fill="$page.url.endsWith('app') || $page.url.endsWith('app/') || $page.url === '/' ? 'blue' : 'gray'"
                    >
                        <path id="icon_home" data-name="icon home" d="M8.855,21.836H4.384A4.361,4.361,0,0,1,0,17.518V8.751A3.316,3.316,0,0,1,1.313,6.166l.812-.594a.885.885,0,0,1,.954.15A.854.854,0,0,1,3.13,6.941l-.783.575a1.61,1.61,0,0,0-.6,1.235v8.759a2.624,2.624,0,0,0,2.634,2.585H8.855v.02h.063a.862.862,0,0,1-.031,1.723Zm7.756-.01H14.658a2.108,2.108,0,0,1-2.124-2.092V15.771a.554.554,0,0,0-.559-.55H9.04a.554.554,0,0,0-.544.565V17.36a.876.876,0,0,1-1.75-.062V15.786A2.305,2.305,0,0,1,9.069,13.5h2.916A2.305,2.305,0,0,1,14.3,15.786v3.958a.366.366,0,0,0,.37.364H16.66a2.605,2.605,0,0,0,2.624-2.585V8.755a1.613,1.613,0,0,0-.622-1.244L11.945,2.237a2.32,2.32,0,0,0-2.916,0L6.871,3.825a.9.9,0,0,1-1.19-.194.872.872,0,0,1,.15-1.237L7.961.876a4.081,4.081,0,0,1,5.054,0l6.717,5.27A3.34,3.34,0,0,1,21,8.731L21,17.509v0a4.35,4.35,0,0,1-4.383,4.315Z"/>
                    </g>
                </svg>
            </Link>
            <Link :href="route('survey.create')">
                <svg id="Groupe_48" data-name="Groupe 48" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20.889 25.471" :fill="$page.url.startsWith('/survey') ? 'blue' : 'gray' ">
                    <path id="Tracé_17" data-name="Tracé 17" d="M-284.3,521.117q0-5.638,0-11.275a1.3,1.3,0,0,1,1.452-1.456h17.482a1.291,1.291,0,0,1,1.441,1.441c0,.946-.006,1.893.007,2.839a.67.67,0,0,0,.154.385,1.262,1.262,0,0,1,.327,1.1c-.083.406-.167.814-.285,1.211a6.027,6.027,0,0,0-.208,1.753q.011,7.641,0,15.281a1.3,1.3,0,0,1-1.449,1.46h-17.482a1.293,1.293,0,0,1-1.444-1.438Q-284.3,526.768-284.3,521.117Zm15.625,9.239c-.258-.709-.5-1.371-.737-2.037a.576.576,0,0,1,0-.308q1.293-5.342,2.59-10.682a9.1,9.1,0,0,0,.335-1.787c.049-1.44.016-2.882.016-4.324v-.27h-15.261V531.3h15.247v-4.413c-.173.576-.314,1.157-.46,1.736a.494.494,0,0,1-.107.234C-267.582,529.35-268.116,529.838-268.678,530.356Zm-13.908,1.791V510.1h16.981v2.881l.828-.38v-.22q0-1.273,0-2.547c0-.481-.125-.6-.617-.6h-17.428c-.519,0-.63.114-.63.643v22.5c0,.519.114.632.642.632h17.4c.519,0,.632-.115.632-.642q0-6.1,0-12.2v-.27c-.246.828-.431,1.662-.653,2.487a6.179,6.179,0,0,0-.2,1.648c.011,2.6,0,5.2,0,7.8v.322Zm14.286-3.284c.221-.271.529-.407.619-.785.809-3.381,1.638-6.758,2.46-10.136.181-.744.359-1.489.544-2.254l-.815-.2c-.03.111-.055.194-.075.279-.968,3.978-1.929,7.959-2.914,11.933A1.67,1.67,0,0,0-268.3,528.863Zm3.825-14.005c.072-.3.158-.584.2-.876a.377.377,0,0,0-.292-.442.378.378,0,0,0-.5.227c-.1.284-.156.585-.234.893Z" transform="translate(284.302 -508.385)"/>
                    <path id="Tracé_18" data-name="Tracé 18" d="M-246.663,604.1a5.022,5.022,0,0,1,.684.055,1.245,1.245,0,0,1,.992,1.214c.007.3.008.6,0,.9a1.269,1.269,0,0,1-1.238,1.239c-.3.009-.6.008-.9,0a1.271,1.271,0,0,1-1.253-1.252c-.007-.283,0-.566,0-.848a1.272,1.272,0,0,1,1.293-1.294c.141,0,.283,0,.424,0Zm.828,1.734c0-.846-.023-.868-.881-.868-.772,0-.815.044-.815.828,0,.845.024.869.881.869C-245.879,606.659-245.835,606.614-245.835,605.831Z" transform="translate(252.202 -593.924)"/>
                    <path id="Tracé_19" data-name="Tracé 19" d="M-246.679,644.084a1.4,1.4,0,0,1,1.695,1.69,6.054,6.054,0,0,1-.049.736,1.231,1.231,0,0,1-1.178.967c-.309.01-.619.01-.928,0a1.269,1.269,0,0,1-1.24-1.237c-.008-.283,0-.566,0-.848a1.273,1.273,0,0,1,1.3-1.309C-246.944,644.083-246.811,644.084-246.679,644.084Zm.844,1.7c0-.815-.038-.855-.816-.855-.859,0-.881.022-.881.868,0,.79.039.829.842.829C-245.87,646.631-245.835,646.6-245.835,645.789Z" transform="translate(252.202 -629.651)"/>
                    <path id="Tracé_20" data-name="Tracé 20" d="M-246.685,683.95a5.349,5.349,0,0,1,.735.066,1.236,1.236,0,0,1,.962,1.183q.015.463,0,.928a1.269,1.269,0,0,1-1.242,1.236c-.3.009-.6.008-.9,0a1.271,1.271,0,0,1-1.25-1.256c-.007-.282,0-.565,0-.848a1.273,1.273,0,0,1,1.3-1.291c.133,0,.265,0,.4,0Zm.008.868c-.821,0-.854.033-.854.842s.033.854.842.854.855-.034.855-.843S-245.869,684.818-246.677,684.818Z" transform="translate(252.202 -665.29)"/>
                    <path id="Tracé_21" data-name="Tracé 21" d="M-199.836,576.464v.817H-208.3v-.817Z" transform="translate(216.38 -569.228)"/>
                    <path id="Tracé_22" data-name="Tracé 22" d="M-200.611,616.4v.818h-7.608V616.4Z" transform="translate(216.305 -604.919)"/>
                    <path id="Tracé_23" data-name="Tracé 23" d="M-213.441,544.507v.818H-220.2v-.818Z" transform="translate(227.013 -540.668)"/>
                    <path id="Tracé_24" data-name="Tracé 24" d="M-201.466,657.164h-6.755v-.827h6.755Z" transform="translate(216.307 -640.612)"/>
                    <path id="Tracé_25" data-name="Tracé 25" d="M-246.688,564.3v.851c-.141,0-.271-.006-.4,0a.417.417,0,0,0-.435.436c-.009.274-.009.548,0,.822a.415.415,0,0,0,.436.435c.238.009.477,0,.716,0,.4,0,.539-.146.542-.546,0-.088,0-.176,0-.283h.816a1.315,1.315,0,0,1-1.341,1.679c-.256,0-.513.005-.769,0a1.272,1.272,0,0,1-1.252-1.255c-.006-.265,0-.53,0-.8a1.277,1.277,0,0,1,1.35-1.345Z" transform="translate(252.196 -558.358)"/>
                    <path id="Tracé_26" data-name="Tracé 26" d="M-208.3,697.05v-.818h5.91v.818Z" transform="translate(216.381 -676.267)"/>
                    <path id="Tracé_27" data-name="Tracé 27" d="M-233.031,562.014l.559.52-1.683,1.684-.521-.562Z" transform="translate(239.951 -556.314)"/>
                </svg>
            </Link>
            <Link :href="route('bodyParts')">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26.47 26.635">
                    <g id="Groupe_47" data-name="Groupe 47" transform="translate(603.407 -318.735)" :stroke="$page.url.startsWith('/body') ? 'blue' : 'gray' ">
                        <path id="Tracé_1" data-name="Tracé 1" d="M-581.2,332c.712.709,1.4,1.4,2.094,2.085a6.368,6.368,0,0,1,1.824,3.421,6.282,6.282,0,0,1-5.006,7.381,6.268,6.268,0,0,1-5.8-1.806c-.7-.69-1.391-1.39-2.1-2.1-.071.066-.132.12-.19.178q-.954.953-1.907,1.906a6.389,6.389,0,0,1-8.046.928,5.94,5.94,0,0,1-2.778-4.357,6.262,6.262,0,0,1,.874-4.341,7.712,7.712,0,0,1,.965-1.208c.671-.707,1.375-1.383,2.086-2.091-.067-.072-.127-.138-.19-.2-.739-.748-1.509-1.468-2.212-2.249a6.076,6.076,0,0,1-1.539-5.2,6.155,6.155,0,0,1,5-5.261,6.043,6.043,0,0,1,5.418,1.451c.794.7,1.517,1.479,2.271,2.225.072.071.132.155.216.254.093-.087.159-.147.223-.21.642-.641,1.273-1.294,1.928-1.922a6.241,6.241,0,0,1,6.769-1.526,6.349,6.349,0,0,1,4.073,6.891,6.5,6.5,0,0,1-1.876,3.639q-.956.951-1.906,1.908C-581.063,331.848-581.118,331.911-581.2,332Zm-9.541-8.44c-.77-.776-1.5-1.542-2.264-2.279a5.606,5.606,0,0,0-8.12.383,5.624,5.624,0,0,0,.006,7.26c.779.86,1.629,1.656,2.447,2.48.009.009.031.007.057.012.057-.054.118-.111.178-.17q.783-.782,1.566-1.564c.231-.229.45-.253.622-.075s.141.387-.089.622c-.047.049-.1.1-.144.144-1.421,1.421-2.851,2.835-4.262,4.266a5.5,5.5,0,0,0-1.535,5.37,5.494,5.494,0,0,0,4.869,4.228,5.543,5.543,0,0,0,4.547-1.67q6.634-6.626,13.261-13.259a5.631,5.631,0,0,0,1.612-3.1,5.593,5.593,0,0,0-5.622-6.484,5.617,5.617,0,0,0-3.948,1.731q-3.721,3.728-7.448,7.449c-.083.083-.171.2-.272.218a.621.621,0,0,1-.415-.066.31.31,0,0,1-.075-.433,1.079,1.079,0,0,1,.178-.213q.763-.767,1.528-1.53Zm9.052,9.019-7.882,7.882c.73.743,1.456,1.542,2.245,2.272a5.377,5.377,0,0,0,5.161,1.342,5.556,5.556,0,0,0,3.188-8.648,13.116,13.116,0,0,0-1.263-1.39C-580.726,333.525-581.229,333.034-581.687,332.574Z" transform="translate(0 0)" stroke-width="0.4"/>
                        <path id="Tracé_2" data-name="Tracé 2" d="M-528.976,400.336a1.2,1.2,0,0,1-.885-.365c-1.261-1.257-2.526-2.51-3.774-3.778a1.241,1.241,0,0,1,.013-1.822q2.768-2.789,5.556-5.558a1.246,1.246,0,0,1,1.825-.022q1.916,1.877,3.792,3.8a1.248,1.248,0,0,1-.08,1.858q-1.587,1.6-3.183,3.183-1.133,1.133-2.265,2.266A1.324,1.324,0,0,1-528.976,400.336Zm.028-.706a2.662,2.662,0,0,0,.431-.284q2.722-2.709,5.434-5.429a.538.538,0,0,0,.009-.881q-1.813-1.82-3.633-3.633a.533.533,0,0,0-.862-.008q-2.737,2.731-5.467,5.468a.525.525,0,0,0-.01.843q1.83,1.839,3.671,3.667A2.208,2.208,0,0,0-528.948,399.63Z" transform="translate(-62.137 -62.396)" stroke-width="0.4"/>
                        <path id="Tracé_3" data-name="Tracé 3" d="M-405.644,362.811a.794.794,0,0,1,.811-.769.792.792,0,0,1,.757.8.8.8,0,0,1-.81.77A.8.8,0,0,1-405.644,362.811Z" transform="translate(-177.453 -38.716)" stroke-width="0.4"/>
                        <path id="Tracé_4" data-name="Tracé 4" d="M-538.522,497.3a.791.791,0,0,1-.779.779.8.8,0,0,1-.786-.777.791.791,0,0,1,.8-.788A.784.784,0,0,1-538.522,497.3Z" transform="translate(-56.694 -159.502)" stroke-width="0.4"/>
                        <path id="Tracé_5" data-name="Tracé 5" d="M-445.251,363.8a.779.779,0,0,1,.776-.777.785.785,0,0,1,.783.774.792.792,0,0,1-.793.793A.785.785,0,0,1-445.251,363.8Z" transform="translate(-141.877 -39.597)" stroke-width="0.4"/>
                        <path id="Tracé_6" data-name="Tracé 6" d="M-557.809,477.913a.773.773,0,0,1-.778.773.777.777,0,0,1-.775-.8.784.784,0,0,1,.791-.763A.78.78,0,0,1-557.809,477.913Z" transform="translate(-39.381 -142.082)" stroke-width="0.4"/>
                        <path id="Tracé_7" data-name="Tracé 7" d="M-519.92,517.46a.774.774,0,0,1-.776-.775.773.773,0,0,1,.8-.778.78.78,0,0,1,.767.787A.781.781,0,0,1-519.92,517.46Z" transform="translate(-74.111 -176.921)" stroke-width="0.4"/>
                        <path id="Tracé_8" data-name="Tracé 8" d="M-405.855,403.314a.788.788,0,0,1-.763-.793.791.791,0,0,1,.8-.763.782.782,0,0,1,.771.809A.778.778,0,0,1-405.855,403.314Z" transform="translate(-176.578 -74.389)" stroke-width="0.4"/>
                        <path id="Tracé_9" data-name="Tracé 9" d="M-423.383,343.469a.77.77,0,0,1-.773.775.776.776,0,0,1-.782-.795.786.786,0,0,1,.789-.767A.782.782,0,0,1-423.383,343.469Z" transform="translate(-160.123 -21.327)" stroke-width="0.4"/>
                        <path id="Tracé_10" data-name="Tracé 10" d="M-385.447,381.458a.785.785,0,0,1,.779.775.787.787,0,0,1-.776.78.776.776,0,0,1-.786-.79A.771.771,0,0,1-385.447,381.458Z" transform="translate(-194.89 -56.156)" stroke-width="0.4"/>
                        <path id="Tracé_11" data-name="Tracé 11" d="M-539.482,536.961a.78.78,0,0,1-.79.762.788.788,0,0,1-.773-.784.8.8,0,0,1,.807-.778A.786.786,0,0,1-539.482,536.961Z" transform="translate(-55.834 -195.113)" stroke-width="0.4"/>
                        <path id="Tracé_12" data-name="Tracé 12" d="M-578.151,498.276a.8.8,0,0,1-.786.774.787.787,0,0,1-.777-.806.78.78,0,0,1,.8-.757A.787.787,0,0,1-578.151,498.276Z" transform="translate(-21.1 -160.376)" stroke-width="0.4"/>
                        <path id="Tracé_13" data-name="Tracé 13" d="M-424.329,383.2a.765.765,0,0,1-.761.784.767.767,0,0,1-.791-.781.764.764,0,0,1,.774-.771A.763.763,0,0,1-424.329,383.2Z" transform="translate(-159.276 -57.036)" stroke-width="0.4"/>
                        <path id="Tracé_14" data-name="Tracé 14" d="M-559.564,518.43a.765.765,0,0,1-.761-.785.765.765,0,0,1,.8-.767.766.766,0,0,1,.748.8A.767.767,0,0,1-559.564,518.43Z" transform="translate(-38.515 -177.793)" stroke-width="0.4"/>
                        <path id="Tracé_15" data-name="Tracé 15" d="M-462.629,423.757a1.092,1.092,0,0,1-.695-.7.354.354,0,0,1,.512-.354,1.828,1.828,0,0,1,.539.549C-462.138,423.471-462.371,423.766-462.629,423.757Z" transform="translate(-125.643 -93.163)" stroke-width="0.4"/>
                        <path id="Tracé_16" data-name="Tracé 16" d="M-498.422,459.907c-.037.049-.093.192-.194.24a.439.439,0,0,1-.372-.006,1.738,1.738,0,0,1-.457-.461.414.414,0,0,1,.006-.369.471.471,0,0,1,.327-.182C-498.882,459.111-498.43,459.594-498.422,459.907Z" transform="translate(-93.164 -125.922)" stroke-width="0.4"/>
                    </g>
                </svg>
            </Link>
            <Link :href="route('my-account')">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 19.8 21.8">
                    <g id="Icon" transform="translate(0.9 0.9)"  :stroke="$page.url.startsWith('/app/my-account') ? 'blue' : 'gray' ">
                        <path id="Path" d="M18,6.667V4.444A4.472,4.472,0,0,0,13.5,0h-9A4.472,4.472,0,0,0,0,4.444V6.667" transform="translate(0 13.333)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.8"/>
                        <ellipse id="Oval" cx="4.5" cy="4.444" rx="4.5" ry="4.444" transform="translate(4.5 0)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.8"/>
                    </g>
                </svg>
            </Link>
        </menu>

    </div>
</template>


<!--fill="#0f1bfe"-->

<script setup>
import { BellIcon, HomeIcon, ClipboardIcon, UserIcon } from '@heroicons/vue/24/outline'
import {Link, usePage} from "@inertiajs/inertia-vue3";
import {computed, onMounted, ref, watch} from "vue";
import moment from "moment/moment";

// Récupération de la semaine et du jour courant
let current_week = moment(new Date()).week()
const current_day = moment(new Date()).day()
if (current_day > 2){
    current_week = current_week + 1
}
let week = []

// Intiialisation du tableau de la semaine en fonction du jour courant
for (let i = -4; i < 3; i++){
    const newDay = moment().week(current_week).day(i).format('dddd').substring(0,3)
    const newDate = moment().week(current_week).day(i).date()
    let active = 'inactive'
    if ( current_day === moment().week(current_week).day(i).day() ){
        active = 'active'
    }
    week.push({day: newDay, date: newDate, actif: active})
}


const page = usePage()
const user = computed(
    () => page.props.value.user
)

const unreadNotificationsCount = computed(
    () => page.props.value.unreadNotificationsCount
)



// Ajouter un watcher pour détecter les changements dans la propriété flash.success
watch(
    () => page.props.value.flash.success, // Passer une fonction qui retourne la valeur de la propriété flash.success
    (value) => {
        if (value) {
            setTimeout(() => {
                page.props.value.flash.success = null // Remettre la propriété à null
            }, 3000) // Masquer après 3 secondes
        }
    }
)

</script>


<style>
.active{
    @apply bg-red-600 text-white
}
.inactive{
    @apply bg-white dark:bg-neutral-700
}
</style>

