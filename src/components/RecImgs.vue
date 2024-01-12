<template>
    <div class="w-40 h-40 lg:w-60 lg:h-60 relative">
        <img class="object-cover h-full" :src="img" :alt="name">
        <p class="absolute bottom-0 left-0 w-full bg-black/40 p-2 text-white text-sm lg:text-xl">{{ name }}</p>
    </div>
</template>

<script setup>
defineProps([
        'img',
        'name',
    ]);
</script> 