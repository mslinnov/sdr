<template>
    <div class="border rounded-xl border-gray-400 p-6 shadow-sm bg-white flex flex-col gap-4">
        <div class="text-gray-500 font-medium">
            <slot name="header" />
        </div>
        <slot />
    </div>

</template>
