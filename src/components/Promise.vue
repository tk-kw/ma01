<template>
	<div class="flex flex-col items-center w-[17rem] relative">
		<div class="mb-8">
			<img :src="img" alt="" />
		</div>
		<div class="absolute -rotate-12 top-64 -left-14 opacity-60 w-28">
			<img :src="textimg" alt="" />
		</div>
		<div class="ma-bold-wider text-2xl bg-oga/60 w-full text-center py-2 mb-4">
			{{ title }}
		</div>
		<div class="text-xl">{{ description }}</div>
	</div>
</template>

<script setup>
defineProps([
        'img',
        'textimg',
        'title',
        'description'
    ]);
</script> 