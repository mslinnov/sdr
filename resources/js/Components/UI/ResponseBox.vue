<template>
    <div class="rounded-md pl-2 pr-6 pt-6 pb-8 shadow-md dark:text-gray-300 bg-white dark:bg-slate-700 flex gap-4">

        <div class="place-items-end ml-6">
            <div>
                <slot name="icon_number"></slot>
            </div>
        </div>

        <div class=" flex-1">
            <div class="flex justify-between pb-4 gap-2">
                <div class="text-black dark:text-gray-100 font-medium text-md ">
                    <slot name="header" />
                </div>
                 <slot name="average" />
            </div>
            <slot />
        </div>

    </div>

</template>
