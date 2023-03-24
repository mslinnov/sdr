<template>
    <div class="rounded-md px-2 pb-2 shadow-md dark:text-gray-300 bg-white dark:bg-slate-700 flex flex-col items-center gap-4 w-full md:w-96">

        <div class="-mt-4">
            <slot name="image"></slot>
        </div>

        <div class=" flex-1">
            <slot name="title"></slot>
            <slot></slot>
        </div>

    </div>

</template>
