<template>
    <div class="rounded-md px-2 pb-2 shadow-md bg-white flex flex-col items-center gap-4 md:w-96 mx-auto">

        <div class="-mt-4">
            <slot name="image"></slot>
        </div>

        <div class=" flex-1 w-full">
            <slot name="title"></slot>
            <slot></slot>
        </div>

    </div>

</template>
