<template>
    <div class="border rounded-xl border-gray-400 dark:border-gray-800 p-6 shadow-sm dark:text-gray-300 bg-white dark:bg-slate-700 flex flex-col gap-4">
        <div class="text-gray-500 dark:text-gray-100 font-medium">
            <slot name="header" />
        </div>
        <slot />
    </div>

</template>
