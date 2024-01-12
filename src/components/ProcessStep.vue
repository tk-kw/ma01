<template>
	<div class="flex gap-4 items-center">
		<p class="ma-circle font-bold text-[1.25rem]">{{ num }}</p>
		<p class="text-2xl lg:text-4xl font-bold">{{ text }}</p>
	</div>
</template>

<script setup>
defineProps([
    'num',
    'text'
]);
</script>
