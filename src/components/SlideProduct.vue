<template>
	<img
		class="object-cover h-full w-40 lg:w-56"
		:src="img"
		:alt="name"
	/>
</template>

<script setup>
defineProps([
    'img',
    'name'
])
</script>